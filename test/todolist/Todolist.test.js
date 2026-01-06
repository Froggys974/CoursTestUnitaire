const Item = require("../../todoList/Item");
const Todolist = require("../../todoList/Todolist");
const User = require("../../todoList/User");

describe("Tests de la classe Todolist", () => {
  let todoList;
  let user;
  let mockEmailSenderService;
  
  beforeEach(() => {
    mockEmailSenderService = {
      sendEmailToDoListAlmostFilled: jest.fn()
    };
    
    user = new User(
      "Florent",
      "ESGI",
      "florent.esgi@example.com",
      "passWordComplique12",
      "2000-10-22"
    );
    todoList = new Todolist(user, mockEmailSenderService);
  });
  test("Add item valide", () => {
    const item = new Item("Tâche 1", "Ceci est le contenu de la tâche 1.");
    todoList.addItem(item);
    expect(todoList.items.length).toBe(1);
  });
  

  test("Add item user non valide", () => {
    const item = new Item("Tâche 1", "Ceci est le contenu de la tâche 1.");
    user.email = 'tetetstete@kdk';
    expect(()=>{
      todoList.addItem(item);
    }).toThrow("Utilisateur non valide.");
  });

  test("Add item limite atteinte", () => {
    for (let i = 0; i < 10; i++) {
      let itemTemp = new Item(`Tâche ${i}`, `Ceci est le contenu de la tâche ${i}.`);
      let currentMinuteItem = itemTemp.dateCreation.getMinutes();
      itemTemp.dateCreation.setMinutes(currentMinuteItem + (i*31))  
      todoList.addItem(itemTemp);
    }
    const item = new Item("Tâche bloqué", "Ceci est le contenu de la tâche qui sera bloqué.");
    expect(()=>{
      todoList.addItem(item);
    }).toThrow("Limite d'items atteinte");
  });

  test("Add item item existe deja", () => {
    const item = new Item("Tâche 1", "Ceci est le contenu de la tâche 1.");
    expect(()=>{
      todoList.addItem(item);
      todoList.addItem(item);
    }).toThrow("L'item existe déjà dans la liste");
  });

  test("Add item trop rapidement < 30 minutes", () => {
    const item = new Item("Tâche 1", "Ceci est le contenu de la tâche 1.");
    const item2 = new Item("Tâche 2", "Ceci est le contenu de la tâche 2.");
    expect(()=>{
      todoList.addItem(item);
      todoList.addItem(item2);
    }).toThrow("Il faut attendre 30 minutes entre deux ajouts d'items");
  });
  
  test("add item envoie mail au 7eme item ajouté", () => {
   for (let i = 0; i < 7; i++) {
      let itemTemp = new Item(`Tâche ${i}`, `Ceci est le contenu de la tâche ${i}.`);
      let currentMinuteItem = itemTemp.dateCreation.getMinutes();
      itemTemp.dateCreation.setMinutes(currentMinuteItem + (i*31))  
      todoList.addItem(itemTemp);
    }
    expect(mockEmailSenderService.sendEmailToDoListAlmostFilled).toHaveBeenCalledTimes(0);
    let item = new Item("Tâche avec envoie mail", "Ceci est le contenu de la tâche ou le mail sera envoyé.");
    let currentMinuteItem = item.dateCreation.getMinutes();
    item.dateCreation.setMinutes(currentMinuteItem + (7*31))  
    todoList.addItem(item);
    expect(mockEmailSenderService.sendEmailToDoListAlmostFilled).toHaveBeenCalledTimes(1);
    expect(mockEmailSenderService.sendEmailToDoListAlmostFilled).toHaveBeenCalledWith('florent.esgi@example.com');
  });
  

});
