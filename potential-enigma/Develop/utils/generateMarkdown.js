// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return - `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `this is under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  


## Description
${data.description}

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Test](#test)
${renderLicenseLink(data.license)}

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing Guidelines
${data.contributing}

## Test
${data.test}

${renderLicenseSection(data.license)}

`;
 
}


module.exports = generateMarkdown;
