const Item = require("../../todoList/Item");

describe("Tests de la classe Item", () => {
  test("Création d'un item avec nom et contenu valides", () => {
    const item = new Item("Tâche 1", "Ceci est le contenu de la tâche 1.");
    expect(item.getName()).toBe("Tâche 1");
    expect(item.getContent()).toBe("Ceci est le contenu de la tâche 1.");
    expect(item.getDateCreation()).toBeInstanceOf(Date);
  });

  test("Création d'un item avec nom et contenu vide donc invalide", () => { 
    expect(() => {
      new Item("Tâche 1", "");
    }).toThrow("Le contenu doit être une chaîne de caractères non vide.");
  });

  test("Création d'un item avec nom et contenu qui n'est pas un string donc invalide", () => {
    expect(() => {
      new Item("Tâche 1", 123);
    }).toThrow("Le contenu doit être une chaîne de caractères non vide.");
  });

  test("Création d'un item avec nom et contenu supérieur a 1000 caractères donc invalide", () => {
    expect(() => {
      new Item("Tâche 1", "a".repeat(1001));
    }).toThrow("Le contenu ne doit pas dépasser 1000 caractères");
  });

  

});
