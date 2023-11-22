// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require(`./generateMarkdown.js`);
// TODO: Create an array of questions for user input
    
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Please provide any screenshots of your application.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list any contributors.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the USER story for your application and ACCEPTANCE criteria?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the installation instructions for your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data = '') {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(`This is what's up! ${err}`) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}   
// Function call to initialize app
init();
