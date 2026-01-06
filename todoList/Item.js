class Item{
    constructor(name, content) {
        this.name = name;
        this.setContent(content);
        this.dateCreation = new Date();
    }

    getName() {
        return this.name;
    }
    getContent() {
        return this.content;
    }
    getDateCreation() {
        return this.dateCreation;
    }
    setContent(content) {
        if (typeof content !== 'string' || content.trim() === '') {
            throw new Error("Le contenu doit être une chaîne de caractères non vide.");
        }
        if (content.length > 1000) {
            throw new Error("Le contenu ne doit pas dépasser 1000 caractères.");
        }
        return  this.content = content;
    }
}
module.exports = Item;