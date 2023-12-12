class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    tellMyName(): void {
        console.log("I am " + this.name);
    }
    tellMyAge(): void {
        console.log(" I am " + this.age + " years old");
    }
}

const exemple1 = new Person("John", 40);
const exemple2 = new Person("Mary", 35);

exemple1.tellMyName();
exemple1.tellMyAge();
exemple2.tellMyName();
exemple2.tellMyAge();
