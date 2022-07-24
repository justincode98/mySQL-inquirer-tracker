const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
//const Choices = require("inquirer/lib/objects/choices");


//since inquirer isn't working, this code goes through the creation and editing of the mysql database (db.sql)

const questions = [
    {
        type: "list",
        name: "commandChoice",
        message: "What would you like to do?",
        choices: ["View departments", "View roles", "View employees", "Add department","Add role","Add employee","Update employee"]
    }
    //liscence
];


function main() {

    consoleViewTables();
    consoleAllQueries();
 /*   const getChoice = await inquirer.prompt(questions);
    switch(getChoice.commandChoice) {
        case "View departments":
            viewDepartments();
            
        case "View roles":
            viewRoles();
            
        case  "View employees":
            viewEmployees();
            
        case "Add department":
            addDepartment();
            
        case "Add role":
            addRole();
            
        case "Add employee":
            addEmployee();
            
        case "Update employee":
            updateEmployee();
                    
    }*/
};


//functions to replace prompting from inquirer

//https://devhints.io/mysql
function viewDepartments() {
    const querySyntax = "SELECT * FROM department";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING DEPARTMENTS-----------------------------------------------------------------")
    console.table(row);
    
    });
}

function viewRoles() {
    const querySyntax = "SELECT * FROM role";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING ROLES-----------------------------------------------------------------")
    console.table(row);
    
    });

} 

function viewEmployees() {

    const querySyntax = "SELECT * FROM employee";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING EMPLOYEE-----------------------------------------------------------------")
    console.table(row);
    
    });

} 


//add department then print all departments
function addDepartment() {
    const querySyntax = "INSERT INTO department (name) VALUES ('New Walks');";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING DEPARTMENT AFTER CHANGE-----------------------------------------------------------------")
    viewDepartments();
    });
};


//add role then print all roles
function addRole() {
    const querySyntax = "INSERT INTO role (title, salary, department_id) VALUES ('Stride', 500, 2);";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING ROLES AFTER CHANGE-----------------------------------------------------------------")
    viewRoles();
    });
};

//add employee then print all employees
function addEmployee() {
    const querySyntax = "INSERT INTO employee (first_name, last_name, role_id) VALUES ('Bob', 'Smith', 2);";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING EMPLOYEE AFTER CHANGE-----------------------------------------------------------------")
    viewEmployees();
    });
};

//TODO update employee (no choice of employee) then print all employees
function updateEmployee() {
    const querySyntax = "SELECT ;";
    db.query(querySyntax, (err, row) =>{
    if(err){
        throw err;
    }
    console.log("PRINTING EMPLOYEE AFTER CHANGE-----------------------------------------------------------------")
    viewEmployees();
    });
};



//aggregate all views
function consoleViewTables() {
    viewDepartments();
    
    viewRoles();
    
    viewEmployees();
    
            
};

//aggregate all calls (modifies database)
function consoleAllQueries() {
    addDepartment();
    
    addRole();
    
    addEmployee();
    
            
};


main();




/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 

//import inquirer from '../lib/inquirer.js';

console.log('Hi, welcome to Node Pizza');

const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});
*/


/*
inquirer
  .prompt(questions) 
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

*/
// TODO: Create an array of questions for user input
/*async function menu() {
    const prompter = await inquirer.prompt(questions);
        switch(prompter.commandChoice) {
            case "View departments":
                console.log("view chosen");
                
        }

}*/


/*
async function menu() {
    const menuChoice = await inquirer.prompt(questions);
    
    console.log("menu over");

}


// TODO: Create a function to initialize app
function init() {
    menu();
    console.log("init over");
}

// Function call to initialize app
init();*/