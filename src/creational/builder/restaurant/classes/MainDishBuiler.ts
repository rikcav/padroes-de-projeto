import { IMealBuilder } from "../interfaces/IMealBuilder";
import { AppleJuice } from "./AppleJuice";
import { Beans } from "./Beans";
import { Brigadeiro } from "./Brigadeiro";
import { MealBox } from "./MealBox";
import { Meat } from "./Meat";
import { Rice } from "./Rice";

export class MainDishBuilder implements IMealBuilder {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 15);

    this._mealBox.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const appleJuice = new AppleJuice("Suco de maçã", 2);
    this._mealBox.add(appleJuice);

    return this;
  }

  makeDessert(): this {
    const brigadeiro = new Brigadeiro("Brigadeiro", 1.5);
    this._mealBox.add(brigadeiro);

    return this;
  }

  build(): MealBox {
    return this._mealBox;
  }
}
