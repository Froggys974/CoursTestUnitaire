class User {
    constructor(firstName, lastName, email, password, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }
    
    isValid() {
       const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
       const lastNameValid = typeof this.lastName === 'string' && this.lastName.length > 0;
       const firstNameValid = typeof this.firstName === 'string' && this.firstName.length > 0;
       const ageValid = this.getAge(new Date(this.birthdate)) >= 13;
       const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
       const passwordValid = typeof this.password === 'string' && regexPassword.test(this.password);
       return emailValid && lastNameValid && firstNameValid && ageValid && passwordValid;
    }

    getAge(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
}
module.exports = User;