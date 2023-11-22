// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else if (license === 'None') {
    return ``;
  }
}
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'MIT') {
  return `[License: MIT](https://opensource.org/licenses/MIT)`;
} else if (license === 'Apache') {
  return `[License](https://opensource.org/licenses/Apache-2.0)`;
}
else if (license === 'GPL') {
  return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
}
else if (license === 'BSD') {
  return `[License](https://opensource.org/licenses/BSD-3-Clause)`;
}
else if (license === 'None') {
  return ``;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'MIT') {
  return `## License
  This project is licensed under the terms of the MIT license.`;
}
else if (license === 'Apache') {
  return `## License
  This project is licensed under the terms of the Apache license.`;
}
else if (license === 'GPL') {
  return `## License
  This project is licensed under the terms of the GPL license.`;
}
else if (license === 'BSD') {
  return `## License
  This project is licensed under the terms of the BSD license.`;
}
else if (license === 'None') {
  return ``;
}
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshots](#screenshots)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Screenshots
  ${data.screenshots}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  For any questions, please contact me at ${data.email} or visit my GitHub page:
  [https://github.com/${data.github}] 
`;
};

module.exports = generateMarkdown;
