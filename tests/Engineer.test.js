const Engineer = require ("../lib/Engineer"); 

describe ("Engineer", () => {
    describe ("Initialization", () => {
        it("returns an object that it is an instance of the Engineer class when called with new keyword")
        const engineer = new Engineer(); 
        expect(engineer instanceof Engineer).toBe(true); 

    })

    it("it sets the name property based on constructor argument",() => {
        const name = "Grace"; 
        const engineer = new Engineer(name); 

        expect(engineer.name).toBe(name); 

    })

    it("it sets the id property based on constructor argument", () => {
        const id = 123;
        const engineer = new Engineer("", id);
        expect(engineer.id).toBe(id);
    });

    it ("it sets the email property based on constructor argument",() => {
        const email = "test@example.com"
        const engineer = new Engineer("",0,email);
        expect(engineer.email).toBe(email) 
    })

})

describe("getName",() => {
    it("returns the name property when getName() is called", () => {
        const name = "Hank"; 
        const engineer = new Engineer(name); 
        expect(engineer.getName().toBe(name))
    })
})

describe("getId",() => {
    it ("returns the id property when the getId() method is called", () =>{
    const id = 123; 
    const engineer = new Engineer ("",id); 
    expect(engineer.getId()), toBe(id); 
    });
});

describe ("getEmail", () => {
    it ("returns the email property when getEmail() is called", () => {
        const email = "test@example.com";
        const engineer = new Engineer ("",123,email); 
        expect(engineer.getEmail()).toBe(email); 
    });
}); 

describe ("getRole", () => {
    it ("returns Employee when getRole() method is called", () => {
        const engineer = new Engineer (); 
        expect (engineer.getRole()).toBe("Engineer"); 
    });
});

describe('getGithub', () => {
    it("returns 'github' when the getGithub() method is called", () => {
      const github = 'https://www.github.com/';
      const engineer = new Engineer("", 123, 'test@example.com', github);

      expect(engineer.getGithub()).toBe(github);
    });
  });