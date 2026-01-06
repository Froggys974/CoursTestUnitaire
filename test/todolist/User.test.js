const User = require("../../todoList/User");

describe("Tests de la classe User", () => {
  let user;
  beforeAll(() => {
    user = new User(
      "Florent",
      "ESGI",
      "florent.esgi@example.com",
      "passWordComplique12",
      "2000-10-22"
    );
  });

  test("user valide", () => {
    expect(user.isValid()).toBe(true);
  });

  test("user avec email invalide", () => {
    user.email = 'tetetstete@kdk';
    expect(user.isValid()).toBe(false);
  });

  test("user de moins de 13 ans", () => {
    user.birthdate = '2017-08-08';
    expect(user.isValid()).toBe(false);
  });

  test("user sans nom de famille", () => {
    user.lastname = '';
    expect(user.isValid()).toBe(false);
  });

  test("user sans prénom", () => {
    user.firstname = '';
    expect(user.isValid()).toBe(false);
  });

  test("user password < 8", () => {
    user.password = 'Sal4';
    expect(user.isValid()).toBe(false);
  });

  test("user password > 40", () => {
    user.password = 's'.repeat(41) + 'A4';
    expect(user.isValid()).toBe(false);
  });

  test("user password no Maj", () => {
    user.password = '455454sdsdsd';
    expect(user.isValid()).toBe(false);
  });

  test("user password no number", () => {
    user.password = 'sfjhefuhzefuhKKKKji';
    expect(user.isValid()).toBe(false);
  });

});
