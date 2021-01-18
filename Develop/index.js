// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const asyncWrite = util.promisify(fs.writeFile);

// const badmath = require('badmath');

const generateMD = (data) =>
`# ${data.title} 
## ${data.description}
### ${data.installation}
#### ${data.usage}
##### ${data.deployed}
###### ${data.tests}` ;
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
        message: 'Who contributed to the development of application?',
        name: 'contribution',
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
        name: 'installation',
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
