import { PersonBuilder } from "./creational/builder/person/PersonBuilder";

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName("Henrique").setAge(22).build();
console.log(person1);

personBuilder.newPerson();
const person2 = personBuilder.setName("Maria").setAge(26).build();
console.log(person2);

console.log(person1);
console.log(person2);
