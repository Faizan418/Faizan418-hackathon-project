document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    // Generate Resume Preview
    const resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h3>Work Experience</h3>
      <p>${experience}</p>
      <h3>Education</h3>
      <p>${education}</p>
    `;
  
    // Show the download button
    document.getElementById('download-pdf').style.display = 'block';
  });
  
  // Download as PDF functionality
  document.getElementById('download-pdf').addEventListener('click', function() {
    const resumeContent = document.getElementById('resume-output').innerHTML;
    const opt = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Convert HTML to PDF using jsPDF and html2pdf
    html2pdf().from(resumeContent).set(opt).save();
  });
  
  