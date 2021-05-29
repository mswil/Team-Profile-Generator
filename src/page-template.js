const generateCard = employee => {
    return `
    <div class="card mb-4 shadow" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2">${generateRoleIcon(employee.getRole())} ${employee.getRole()}</h6>
    </div>
    <div class="card-body bg-light">

        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${employee.getEmail()}.com">${employee.getEmail()}</a></li>
            <li class="list-group-item">${generateRoleInfo(employee)}</li>
        </ul>
    </div>
</div>`
}

const generateRoleIcon = role => {
    switch (role) {
        case 'Manager':
            return `<i class="bi bi-cup"></i>`;
        case 'Engineer':
            return `<i class="bi bi-eyeglasses"></i>`;
        case 'Intern':
            return `<i class="bi bi-pencil"></i>`;
        default:
            return '';
    }
}

const generateRoleInfo = employee => {
    switch (employee.getRole()) {
        case 'Manager':
            return `Office number: ${employee.officeNumber}`;
        case 'Engineer':
            return `GitHub: <a href = "https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        case 'Intern':
            return `School: ${employee.getSchool()}`;
        default:
            return '';
    }
}

module.exports = employees => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class="mb-3">
            <h1>
                My Team
            </h1>
        </header>
    
        <main>
            <div class="container">
                <div class="row justify-content-around">
                    ${employees.map(generateCard).join('')}      
                </div>
            </div>
        </main>
    </body>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"></script>
</html>
    `;
};