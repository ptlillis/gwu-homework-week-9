// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'Creative Commons CC0':
      return 'https://licensebuttons.net/l/zero/1.0/80x15.png'
    case 'IBM':
      return 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
    case 'Mozilla':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    case 'Boost':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    default:
      return ' '
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  switch(license){
    case 'Creative Commons CC0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/'
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0'
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0'
    case 'Boost' :
      return 'https://www.boost.org/LICENSE_1_0.txt'
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    default:
      return ''
  }
    

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(title, licensing) {
  var link = renderLicenseLink(licensing)

  if(link === '') {
    return ''
  } else {
    return 'The  application is covered under the [${license}] license. More info: (${link})'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var badge = renderLicenseBadge(data.licensing)

  var licenseSection = renderLicenseSection(data.title, data.licensing)

  return `![License Badge](${badge})

  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#install)
  * [Usage Instructions](#use)
  * [Contributions](#contribute)
  * [Testing](#test)
  * [License](#licensing)
  * [Contact](#contact)
  
  
  ## Installation

  ${data.install}
  
  ## Usage Instructions

  ${data.use}

  ## Contributions

  ${data.contribute}

  ## Testing

  ${data.test}
  
  ## License

  ${licenseSection}

  ## Contact

  This application was programmed by Github user ${data.github}, available at https://github.com/${data.github}.
  Contact ${data.email} with any questions.
  `
  }
  
  // export function
  module.exports = generateMarkdown;