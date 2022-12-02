import apiClient from "./Client";

export function getDishes(){
    return apiClient.get("/dishes");
}