function render(teamMembers) {
    const renderedHtml = `
      <html>
        <head>
          <title>Team Profile</title>
        </head>
        <body>
          <h1>Team Members</h1>
          ${teamMembers.map(member => renderMember(member)).join('')}
        </body>
      </html>
    `;
    return renderedHtml;
  }
  
  function renderMember(member) {
    return `
      <div>
        <h2>${member.getName()}</h2>
        <p>ID: ${member.getId()}</p>
        <p>Email: ${member.getEmail()}</p>
        <p>Role: ${member.getRole()}</p>
        ${renderAdditionalInfo(member)}
      </div>
    `;
  }
  
  function renderAdditionalInfo(member) {
    if (member instanceof Manager) {
      return `<p>Office Number: ${member.getOfficeNumber()}</p>`;
    } else if (member instanceof Engineer) {
      return `<p>GitHub: ${member.getGithub()}</p>`;
    } else if (member instanceof Intern) {
      return `<p>School: ${member.getSchool()}</p>`;
    }
    return '';
  }
  
  module.exports = render;
  