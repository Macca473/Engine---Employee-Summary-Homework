const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const OUT_DIR = path.resolve(__dirname, "output");

class Employee {
  constructor(Manager,Engineer,Intern) {
    this.Manager = Manager;
    this.Engineer = Engineer;
    this.Intern = Intern;
  }
}

let Ioutput = [];

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Enter Employees name:',
    },
    // {
    //   name: 'role',
    //   message: 'Enter Employees role:',
    // },
    {
        name: 'email',
        message: 'Enter Employees email:',
    },
    {
        name: 'id',
        message: 'Enter Employees id:',
    },
    {
        type: 'rawlist',
        name: 'role',
        message: `Choose role:`,
        choices: ['Manager', 'Engineer',`Intern`],
    },
  ])
  .then(answers => {
    // console.info(`Answers:`, answers);
    console.log(`role: ${answers.role}`);
    console.log(`Stats: ${answers.role}`);
    if (answers.role === `Manager`) {
      // console.log(`ans Manager`);
      inquirer
        .prompt([
          {
            name: `officeMember`,
            message:`Enter Employees office member info:`
          }
        ])
        .then(info => {
          console.info(`Answers:`, answers);
          console.log(info);
          let Ioutput = {...answers, ...info };
          console.log(`Ioutput:`, Ioutput);
          render(Ioutput);
        })
    }
    else if (answers.role === `Engineer`) {
      // console.log(`ans Engineer`);
      inquirer
      .prompt([
        {
          name: `github`,
          message:`Enter Employees github info:`
        }
      ])
      .then(info => {
        console.info(`Answers:`, answers);
        console.log(info);
        let Ioutput = {...answers, ...info };
        console.log(`Ioutput:`, Ioutput);
        render(Ioutput);
      })
    }
    else if (answers.role === `Intern`) {
      // console.log(`ans Intern`);
      inquirer
      .prompt([
        {
          name: `school`,
          message:`Enter Employees school:`
        }
      ])
      .then(info => {
        console.info(`Answers:`, answers);
        console.log(info);
        let Ioutput = {...answers, ...info };
        console.log(`Ioutput:`, Ioutput);
        render(Ioutput);
      })
    }
  });
  
// render(Ioutput);



  // else if (newbie.newEmployrole === "Manager") {
  //   const newbieManager = await roleManager()
  //   let newManager = new Manager(newbie.name, newbie.id)
  //   Employee.push new intern
  // }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
