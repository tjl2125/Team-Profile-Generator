const Intern = require ("../lib/Intern"); 

describe("Intern", () => {
    describe("Initialization", ()=> {
        it ("can set the university through the constructor" )
        const uni = "Columbia University";
        const intern = new Intern ("Int", 1, "student@example.com", uni);
        expect (intern.university).toBe(uni); 
    });

    describe("getRole", () => {
        it ("getRole() should return Intern")
        const role = "Intern"; 
        const intern = new Intern ("Int", 1, "student@example.com", "Columbia University");
        expect(intern.getRole()).toBe(role); 
    });

    describe("getUniversity()", () => {
        it ("getUniveristy() can get the university")
        const univ = "Columbia University";
        const intern = new Intern("Int",1,"student@example.com",univ);
        expect(intern.getUniversity()).toBe(univ); 
    });
})