const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe ('Initialization', () => {
        it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
            const manager = new Manager();
            expect(typeof(manager)).toBe("object"); 
            
          });

          it('it sets the name property based on constructor argument', () => {
            const name = 'Man';
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
          });
      
          it('it sets the id property based on constructor argument', () => {
            const id = 123;
            const manager = new Manager('', id);
            expect(manager.id).toBe(id);
          });
      
          it('it sets the email property based on constructor argument', () => {
            const email = 'man@email.com';
            const manager = new Manager('', 1, email);
      
            expect(manager.email).toBe(email);
          });

    });

    describe('getName', () => {
        it('returns the name property when the getName() method is called', () => {
          const name = 'Man';
          const manager = new Manager(name);
    
          expect(manager.getName()).toBe(name);
        });
      })
    
      describe( 'getId', () => {
        it('returns the id property when the getId() method is called', () => {
          const id = 123;
          const manager = new Manager('', id);
    
          expect(manager.getId()).toBe(id);
        });
      });
    
      describe('getEmail', () => {
        it('returns the email property when the getEmail() method is called', () => {
          const email = 'man@example.com';
          const manager = new Manager('', 123, email);
    
          expect(manager.getEmail()).toBe(email);
        });
      });

    describe ('getRole()', () => {
        it ('should return Manager when the getRole() method is called', () => {
        const manager = new Manager ('Man',123,'man@example.com'); 
        expect(manager.getRole()).toBe('Manager');
        });
    });

    describe ('getOfficeNumber()', () => {
        it ('returns officeNumber through getOfficeNumber() method', () => { 
        const officeNumber = 123
        const manager = new Manager ('Man',123,'man@example.com',officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);  
        });
    });

});