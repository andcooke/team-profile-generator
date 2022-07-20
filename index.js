const inquirer = require('inquirer');
const path = require('path'); //LOOK INTO THIS
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const { create } = require('domain'); //LOOK INTO THIS
const DIST_DIR = path.resolve(__dirname, "dist"); //LOOK INTO THIS
// const distPath = path.join(DIST_DIR, "index.html"); //LOOK INTO THIS


let teamMembers = [];


const createTeam = () => {
  
}


const buildTeam = () => {
    // Create the output directory if the dist path doesn't exist
    // if (!fs.existsSync(DIST_DIR)) {
    //   fs.mkdirSync(DIST_DIR);
    // }
  // fs.writeFile(distPath, generateHTML(teamMembers), "utf-8")
  // fs.writeFile("index.html", generateHTML(teamMembers));
  }



const appMenu = () => {
  createManager();
};

const createManager = () => {
  askManagerQuestions()
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    teamMembers.push(manager);
    console.log(`Welcome ${answers.name}`)
    console.log(teamMembers);
    createMembers();
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


const createMembers = () => {
  continueTeam()
  .then((answers) => {
    if (answers.continue === "Engineer") {
      createEngineer();
    }
    if (answers.continue === "Intern") {
      createIntern();
    } else {
      buildTeam();
    } 
  })
  .catch((err) => console.error(err));
}

const continueTeam = () => {
  return inquirer.prompt(createQuestion);
}

const createQuestion = [
  {
    type: "list",
    message: "Who would you like to add to your team?",
    choices: ["Engineer", "Intern", "I'm finished."],
    name: "continue"
  },
]


const createEngineer = () => {
  askEngineerQuestions()
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamMembers.push(engineer);
    console.log(teamMembers);
    createMembers();
  })
  .catch((err) => console.error(err));
};

const askEngineerQuestions = () => {
  return inquirer.prompt(engineerQuestions);
}

const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your engineer's ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your engineer's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github"
  },
]

const createIntern = () => {
  askInternQuestions()
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamMembers.push(intern);
    console.log(teamMembers);
    createMembers();
  })
  .catch((err) => console.error(err));
};

const askInternQuestions = () => {
  return inquirer.prompt(internQuestions);
}

const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your intern's ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your intern's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "school"
  },
]


appMenu();

