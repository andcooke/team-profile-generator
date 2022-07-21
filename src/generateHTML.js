function generateManager(manager){
    return `
  <div  class="custom-card  m-2">
    <div class="card flex-sm-row" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h2 class="card-title text-light">${manager.name}</h2>
        <h4 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-mug-hot"></i> Manager</h4>
        <ul class="list-group list-group-flush py-2">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">email: <a href = "mailto: ${manager.email}"> ${manager.email} </a></li>
          <li class="list-group-item">Office: ${manager.office}</li>
        </ul>
      </div>
    </div>
  </div>
    `
};


function generateIntern(intern){ 
    return `
  <div  class="custom-card  m-2">
    <div class="card flex-sm-row" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h2 class="card-title text-light">${intern.name}</h2>
        <h4 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-user-graduate"></i> Intern</h4>
        <ul class="list-group list-group-flush py-2">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">email: <a href = "mailto: ${intern.email}"> ${intern.email} </a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </div>
    `
}

function generateEngineer(engineer){
    return `
  <div  class="custom-card  m-2">
    <div class="card flex-sm-row" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h2 class="card-title text-light">${engineer.name}</h2>
        <h4 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-glasses"></i> Engineer</h4>
        <ul class="list-group list-group-flush py-2">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">email: <a href = "mailto: ${engineer.email}"> ${engineer.email} </a></li>
          <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.github}"> ${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>
    `
}



function generateHTML(team) {
    let resultArr = []
    // console.log("generateHTML function here. here's the team:", team);
    const managerArr = team.filter(isManager);
    const managerRes = managerArr.map(generateManager);
    resultArr.push(managerRes); 
    const engineerArr = team.filter(isEngineer); // maybe join here
    const engineerRes = engineerArr.map(generateEngineer);
    resultArr.push(engineerRes);
    const internArr = team.filter(isIntern); // maybe join here
    const internRes = internArr.map(generateIntern);
    resultArr.push(internRes); 
    return resultArr.join("\n")
};

function isManager(teamMember) {
    return (teamMember.getRole() === "Manager")
}

function isEngineer(teamMember) {
    return (teamMember.getRole() === "Engineer")
}

function isIntern(teamMember) {
    return (teamMember.getRole() === "Intern")
}

module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <script src="https://kit.fontawesome.com/4888969aff.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger text-light">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateHTML(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};


