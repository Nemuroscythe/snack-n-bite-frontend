export default class Dish {
  id: string;
  name: string;
  unit_price: number;

  constructor(id: string, name: string, unit_price: number) {
    this.id = id;
    this.name = name;
    this.unit_price = unit_price;
  }
}
