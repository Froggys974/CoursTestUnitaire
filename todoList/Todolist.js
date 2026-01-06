class Todolist {
  constructor(user, EmailSenderService) {
    this.user = user;
    this.items = [];
    this.emailSenderService = EmailSenderService;
  }
  addItem(item) {
    if (!this.user.isValid()) {
      throw new Error("Utilisateur non valide.");
    }
    if (this.items.length === 10) {
      throw new Error(
        "Limite d'items atteinte"
      );
    }
    if (this.items.some((i) => i.name === item.getName())) {
      throw new Error("L'item existe déjà dans la liste");
    }
    const lastItem = this.items.length - 1 < 0 ? null : this.items[this.items.length - 1];
    if (lastItem !== null && item.getDateCreation() -  lastItem.getDateCreation() <= 30 * 60 * 1000) {
       throw new Error("Il faut attendre 30 minutes entre deux ajouts d'items");
    }
    if (this.items.length === 7) {
      this.emailSenderService.sendEmailToDoListAlmostFilled(
        this.user.email
      );
    }
    this.items.push(item);
    this.save(this.items);
  }
  save(tabItems){
    return "Le tableau d'items est bien sauvegardé en bdd"
  }
}

module.exports = Todolist;
