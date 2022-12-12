export default class DishDetail {
  id: string;
  name: string;
  unit_price: number;
  ingredients: Array<string>;

  constructor(id: string, name: string, unit_price: number, ingredients: Array<string>) {
    this.id = id;
    this.name = name;
    this.unit_price = unit_price;
    this.ingredients = ingredients;
  }
}
