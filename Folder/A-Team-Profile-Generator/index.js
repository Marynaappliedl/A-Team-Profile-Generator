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
const questions = 
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
  ];
  
