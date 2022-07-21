const Intern = require('../lib/Intern');


describe('Intern', () => {
  describe('Initialization', () => {

    it("should exist with a name property set to the name argument provided when called with the new keyword", () => {

      const name = "Jeff";

      const id = "23";

      const email = "test@test.com"

      const school = "school";

      const obj = new Intern(name, id, email, school);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.school).toEqual(school);
    });
  });


  describe('getRole', () => {

    it("should return role when getRole function is called", () => {

      const name = "Jeff";
      const id = "23";
      const email = "test@test.com"
      const school = "school";
      const role = "Intern";


      const obj = new Intern(name, id, email, school);

      expect(obj.getRole()).toEqual(role);
    });
  });
});