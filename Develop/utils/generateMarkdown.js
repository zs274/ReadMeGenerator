// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//function that returns license badge based on answer, default returns empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache':
      return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// function that returns license link, default returns empty string
function renderLicenseLink(license) { 
  switch (license) {
    case 'MIT':
      return 'This project was created under the standard MIT license. \n Learn more here: (https://opensource.org/licenses/MIT)';
    case 'Apache':
      return 'This project was created under the standard Apache license. \n Learn more here : (https://www.apache.org/licenses/)';
    case 'GPL':
      return 'This project was created under the standard GPL license. \n Learn more here: (https://www.gnu.org/licenses/gpl-3.0)';
    default:
      "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
