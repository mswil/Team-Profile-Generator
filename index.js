const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const employees = [];

const promptForEmployeeData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this employee\'s name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a id!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a email!');
                return false;
            }
        }
    }
];

const managerPrompt = {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the manager\'s office number?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter an office number!');
            return false;
        }
    }
};

const createManager = () => {

    const promptForManagerData = [...promptForEmployeeData, managerPrompt];

    return inquirer.prompt(promptForManagerData)
        .then(managerData => {
            const manager = new Manager(managerData.id, managerData.name, managerData.email, managerData.officeNumber);

            employees.push(manager);
        });
}

const engineerPrompt = {
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s GitHub username?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a GitHub username!');
            return false;
        }
    }
};

const createEngineer = () => {

    const promptForEngineerData = [...promptForEmployeeData, engineerPrompt];

    return inquirer.prompt(promptForEngineerData)
        .then(engineerData => {
            const engineer = new Engineer(engineerData.id, engineerData.name, engineerData.email, engineerData.github);

            employees.push(engineer);
        });
}

const internPrompt = {
    type: 'input',
    name: 'school',
    message: 'What is the inetern\'s school?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a school!');
            return false;
        }
    }
};

const createIntern = () => {

    const promptInternData = [...promptForEmployeeData, internPrompt];

    return inquirer.prompt(promptInternData)
        .then(internData => {
            const intern = new Intern(internData.id, internData.name, internData.email, internData.school);

            employees.push(intern);
        });
}

const employeeRolePrompt = {
    type: 'list',
    name: 'role',
    message: 'What role would you like to add to the team?',
    choices: ['Engineer', 'Intern', 'Finish Team']
}

const addEmployees = () => {

    return inquirer.prompt(employeeRolePrompt)
    .then( async employeeData => {
        if(employeeData.role === 'Engineer') {
            await createEngineer();
        }
        else if (employeeData.role === 'Intern') {
            await createIntern();
        }
        else if (employeeData.role === 'Finish Team') {
            return;
        }

        return addEmployees();
    })
};

console.log(`
=================
  Build a Team!
=================
Let's start with the manager.`);

createManager()
    .then(addEmployees)
    .then( () => {
        return generatePage(employees)
    })
    .then(writeFile)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile()
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.error(err);
    })
    