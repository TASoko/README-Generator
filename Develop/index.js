// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const asyncWrite = util.promisify(fs.writeFile);

// const badmath = require('badmath');

const generateMD = (data) =>
`# ${data.title} 
### ${data.description}
## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
        * Deployed Link
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)


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
        type: 'input',
        message: 'Please add a license for your application.',
        name: 'license',
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

});


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
