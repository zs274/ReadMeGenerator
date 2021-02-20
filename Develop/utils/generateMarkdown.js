//function that returns license badge based on answer, default returns empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache':
      return '![Apache license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL':
      return '![GPL license](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      " ";
      break;
  }
}


// function that returns license link, default returns empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '\nThis project was created under the standard MIT license. \n Learn more [here:](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '\nThis project was created under the standard Apache license. \n Learn more [here:](https://www.apache.org/licenses/)';
    case 'GPL':
      return '\nThis project was created under the standard GPL license. \n Learn more [here:](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      " ";
      break;
  }
}

// function that returns license section of README, empty string is returned if 'other' is chosen
function renderLicenseSection(license) {
  if (license !== 'Other') {
    let licenseType = "## License \n" + renderLicenseBadge(license) + renderLicenseLink(license);
    return licenseType;
  }
  else {
    "";
  }
}

// function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Contents
  Section | About
  --------|-------
  [Installation](#installation) | How to install the application
  [Usage](#usage) | How to use the application
  [Testing](#testing) | How to test the application

      
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributions}

  ## Testing
  ${data.test}

  ## Questions
  My GitHub username is ${data.gitusername}, and can be found with this [link](${data.gitlink}).
  If you have any further questions you can email me at [${data.email}].
`;
}

module.exports = generateMarkdown;
