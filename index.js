const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are your project's installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is your project's usage information?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What are your project's contribution guidelines?",
    },
    {
      type: "input",
      name: "testInfo",
      message: "What are your project's test instructions?",
    },
  ])
  .then((response) => {
    const { title, description, installation, usage, contribution, testInfo } =
      response;
    const template = `# ${title}
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Test Information
${testInfo}`;
    fs.writeFile("README.md", template, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
