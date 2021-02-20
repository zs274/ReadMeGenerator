// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ["Title of your project", "Describe your project", "How to install your project", "How to use your project", "How to contribute to your project", "How to test your project", "License of your project", "Github username", 'Github link', "Email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([{
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributions'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test'
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'Other']
        },
        {
            type: 'input',
            message: questions[7],
            name: 'gitusername'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'gitlink'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'email'
        },
        ])
}

// Function call to initialize app
init();