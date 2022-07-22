const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {

    it("should exist with a name property set to the name argument provided when called with the new keyword", () => {

      const name = "Jeff";
      const id = "23";
      const email = "test@test.com"
      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });


  describe('getRole', () => {

    it("should return role when getRole function is called", () => {

      const name = "Jeff";
      const id = "23";
      const email = "test@test.com"
      const role = "Employee";


      const obj = new Employee(name, id, email);

      expect(obj.getRole()).toEqual(role);
    });
  });
});