document
  .getElementById("resume-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value.split(",");
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    const resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = `
      <h2 style='color: blue'>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Skills</h3>
      <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
      <h3>Work Experience</h3>
      <p>${experience}</p>
      <h3>Education</h3>
      <p>${education}</p>
    `;

  document.getElementById("resume-output").innerHTML = resumeHTML;
  });
  
  function downloadResume() {
    const resumeContent = document.getElementById("resume-output").innerHTML;
  
    const blob = new Blob([resumeContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.html";
    link.click();
  }
