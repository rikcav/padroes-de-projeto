import { IMealBuilder } from "../interfaces/IMealBuilder";
import { AppleJuice } from "./AppleJuice";
import { Beans } from "./Beans";
import { FruitSalad } from "./FruitSalad";
import { MealBox } from "./MealBox";
import { Rice } from "./Rice";

export class VeganDishBuilder implements IMealBuilder {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);

    this._mealBox.add(rice, beans);

    return this;
  }

  makeBeverage(): this {
    const appleJuice = new AppleJuice("Suco de maçã", 2);
    this._mealBox.add(appleJuice);

    return this;
  }

  makeDessert(): this {
    const fruitSalad = new FruitSalad("Salada de frutas", 6);
    this._mealBox.add(fruitSalad);

    return this;
  }

  build(): MealBox {
    return this._mealBox;
  }
}
