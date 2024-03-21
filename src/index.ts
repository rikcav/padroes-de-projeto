import { MyDatabaseModule } from "./creational/singleton/db/MyDatabaseModule";

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: "Henrique", age: 22 });
myDatabaseModule.add({ name: "João", age: 21 });
myDatabaseModule.add({ name: "Maria", age: 23 });
myDatabaseModule.show();

console.log("---------------------------------------");
myDatabaseModule.remove(1);
myDatabaseModule.show();

console.log("---------------------------------------");
const myDatabaseModule2 = MyDatabaseModule;
myDatabaseModule2.add({ name: "Roberta", age: 19 });
myDatabaseModule2.add({ name: "Jonas", age: 18 });
myDatabaseModule2.show();

console.log("---------------------------------------");
console.log("myDatabaseModule === myDatabaseModule2");
console.log(myDatabaseModule === myDatabaseModule2);
