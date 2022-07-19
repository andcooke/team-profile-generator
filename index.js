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




const buildTeam = () => {
  //   // Create the output directory if the dist path doesn't exist
  //   if (!fs.existsSync(DIST_DIR)) {
  //     fs.mkdirSync(DIST_DIR);
  //   }
  fs.writeFile(distPath, generateHTML(teamMembers), "utf-8")
  // }
}



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
  //ask if manager wants to create something else and if so what
  //if Engineer, createEngineer();
  //if Intern, createIntern();
  //if finished, buildTeam(); 
};

const createManager = () => {
  askManagerQuestions()
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    teamMembers.push(manager);
    console.log(teamMembers);
  })
  .catch((err) => console.error(err));
};

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  },
]

const askManagerQuestions = () => {
  return inquirer.prompt(managerQuestions);
}


//function to ask to keep going with what kind of employee or to stop.


const createEngineer = () => {
  askEngineerQuestions()
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamMembers.push(engineer);
    console.log(teamMembers);
  })
  .catch((err) => console.error(err));
};

const askEngineerQuestions = () => {
  return inquirer.prompt(engineerQuestions);
}

const createIntern = () => {
  askInternQuestions()
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamMembers.push(intern);
    console.log(teamMembers);
  })
  .catch((err) => console.error(err));
};

const askInternQuestions = () => {
  return inquirer.prompt(internQuestions);
}



appMenu();

