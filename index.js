const fs = require('fs');
const inquirer = require('inquirer');



inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Tell me something about yourself?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github'
    },
])
.then((response) => {
    // clear file
    fs.writeFileSync('index.html', `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Portfolio of ${response.username}</title>
    <link rel="stylesheet" href="./assets/css/style.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    </head>
    `, (err) =>
    err ? console.error(err) : console.log('Head logged!'));

    // name
    // location
    // bio
    // linkedin
    // github
    fs.appendFile('index.html', `
    <main>
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">This is the Portfolio of ${response.username}</a>
      <p class="navbar-brand">From: ${response.location}</p>
    </div>
    </nav>

    <ul class="list-group">
        <li class="list-group-item">A fun fact about ${response.username} is: ${response.bio}</li>
        <li class="list-group-item">Visit at:</li>
        <li class="list-group-item">
        <a href="https://github.com/${response.github}/">${response.github}</a>
        </li>
        <li class="list-group-item">
        ${response.linkedin}
        </li>
        <li class="list-group-item">And a fifth one</li>
    </ul>


    </main>
    ` , (err) =>
    err ? console.error(err) : console.log('Body logged!'));
    
    fs.appendFile('index.html', `
</body>
</html>
    ` , (err) =>
    err ? console.error(err) : console.log('End File logged!'));
    
})