const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./tests/page-template");
const Manager = require("./lib/teamManager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamMembers = [];

async function gatherManagerInfo() {
  const managerInfo = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's id:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number:",
    },
  ]);

  const manager = new Manager(
    managerInfo.name,
    managerInfo.id,
    managerInfo.email,
    managerInfo.officeNumber
  );

  teamMembers.push(manager);
await Menu();
  return managerInfo;
}
async function Menu() {
  const response = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["addEngineer", "addIntern", "finish"],
  });
  if (response.action === "addEngineer") {
    const engineerResponse = await inquirer.prompt(
      {
        name: "name",
        type: "input",
        message: "What`s your name?",
      },
      { name: "email", type: "input", message: "What`s your email?" },
      { name: "id", type: "input", message: "What`s your id?" },
      { name: "github", type: "input", message: "What`s your github?" }
  );
  console.log(engineerResponse);
    const engineer = new Engineer(
      engineerResponse.name,
      engineerResponse.id,
      engineerResponse.email,
      engineerResponse.github
    );
    teamMembers.push(engineer);

  await Menu();
  } else if (response.action === "addIntern") {
    const internResponse = await inquirer.prompt(
      {
        name: "name",
        type: "input",
        message: "What`s your name?",
      },
      { name: "email", type: "input", message: "What`s your email?" },
      { name: "id", type: "input", message: "What`s your id?" },
      { name: "school", type: "input", message: "What`s your school?" }
    );
    const intern = new Intern(
      internResponse.name,
      internResponse.id,
      internResponse.email,
      internResponse.school
    );
    teamMembers.push(intern);
    await Menu();
  } else if (response.action === "finish") {
    const HTML = render(teamMembers);
    fs.writeFileSync("./src/team.html", HTML);
  }
}
gatherManagerInfo();