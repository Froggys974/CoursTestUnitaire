class User {
    constructor(firstName, lastName, age, email, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.birthdate = birthdate;
    }
    
    isValid() {
       const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
       const lastNameValid = typeof this.lastName === 'string' && this.lastName.length > 0;
       const firstNameValid = typeof this.firstName === 'string' && this.firstName.length > 0;
       const ageValid = this.getAge(new Date(this.birthdate)) >= 13;  
       return emailValid && lastNameValid && firstNameValid && ageValid;
    }

    getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
}
module.exports = User;