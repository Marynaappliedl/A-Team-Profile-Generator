const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./src/TeamProfile'); // Ensure correct path

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

async function gatherManagerInfo() {
  const managerInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the team manager's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email:",
    },
    {
      type: 'input',
      name: 'officeNumber',
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

  return managerInfo;
}

// Continue with gatherEngineerInfo, gatherInternInfo, and promptUser...
