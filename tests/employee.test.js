const Employee = require ('../lib/Employee'); 

describe ('Employee', () => {

    describe("Initialization",() =>{
        it("returns an object that it is an instance of the Employee class when called with new keyword")
        const employee = new Employee(); 
        expect(employee instanceof Employee).toBe(true); 

    })

    it("it sets the name property based on constructor argument",() => {
        const name = "Grace"; 
        const employee = new Employee(name); 

        expect(employee.name).toBe(name); 

    })

    it("it sets the id property based on constructor argument", () => {
        const id = 1;
        const employee = new Employee("", id);
        expect(employee.id).toBe(id);
    });

    it ("it sets the email property based on constructor argument",() => {
        const email = "test@gmail.com"
        const employee = new Employee ("",0,email);
        expect(employee.email).toBe(email) 
    })

})

describe("getName",() => {
    it("returns the name property when getName() is called", () => {
        const name = "Hank"; 
        const employee = new Employee(name); 
        expect(employee.getName().toBe(name))
    })
})
describe("getId",() => {
    it ("returns the id property when the getId() method is called", () =>{
    const id = 3; 
    const employee = new Employee ("",id); 
    expect(employee.getId()), toBe(id); 
    });
});

describe ("getEmail", () => {
    it ("returns the email property when getEmail() is called", () => {
        const email = "test@gmail.com";
        const employee = new Employee ("",0,email); 
        expect(employee.getEmail()).toBe(email); 
    })
}); 

describe ("getRole", () => {
    it ("returns Employee when getRole() method is called", () => {
        const employee = new Employee (); 
        expect (employee.getRole()).toBe("Employee"); 
    })
})