var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am " + this.name);
    };
    Person.prototype.tellMyAge = function () {
        console.log(" I am " + this.age + " years old");
    };
    return Person;
}());
var exemple1 = new Person("John", 40);
var exemple2 = new Person("Mary", 35);
exemple1.tellMyName();
exemple1.tellMyAge();
exemple2.tellMyName();
exemple2.tellMyAge();
