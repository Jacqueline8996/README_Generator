// TODO: Include packages needed for this application
//imports the Inquier file and fs file
const inquirer = require('inquirer');

const fs = require("fs");

// TODO: Create an array of questions for user input
//ask the user in nodes what question,and then put the information into a read me file

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the Description of your project?',
            name: 'description'
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
            message: 'Who Contributed to your project, Please provide name git hub user names?',
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
            choices: ["Academic Free License v3.0","MIT","Mozilla Public License 2.0","Open Software License 3.0","The Unlicense"],
            name: 'license',
        },
        {
            type: 'list',
            message: 'What Badge color do you want ?',
            choices: ["brightgreen","green","yellowgreen","yellow","orange","red","blue","lightgrey","blueviolet","purple","teal"],
            name: 'badgeColor',
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

    ]);

    const generateReadMe = (answers)=>
       `
        # Title:
        * ${answers.tite}
        # Table Of Content:
        * [Description](#Project Description:)
        * [Installation](#Project Installation Instructions:)
        * [Usage](#Project Usage:)
        * [Contributing](#Project Contributors:)
        * [Tests](#Project Test:)
        * [License](#Project license:)
        * [Contact Information](#Contact Information:)
        #Project Description:
        * ${answers.description}
        #Project Installation Instructions: 
        * ${answers.instruction}
        #Project Usage:
        * ${answers.usage}
        #Project Contributors:
        * ${answers.contribution}
        #Project Test:
        * ${answers.test}
        #Project License:
        * ${answers.license}
        ![badge](https://img.shields.io/static/v1?label=Project_License&message=${answers.license}&color=${answers.badgeColor})
        #Contact Information:
        * If you have question or would like to contact the project creator please:
            * Get Visit Git Hub profile at: (https://github.com/${answers.gitHub})
            * Email at: ${answers.email}
        `;
    


    
    const init = () => {
    promptUser().then((answers) => {
        try {
        const readme = generateReadMe(answers);
        fs.writeFileSync('README.md', readme);
        console.log('Successfully wrote to readme.html');
        } catch (error) {
        console.log(error);
        }
    });
};
  


init();
