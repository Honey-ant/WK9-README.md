// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
  return `\n* [License](#license)\n`;
} return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `#License 
The license for this project is ${license}`;
  } return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}
## Table of Contents 
* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.License)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions) 

#Description
${data.Description}

#Installation
${data.Installation}

#Usage
${data.Usage}

#Contributing
${data.Contributing}

#Testing
${data.Testing}

${renderLicenseSection(data.License)}
If you have questions about the repo contact me at ${data.Contact}
`;
}

module.exports = generateMarkdown;
