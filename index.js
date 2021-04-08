// import modules -> Employee subclasses, fs, inquirer, path, page-template, questions
const inquirer = require ("inquirer"); 
const fs = require ("fs"); 


// use path module to define the path to the output directory
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create an array to hold all of our team members
const employees = []; 
// init function
function init () {
	makeManager();
	addEmployees();
	renderHTML(); 
}

function makeManager(){

};

function addEmployees(){

};

function renderHTML(){

};
	// function to create a manager
		// prompt user with questions needed to satisfy the input for a manager object
		// .then statement
			// create a new instance of the Manager class
			// push the new manager object to the team members array
			// call the function to create the rest of the team
  
	// function to create the rest of the team
		// prompt user to select which type of employee they would like to add
		// options include engineer, intern, or an option to not add any more team members
		// .then statement
			// if a type of employee was selected, call function to add that type of employee
			// if the other option was selected, call the function to create the output

	// function to add an engineer
		// same idea as create manager
  
	// function to add an intern
		// same idea as create manager

	// function to create the output
		// call the function from page-template module and pass in the team members array and save to a data variable
		// use fs module to write the a file -> pass in the fs.write(outputPath, the data, and "utf-8")

  // call the function to create a manager to start the process

// call init()
init(); 

const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html"); 


