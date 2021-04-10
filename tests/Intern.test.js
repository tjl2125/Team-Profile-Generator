const Intern = require ("../lib/Intern"); 

describe ("Intern", () => {
    describe ("Initialization", () => {
        it ("returns the Intern role through getRole()", () => {
            const intern = new Intern (); 
            expect (intern.getRole()).toBe("Intern"); 
        })
        it ("returns the name of the university through getUniversity()", () => {
            const intern = new Intern (); 
            const uni = "Columbia"; 
            expect (intern.getUniversity()).toBe("Columbia"); 
        })
    })
})



    // test ("can set the university through the constructor", ()=> { 
    // const uni = "Columbia University";
    // const intern = new Intern ("Int", 1, "student@example.com", uni);
    // expect (intern.university).toBe(uni); 
    // });

    // test ("getRole() should return Intern", () => {
    // const role = "Intern"; 
    // const intern = new Intern ("Int", 1, "student@example.com", "Columbia University");
    // expect(intern.getRole()).toBe(role); 
    // });

    // test ("getUniveristy() can get the university name", () => {
    // const univ = "Columbia University";
    // const intern = new Intern("Int",1,"student@example.com",univ);
    // expect(intern.getUniversity()).toBe(univ); 
    // });