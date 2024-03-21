import { MyDatabaseClassic } from "./creational/singleton/db/MyDatabaseClassic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: "Henrique", age: 22 });
myDatabaseClassic.add({ name: "João", age: 21 });
myDatabaseClassic.add({ name: "Maria", age: 23 });
myDatabaseClassic.show();

console.log("---------------------------------------");
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log("---------------------------------------");
const myDatabaseClassic2 = MyDatabaseClassic.instance;
myDatabaseClassic2.add({ name: "Roberta", age: 19 });
myDatabaseClassic2.add({ name: "Jonas", age: 18 });
myDatabaseClassic2.show();

console.log("---------------------------------------");
console.log("myDatabaseClassic === myDatabaseClassic2");
console.log(myDatabaseClassic === myDatabaseClassic2);
