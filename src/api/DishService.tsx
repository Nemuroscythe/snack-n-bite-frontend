import DishDetail from "../model/DishDetail";
import apiClient from "./Client";

export function getDishes() {
  return apiClient.get("/dishes");
}

export function getDish(dish_id: String) {
  return apiClient.get("/dishes/" + dish_id);
}

export function createDish(dish: DishDetail) {
  let createDish = {
    name: dish.name,
    unit_price: dish.unit_price,
    ingredients: Array.isArray(dish.ingredients) ? dish.ingredients : [dish.ingredients],
    id_cooks: "a77772f3-4983-48c9-8c95-9c0538b442f8",
  };
  return apiClient.post("/dishes", createDish);
}

export function updateDish(dish: DishDetail) {
  let updateDish = {
    name: dish.name,
    unit_price: dish.unit_price,
    ingredients: Array.isArray(dish.ingredients) ? dish.ingredients : [dish.ingredients],
    id_cooks: "a77772f3-4983-48c9-8c95-9c0538b442f8",
  };
  return apiClient.put("/dishes/" + dish.id, updateDish);
}

export function deleteDish(dish_id: String) {
  return apiClient.delete("/dishes/" + dish_id);
}
