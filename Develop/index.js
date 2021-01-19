// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('util');
const asyncWrite = util.promisify(fs.writeFile);

// const badmath = require('badmath');



const generateMD = (data) => 
//   let licenseChoice = '';
// switch (data.license){
//   case "IBM":
//     licenseChoice = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
//   break;
//   case "MIT":
//     licenseChoice = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   break;
//   case "Mozilla":
//     licenseChoice = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
//   break;
//   case "Open Data Commons":
//     licenseChoice = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
//   break;
//   case 'None':
//     licenseChoice = ''
//   break;
// }


`# ${data.title} ${licenseChoice}
### ${data.description}
## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)


## Installation
### ${data.installation}

## Usage
### ${data.usage}
### [Deloyed Link](${data.deployed})

## License
### ${data.license}

## Contributing
    1.
        * ${data.contributionname1}
        * [Contributor 1 Profile](${data.contributorGH1})
    2.
        * ${data.contributionname2}
        * [Contributor 1 Profile](${data.contributorGH2})

## Tests
### [Tests] (${data.tests})


## Questions
### ${data.username}
### [GitHub](${data.profile} "GitHub Profile")
### ${data.email}` ;


// }
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your application.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your application',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Explain the installation process.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Explain the use of this application.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please provide a link to your deployed application.',
        name: 'deployed',
      },
      {
        type: 'input',
        message: 'Add the link to your tests.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Who contributed to the development of application? Full Name',
        name: 'contributionname1',
      },
      {
        type: 'input',
        message: 'Contributors GitHub Profile',
        name: 'contributorGH1',
      },
      {
        type: 'input',
        message: 'Who contributed to the development of application? Full Name',
        name: 'contributionname2',
      },
      {
        type: 'input',
        message: 'Contributors GitHub Profile',
        name: 'contributorGH2',
      },
      {
        type: 'input',
        message: 'Please add your GitHub username.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please add a link to your GitHub profile.',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
      },
      {
        type: 'list',
        message: 'Please add a license for your application.',
        name: 'license',
        choices: ['IBM', 'MIT','Mozilla', 'Open Data Commons', 'None'],
      },
  ])
  .then((data) => {
  const fileName = `${data.title}.md`;
//       fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Readme complete')
//   );
    asyncWrite(fileName, generateMD(data), (err) =>
      err ? console.log(err) : console.log('Success!')
      )
  })
  // .then (() => {console.log('Success!')}).catch ((err)=> {console.log(err)});


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// //     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
// //     err ? console.log(err) : console.log('Readme complete')
// //   );
// //   asyncWrite(fileName, generateMD(data), (err) =>
// //   err ? console.log(err) : console.log('Success!')
// //   )

// }
// writeToFile();
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
