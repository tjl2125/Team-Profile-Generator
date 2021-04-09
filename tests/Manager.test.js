const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe ("Initialization", () => {
        test ("can set the office number through the constructor argument")
        const offNum = 123; 
        const manager = new Manager("Man", 1, "man@example.com", offNum);
        expect(manager.officeNum).toBe(offNum); 
    })

    describe ("getRole()", () => {
        test ("should return Manager")
        const role = "Manager";
        const manager = new Manager ("Man",1,"man@example.com",123); 
        expect(manager.getRole()).toBe(role);
    })

    describe ("getOffice()", () => {
        test ("can get the office number through getOffice()")
        const oNum = 123; 
        const manager = new Manager ("Man",1,"man@example.com",oNum);
        expect(manager.getOfficeNum()).toBe(oNum); 
    })
})