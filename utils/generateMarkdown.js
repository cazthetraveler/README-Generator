// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "None":
      badge = "";
      break;
    case "Academic Free License v3.0":
      badge = "![license-badge](https://img.shields.io/badge/license-AFL—3.0-orange)";
      break;
    case "Apache License 2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-Apache—2.0-orange)";
      break;
    case "Artistic License 2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-Artistic—2.0-orange)";
      break;
    case "Boost Software License 1.0":
      badge = "![license-badge](https://img.shields.io/badge/license-BSL—1.0-orange)";
      break;
    case "BSD 2-clause Simplified license":
      badge = "![license-badge](https://img.shields.io/badge/license-BSD—2—Clause-orange)";
      break;
    case "BSD 3-clause New or Revised license":
      badge = "![license-badge](https://img.shields.io/badge/license-BSD—3—Clause-orange)";
      break;
    case "BSD 3-clause Clear License":
      badge = "![license-badge](https://img.shields.io/badge/license-BSD—3—Clause—Clear-orange)";
      break;
    case "BSD 4-clause Original or Old License":
      badge = "![license-badge](https://img.shields.io/badge/license-BSD—4—Clause-orange)";
      break;
    case "BSD Zero-Clause License":
      badge = "![license-badge](https://img.shields.io/badge/license-0BSD-orange)";
      break;
    case "Creative Commons license family":
      badge = "![license-badge](https://img.shields.io/badge/license-CC-orange)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "![license-badge](https://img.shields.io/badge/license-CC0—1.0-orange)";
      break;
    case "Creative Commons Attribution 4.0":
      badge = "![license-badge](https://img.shields.io/badge/license-CC—BY—4.0-orange)";
      break;
    case "Creative Commons Attribution ShareAlike 4.0":
      badge = "![license-badge](https://img.shields.io/badge/license-CC—BY—SA—4.0-orange)";
      break;
    case "Do What The F*ck You Want To Public License":
      badge = "![license-badge](https://img.shields.io/badge/license-WTFPL-orange)";
      break;
    case "Educational Community License v2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-ECL—2.0-orange)";
      break;
    case "Eclipse Public License 1.0":
      badge = "![license-badge](https://img.shields.io/badge/license-EPL—1.0-orange)";
      break;
    case "Eclipse Public License 2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-EPL—2.0-orange)";
      break;
    case "European Union Public License 1.1":
      badge = "![license-badge](https://img.shields.io/badge/license-EUPL—1.1-orange)";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "![license-badge](https://img.shields.io/badge/license-AGPL—3.0-orange)";
      break;
    case "GNU General Public License family":
      badge = "![license-badge](https://img.shields.io/badge/license-GPL-orange)";
      break;
    case "GNU General Public License v2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-GPL—2.0-orange)";
      break;
    case "GNU General Public License v3.0":
      badge = "![license-badge](https://img.shields.io/badge/license-GPL—3.0-orange)";
      break;
    case "GNU Lesser General Public License family":
      badge = "![license-badge](https://img.shields.io/badge/license-LGPL-orange)";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "![license-badge](https://img.shields.io/badge/license-LGPL—2.1-orange)";
      break;
    case "GNU Lesser General Public License v3.0":
      badge = "![license-badge](https://img.shields.io/badge/license-LGPL—3.0-orange)";
      break;
    case "ISC":
      badge = "![license-badge](https://img.shields.io/badge/license-ISC-orange)";
      break;
    case "LaTeX Project Public License v1.3c":
      badge = "![license-badge](https://img.shields.io/badge/license-LPPL—1.3c-orange)";
      break;
    case "Microsoft Public License":
      badge = "![license-badge](https://img.shields.io/badge/license-MS—PL-orange)";
      break;
    case "MIT":
      badge = "![license-badge](https://img.shields.io/badge/license-MIT-orange)";
      break;
    case "Mozilla Public License 2.0":
      badge = "![license-badge](https://img.shields.io/badge/license-MPL—2.0-orange)";
      break;
    case "Open Software License 3.0":
      badge = "![license-badge](https://img.shields.io/badge/license-OSL—3.0-orange)";
      break;
    case "PostgreSQL License":
      badge = "![license-badge](https://img.shields.io/badge/license-PostgreSQL-orange)";
      break;
    case "SIL Open Font License":
      badge = "![license-badge](https://img.shields.io/badge/license-OFL—1.1-orange)";
      break;
    case "University of Illinois/NCSA Open Source License":
      badge = "![license-badge](https://img.shields.io/badge/license-NCSA-orange)";
      break;
    case "The Unlicense":
      badge = "![license-badge](https://img.shields.io/badge/license-Unlicense-orange)";
      break;
    case "zLib License":
      badge = "![license-badge](https://img.shields.io/badge/license-Zlib-orange)";
      break;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "None":
      link = "";
      break;
    case "Academic Free License v3.0":
      link = "https://opensource.org/license/afl-3-0-php/";
      break;
    case "Apache License 2.0":
      link = "https://opensource.org/license/apache-2-0/";
      break;
    case "Artistic License 2.0":
      link = "https://opensource.org/license/artistic-2-0/";
      break;
    case "Boost Software License 1.0":
      link = "https://opensource.org/license/bsl-1-0/";
      break;
    case "BSD 2-clause Simplified license":
      link = "https://opensource.org/license/bsd-2-clause/";
      break;
    case "BSD 3-clause New or Revised license":
      link = "https://opensource.org/license/bsd-3-clause/";
      break;
    case "BSD 3-clause Clear License":
      link = "https://spdx.org/licenses/BSD-3-Clause-Clear.html";
      break;
    case "BSD 4-clause Original or Old License":
      link = "https://spdx.org/licenses/BSD-4-Clause.html";
      break;
    case "BSD Zero-Clause License":
      link = "https://opensource.org/license/0bsd/";
      break;
    case "Creative Commons license family":
      link = "https://spdx.org/licenses/CC-BY-1.0.html";
      break;
    case "Creative Commons Zero v1.0 Universal":
      link = "https://spdx.org/licenses/CC0-1.0.html";
      break;
    case "Creative Commons Attribution 4.0":
      link = "https://spdx.org/licenses/CC-BY-4.0.html";
      break;
    case "Creative Commons Attribution ShareAlike 4.0":
      link = "https://spdx.org/licenses/CC-BY-NC-SA-4.0.html";
      break;
    case "Do What The F*ck You Want To Public License":
      link = "https://choosealicense.com/licenses/wtfpl/";
      break;
    case "Educational Community License v2.0":
      link = "https://opensource.org/license/ecl-2-0/";
      break;
    case "Eclipse Public License 1.0":
      link = "https://opensource.org/license/epl-1-0/";
      break;
    case "Eclipse Public License 2.0":
      link = "https://opensource.org/license/epl-2-0/";
      break;
    case "European Union Public License 1.1":
      link = "https://spdx.org/licenses/EUPL-1.1.html";
      break;
    case "GNU Affero General Public License v3.0":
      link = "https://opensource.org/license/agpl-v3/";
      break;
    case "GNU General Public License family":
      link = "https://spdx.org/licenses/GPL-1.0-only.html";
      break;
    case "GNU General Public License v2.0":
      link = "https://opensource.org/license/gpl-2-0/";
      break;
    case "GNU General Public License v3.0":
      link = "https://opensource.org/license/gpl-3-0/";
      break;
    case "GNU Lesser General Public License family":
      link = "https://spdx.org/licenses/LGPL-2.0-only.html";
      break;
    case "GNU Lesser General Public License v2.1":
      link = "https://opensource.org/license/lgpl-2-1/";
      break;
    case "GNU Lesser General Public License v3.0":
      link = "https://opensource.org/license/lgpl-3-0/";
      break;
    case "ISC":
      link = "https://opensource.org/license/isc-license-txt/";
      break;
    case "LaTeX Project Public License v1.3c":
      link = "https://opensource.org/license/lppl/";
      break;
    case "Microsoft Public License":
      link = "https://opensource.org/license/ms-pl-html/";
      break;
    case "MIT":
      link = "https://opensource.org/license/mit/";
      break;
    case "Mozilla Public License 2.0":
      link = "https://opensource.org/license/mpl-2-0/";
      break;
    case "Open Software License 3.0":
      link = "https://opensource.org/license/osl-3-0-php/";
      break;
    case "PostgreSQL License":
      link = "https://opensource.org/license/postgresql/";
      break;
    case "SIL Open Font License":
      link = "https://opensource.org/license/ofl-1-1/";
      break;
    case "University of Illinois/NCSA Open Source License":
      link = "https://opensource.org/license/uoi-ncsa-php/";
      break;
    case "The Unlicense":
      link = "https://opensource.org/license/unlicense/";
      break;
    case "zLib License":
      link = "https://opensource.org/license/zlib/";
      break;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

${license}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(pData) {
  const license = pData.license;
  renderLicenseBadge(license);
  renderLicenseLink(license);

  return `# ${pData.title}
[${badge}](${link})

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
    
${renderLicenseSection(license)}
    
## Tests
    
${pData.test}
    
## Questions
    
GitHub Profile: [${pData.githubusername}](https://github.com/${pData.githubusername})
    
Reach me at my email: ${pData.email}`;
};

module.exports = generateMarkdown;