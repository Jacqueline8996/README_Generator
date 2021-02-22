//imports the Inquier file and fs file
const inquirer = require('inquirer');
const fs = require("fs");

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
            choices: ["Academic_Free_License_v3.0","MIT","Mozilla_Public_License_2.0","Open_Software_License_3.0","The_Unlicense"],
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

    //creates the read me file in the format needed after the user get the information 
    const generateReadMe = (answers)=>
    //In order to get this to work yo have to move it as farleft as you can so the git hub recognize the formatting 

` 
# Title
* ${answers.title}

# Table Of Content:
* [Project_Description](#Project_Description)
* [Project_Installation_Instructions](#Project_Installation_Instructions)
* [Project_Usage](#Project_Usage)
* [Project_Contributors](#Project_Contributors)
* [Project_Test](#Project_Test)
* [License](#Project_license)
* [Contact_Information](#Contact_Information)

# Project_Description
* ${answers.description}

# Project_Installation_Instructions
* ${answers.instruction}

# Project_Usage
* ${answers.usage}

# Project_Contributors
* ${answers.contribution}

# Project_Test
* ${answers.test}

# Project_License
* ${answers.license}
* ![badge](https://img.shields.io/static/v1?label=Project_License&message=${answers.license}&color=${answers.badgeColor})

# Contact_Information
* If you have question or would like to contact the project creator please:
    *  Get Visit Git Hub profile at: (https://github.com/${answers.gitHub})
    *  Email at: ${answers.email}`;
    


    
    const init = () => {
        promptUser().then((answers) => {
        try {
        const readme = generateReadMe(answers);
        fs.writeFileSync('README.md', readme);
        console.log('Successfully wrote to Readme.md');
        } catch (error) {
        console.log(error);
        }
    });
};
  


init();
