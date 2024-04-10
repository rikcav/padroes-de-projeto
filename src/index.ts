import { MainDishBuilder } from "./creational/builder/restaurant/classes/MainDishBuiler";

const mainDishBuilder = new MainDishBuilder();

const meal1 = mainDishBuilder
  .makeMeal()
  .makeBeverage()
  .makeBeverage()
  .makeDessert()
  .build();
console.log(meal1);
console.log(meal1.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder
  .makeDessert()
  .makeDessert()
  .makeBeverage()
  .build();
console.log(meal2);
console.log(meal2.getPrice());

console.log("----------------------------------------------------------------")
console.log(meal1);
console.log(meal1.getPrice());
console.log(meal2);
console.log(meal2.getPrice());
