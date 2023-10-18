// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "None":
      license = "";
      break;
    case "Academic Free License v3.0":
      license = "AFL-3.0";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(pData) {
  return `# ${pData.title} ![license-badge](https://img.shields.io/badge/license-${pData.license}-orange)
## Description

${pData.motivation} ${pData.why} ${pData.problemsolver} ${pData.learn}
    
## Table of Contents
    
-[Installation](#installation)
    
-[Usage](#usage)
    
-[Credits](#credits)
    
-[License](#license)
    
## Installation
    
${pData.installation}
    
## Usage
    
${pData.instructions}
    
![screenshot](${pData.screenshot})
    
## Credits
    
Collaborators: ${pData.collab}
    
Third-Party Assets: ${pData.thirdparty}
    
## License
    
${pData.license}
    
## Tests
    
${pData.test}
    
## Questions
    
[${pData.githubusername}](https://github.com/${pData.githubusername})
    
Reach me at my email: ${pData.email}`;
};

module.exports = generateMarkdown;
