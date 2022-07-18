const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const generateHTML = require('./src/generateHTML');
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");



let teamMembers = [];


const questions = [];


const createTeam = () => {
  
}

const createManager = () => {
  //ask questions
  .then(answers) => const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
  teamMembers.push(manager);
  //what's managers name
  //id
  //email
  //office number
};


const buildTeam = () => {
  //   // Create the output directory if the dist path doesn't exist
  //   if (!fs.existsSync(DIST_DIR)) {
  //     fs.mkdirSync(DIST_DIR);
  //   }
  fs.writeFile(distPath, generateHTML(teamMembers), "utf-8")
  // }
}

const createIntern = () => {
    //ask questions
};

const createEngineer = () => {
    //ask questions
};

// const init = () => {
//   promptUser()
//  createTeam();

//   }))
//   .then(() => {
//     console.log('Successfully wrote to index.html\n');
//   })
//   .catch((err) => console.error(err));
// }

const appMenu = () => {
  createManager();
};