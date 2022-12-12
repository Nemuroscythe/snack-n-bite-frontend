import Dish from "../model/Dish";
import apiClient from "./Client";

export function getDishes(){
    return apiClient.get("/dishes");
}

export function getDish(dish_id:String){
    return apiClient.get("/dishes/" + dish_id);
}

export function createDish(dish:Dish){
    return apiClient.post("/dishes", dish);
}

export function updateDish(dish:Dish){
    return apiClient.put("/dishes", dish);
}

export function deleteDish(dish_id:String){
    return apiClient.delete("/dishes/" + dish_id);
}
