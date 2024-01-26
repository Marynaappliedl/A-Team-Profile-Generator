import inquirer from 'inquirer'; // an easy way to capture user input
const inquierer = require('inquierer');
var fs = require('fs');
const path = require("path");
const teamProfile = require("./src/Teamprofile");
//lib
const teamManager= require('./lib/teamManager.js');
const engineer= require('./lib/engineer.js');
const intern= require ('./lib/intern.js');

const TeamInfo =[];

//Creating an array of questions for user input
function userQuestions() {
    const answers= inquirer.prompt([
    { type: "input",
      name: "name",
      message: "Please tell me your name"
    },
    
    {
      type: "input",
      name: "email",
      message: "Please tell me your email address"
    },
    {
      type: "input",
      name: "role",
      message: "Please name your role"
    },
    {
      type: "input",
      name: "ID",
      message: "Provide your ID number please"
    },
  ]);
}
const createStaffMember = async (answers) => {
    let specificQuestions, specificData;
  
    if (answers.role === "Manager") {
      specificQuestions = [
        {
          type: "input",
          message: "What is your office number",
          name: "officeNumber",
        },
      ];
      specificData = Manager;
    } else if (answers.role === "Engineer") {
      specificQuestions = [
        {
          type: "input",
          message: "What is your GitHub username?",
          name: "github",
        },
      ];
      specificData = Engineer;
    } else if (answers.role === "Intern") {
      specificQuestions = [
        {
          type: "input",
          message: "What school did you go to?",
          name: "school",
        },
      ];
      specificData = Intern;
    }
  
    if (specificQuestions) {
      const specificAnswers = await inquirer.prompt(specificQuestions);
      const newStaffMember = new specificData(
        answers.name,
        answers.id,
        answers.email,
        specificAnswers[Object.keys(specificAnswers)[0]]
      );
      newStaffMemberData.push(newStaffMember);
    }
  };
  async function promptQuestions() {
    await questions();
  
    const actionAns = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: 'What would you like to do next?',
      },
    ]);
  
    if (actionAns.action === 'Add a new member') {
      return promptQuestions();
    }
  
    return createTeam();
  }
  
  function createTeam() {
    console.log('New team member data:', newStaffMemberData);
  
    const outputFilePath = './output/index.html';
    fs.writeFileSync(outputFilePath, generateTeam(newStaffMemberData), 'utf-8');
  
    console.log(`Team information saved to ${outputFilePath}`);
  }
  
  promptQuestions();
  