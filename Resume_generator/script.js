// Handle form submission and resume generation
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get personal info and summary
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    // Get all education entries
    const educationEntries = document.querySelectorAll('.education-entry');
    let educationHTML = '';
    educationEntries.forEach(entry => {
        const degree = entry.querySelector('.degree').value;
        const institution = entry.querySelector('.institution').value;
        const graduationYear = entry.querySelector('.graduationYear').value;
        educationHTML += `
            <div class="resume-item">
                <p>${degree}, ${institution}, ${graduationYear}</p>
            </div>
        `;
    });

    // Get all experience entries
    const experienceEntries = document.querySelectorAll('.experience-entry');
    let experienceHTML = '';
    experienceEntries.forEach(entry => {
        const position = entry.querySelector('.position').value;
        const company = entry.querySelector('.company').value;
        const experienceYears = entry.querySelector('.experienceYears').value;
        experienceHTML += `
            <div class="resume-item">
                <p>${position} at ${company}, ${experienceYears} years</p>
            </div>
        `;
    });

    // Display resume preview
    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <div class="resume-item">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p><strong>Summary:</strong> ${summary}</p>
        </div>
        <div class="resume-item">
            <h3>Education</h3>
            ${educationHTML}
        </div>
        <div class="resume-item">
            <h3>Work Experience</h3>
            ${experienceHTML}
        </div>
        <div class="resume-item">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;
});

// Add more education fields
document.getElementById('addEducationBtn').addEventListener('click', function() {
    const educationSection = document.getElementById('educationSection');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('education-entry');
    newEducationEntry.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" required>

        <label for="institution">Institution:</label>
        <input type="text" class="institution" required>

        <label for="graduationYear">Graduation Year:</label>
        <input type="number" class="graduationYear" required>
    `;
    educationSection.appendChild(newEducationEntry);
});

// Add more experience fields
document.getElementById('addExperienceBtn').addEventListener('click', function() {
    const experienceSection = document.getElementById('experienceSection');
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.classList.add('experience-entry');
    newExperienceEntry.innerHTML = `
        <label for="position">Position:</label>
        <input type="text" class="position" required>

        <label for="company">Company:</label>
        <input type="text" class="company" required>

        <label for="experienceYears">Years of Experience:</label>
        <input type="number" class="experienceYears" required>
    `;
    experienceSection.appendChild(newExperienceEntry);
});

// Download the resume as a PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumePreview = document.getElementById('resumePreview');
    var opt = {
        margin:       1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumePreview).set(opt).save();
});
