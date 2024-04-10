import { IMealComposite } from "../interfaces/IMealComposite";

export abstract class AbstractMeal implements IMealComposite {
  constructor(
    private name: string,
    private price: number,
  ) { }

  getPrice(): number {
    return this.price;
  }
}
