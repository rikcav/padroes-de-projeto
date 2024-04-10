import { MainDishBuilder } from "./creational/builder/restaurant/classes/MainDishBuiler";
import { VeganDishBuilder } from "./creational/builder/restaurant/classes/VeganDishBuilder";

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

const meal1 = mainDishBuilder
  .makeMeal()
  .makeBeverage()
  .makeBeverage()
  .makeDessert()
  .build();
console.log(meal1);
console.log(meal1.getPrice());

mainDishBuilder.reset();

const meal2 = veganDishBuilder
  .makeDessert()
  .makeDessert()
  .makeBeverage()
  .build();
console.log(meal2);
console.log(meal2.getPrice());

console.log("----------------------------------------------------------------");
console.log(meal1);
console.log(meal1.getPrice());
console.log(meal2);
console.log(meal2.getPrice());
