import { IMealComposite } from "../interfaces/IMealComposite";

export class MealBox implements IMealComposite {
  private readonly _meals: IMealComposite[] = [];

  getPrice(): number {
    return this._meals.reduce((sum, meal) => (sum += meal.getPrice()), 0);
  }

  add(...meal: IMealComposite[]): void {
    meal.forEach((item) => this._meals.push(item));
  }
}
