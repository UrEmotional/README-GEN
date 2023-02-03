// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a brief description of your project:",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide examples on how to use the project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contributing guidelines:",
      },
      {
        type: "input",
        name: "test",
        message: "Enter test instructions:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: ["MIT", "Apache", "GPL"]
      }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${fileName} generated successfully!`);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((writeReadme) => {
      writeToFile('README.md', markdown(writeReadme))
})}

// Function call to initialize app
init();
