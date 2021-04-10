const Intern = require ("../lib/Intern"); 

describe ("Intern", () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Intern class when called with the new keyword', () => {
          const intern = new Intern();
          expect(typeof(intern)).toBe("object"); 
        })
    
        it('it sets the name property based on constructor argument', () => {
          const name = "Int";
          const intern = new Intern(name);
    
          expect(intern.name).toBe(name);
        });
    
        it('it sets the id property based on constructor argument', () => {
          const id = 123;
          const intern = new Intern("", id);
    
          expect(intern.id).toBe(id);
        });
    
        it('it sets the email property based on constructor argument', () => {
          const email = 'test@example.com';
          const intern = new Intern("", 123, email);
    
          expect(intern.email).toBe(email);
        });
      })
    
      describe('getName', () => {
        it('returns the name property when the getName() method is called', () => {
          const name = "Int";
          const intern = new Intern(name);
    
          expect(intern.getName()).toBe(name);
        });
      })
    
      describe( 'getId', () => {
        it('returns the id property when the getId() method is called', () => {
          const id = 123;
          const intern = new Intern("", id);
    
          expect(intern.getId()).toBe(id);
        });
      });
    
      describe('getEmail', () => {
        it('returns the email property when the getEmail() method is called', () => {
          const email = 'test@example.com';
          const intern = new Intern("", 123, email);
    
          expect(intern.getEmail()).toBe(email);
        });
      });
    
    
      describe('getRole', () => {
        it("returns 'intern' when the getRole() method is called", () => {
          const intern = new Intern();
    
          expect(intern.getRole()).toBe('Intern');
        });
      });
    
      describe('getUniversity', () => {
        it("returns university name when the getUniversity() method is called", () => {
          const university = 'Columbia';
          const intern = new Intern("",123,'test@example.com',university);
    
          expect(intern.getUniversity()).toBe(university);
        });
      });
})

// const university = 'Columbia';
//           const intern = new Intern("", 123, 'test@example.com', university);
    
//           expect(intern.getUniversity()).toBe(university);