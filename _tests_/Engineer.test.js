const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {

    it("should exist with a name property set to the name argument provided when called with the new keyword", () => {

      const name = "Jeff";
      const id = "23";
      const email = "test@test.com"
      const github = "github";

      const obj = new Engineer(name, id, email, github);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.github).toEqual(github);

    });
  });


  describe('getRole', () => {

    it("should return role when getRole function is called", () => {

      const name = "Jeff";
      const id = "23";
      const email = "test@test.com"
      const github = "github";
      const role = "Engineer";


      const obj = new Engineer(name, id, email, github);

      expect(obj.getRole()).toEqual(role);
    });
  });
});