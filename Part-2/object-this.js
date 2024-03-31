//Penggunaan keyword this
function Person(firstName, lastName){
    // properti
    this.firstName = firstName;
    this.lastName = lastName;
    // method
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
 }
 this.showName = function(){
 console.log(this.fullName());
 }
}
var person1 = new Person("Habibi", "Yasin");
var person2 = new Person("Buah", "Duku");
person1.showName();
person2.showName();