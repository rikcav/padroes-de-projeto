import { MyDatabaseFunction } from "./creational/singleton/db/MyDatabaseFunction";

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: "Henrique", age: 22 });
myDatabaseFunction.add({ name: "João", age: 21 });
myDatabaseFunction.add({ name: "Maria", age: 23 });
myDatabaseFunction.show();

console.log("---------------------------------------");
myDatabaseFunction.remove(1);
myDatabaseFunction.show();

console.log("---------------------------------------");
const myDatabaseFunction2 = MyDatabaseFunction;
myDatabaseFunction2.add({ name: "Roberta", age: 19 });
myDatabaseFunction2.add({ name: "Jonas", age: 18 });
myDatabaseFunction2.show();

console.log("---------------------------------------");
console.log("myDatabaseFunction === myDatabaseFunction2");
console.log(myDatabaseFunction === myDatabaseFunction2);
