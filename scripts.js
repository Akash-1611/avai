let jobListings = [];

function postAvailability() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const workSpec = document.getElementById('workSpec').value;
    const jobType = document.getElementById('jobType').value;
    const minPay = document.getElementById('minPay').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Validation
    if (!name || !state || !email || !minPay || !experience || !skills) {
        alert("Please fill out all required fields.");
        return;
    }

    // Create a new job listing object
    const newJob = {
        name,
        state,
        email,
        workSpec,
        jobType,
        minPay,
        experience,
        skills
    };

    // Add the new job listing to the array
    jobListings.push(newJob);

    // Update the job listings display
    displayJobListings();

    // Clear the form
    document.getElementById('availabilityForm').reset();

    // Display success message
    alert("Availability posted successfully!");
}

function resetForm() {
    // Clear the form
    document.getElementById('availabilityForm').reset();
}

function displayJobListings() {
    const jobListingsContainer = document.getElementById('job-listings');
    jobListingsContainer.innerHTML = '';

    jobListings.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('card', 'mb-3');
        jobCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${job.workSpec}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${job.jobType} | ${job.state}</h6>
                <p class="card-text"><strong>Min Pay:</strong> ₹${job.minPay}</p>
                <p class="card-text"><strong>Experience:</strong> ${job.experience} years</p>
                <p class="card-text"><strong>Skills:</strong> ${job.skills}</p>
                <button class="btn btn-warning edit-button" onclick="editJob(${index})">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

function editJob(index) {
    const job = jobListings[index];
    document.getElementById('name').value = job.name;
    document.getElementById('state').value = job.state;
    document.getElementById('email').value = job.email;
    document.getElementById('workSpec').value = job.workSpec;
    document.getElementById('jobType').value = job.jobType;
    document.getElementById('minPay').value = job.minPay;
    document.getElementById('experience').value = job.experience;
    document.getElementById('skills').value = job.skills;
}