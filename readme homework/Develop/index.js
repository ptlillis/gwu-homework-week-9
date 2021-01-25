// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'In a few words, please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide usage instructions:',
        name: 'use',
    },
    {
        type: 'input',
        message: 'How will you be contributing today?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide testing instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'How is this project licensed?',
        choices: ['Creative Commons CC0', 'IBM', 'Mozilla', 'Boost', 'Apache'],
        name: 'licensing'
    },
    {
        type: 'input',
        message: 'Please provide your Github username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide your email address: ',
        name: 'contact',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('README file successfully generated'))
}

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => inquirer.prompt(questions)

    const readme = '../sampleReadme.md'

    promptUser()
        .then((response) => writeToFile(readme, response))

}

// Function call to initialize app
init();
