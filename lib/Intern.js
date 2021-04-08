const Employee = require ("./Employee"); 

class Intern extends Employee {
    constructor (name, id, email, university){
    super(name, id, email);
    this.univeristy= university;
    }
    getRole() {
        return "Intern"; 
    };
    getUniversity() {
        return this.university; 
    }
};

module.exports = Intern; 
