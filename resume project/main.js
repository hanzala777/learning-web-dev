document.getElementById('personalForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('skills', skills);
  
    document.getElementById('downloadButton').disabled = false;
  
    alert('Personal information saved!');
  });
  
  document.getElementById('professionalForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
  
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var skills = localStorage.getItem('skills');
  
    var result = document.getElementById('result');
    result.innerHTML = `
      <h2>Generated Resume</h2>
      <div class="personal-info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
      </div>
      <div class="professional-info">
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
      </div>
    `;
  
    document.getElementById('downloadButton').disabled = false;
  });
  
  document.getElementById('downloadButton').addEventListener('click', function() {
    var result = document.getElementById('result').innerHTML;
    var htmlContent = `
      <html>
      <head>
        <title>Resume</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
          }
          
          .personal-info {
            margin-bottom: 20px;
          }
          
          .personal-info p {
            margin: 0;
          }
        </style>
      </head>
      <body>
        ${result}
      </body>
      </html>
    `;
  
    var filename = 'resume.pdf';
  
    html2pdf().set({ filename: filename }).from(htmlContent).save();
  });
  