// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problemsolver"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn"
    },
    {
        type: "input",
        message: "What are the steps are required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "instructions"
    },
    {
        type: "input",
        message: "Include a screenshot as needed, ex: ./assets/images/image.png",
        name: "screenshot"
    },
    {
        type: "input",
        message: "Is 'collaborators' in the room with us right now?",
        name: "collab"
    },
    {
        type: "input",
        message: "Is 'third-party assets' in the room with us right now?",
        name: "thirdparty"
    },
    {
        type: "input",
        message: "Provide test instructions.",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license for your application.",
        choices: ["None", "Academic Free License v3.0", "Apache License 2.0", "Artistic License 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license", "BSD 3-clause New or Revised license", "BSD 3-clause Clear License", "BSD 4-clause Original or Old License", "BSD Zero-Clause License", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution ShareAlike 4.0", "Do What The Fuck You Want To Public License", " Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "githubusername"
    },
    {
        type: "input",
        message: "Enter your e-mail.",
        name: "email"
    },
];

// TODO: Create a function to write README file
const fileName = "README.md";

function writeToFile(fileName, data) {
    const pData = JSON.parse(data);
    fs.writeFile(fileName, genMd(pData), (err) => err ? console.error(err) : console.log("Good job."));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([...questions]).then((data) => writeToFile(fileName, JSON.stringify(data)));
};

// Function call to initialize app
init();
