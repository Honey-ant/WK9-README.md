// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
// const Prompt = require('inquirer/lib/prompts/base');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your project about?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How will someone go about installing your software?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What will your project be used for?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose from the top three licenses',
        choices: ['ISC', 'MIT', 'APACHE 2.0', 'None']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who helped bring this to life?',
    },
    {
        type: 'input',
        name: 'Testing',
        message: 'What are the tests used?',
    },
    {
        type: 'input',
        name: 'Contact',
        message: 'What is your github profile, and your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => writeToFile('README.md', generateMarkdown({...data})))
    // .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
