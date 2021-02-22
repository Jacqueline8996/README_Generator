// TODO: Include packages needed for this application
//imports the Inquier file and fs file
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
//ask the user in nodes what question,and then put the information into a read me file
function AskQuestion(){

    inquirer
        .prompt(
            {
                type: 'input',
                message: 'What is the Title of your project?',
                name: 'Title'
            },
            {
                type: 'input',
                message: 'What is the Description of your project?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'What is the installation instruction for this program?',
                name: 'instruction',
            },
            {
                type: 'input',
                message: 'What is the Usage of your project?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What is the Contribution Guidelines of your project?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'What is the test instruction of your project?',
                name: 'test',
            },
            {
                type: 'list',
                message: 'What License will your project use ?',
                choice : ["Academic Free License v3.0","MIT","Mozilla Public License 2.0","Open Software License 3.0","The Unlicense"],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What is your git hub username?',
                name: 'gitHub',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        
            {
                type: 'input',
                message: 'What Badge will your project use ?',
                name: 'badge',
            }

        ).then((response) =>


            console.log("my response are", response)
      );
    

    



}

AskQuestion();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
