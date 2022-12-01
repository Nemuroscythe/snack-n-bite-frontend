import apiClient from "./Client";

export function getHelloMessage(id:string) {
  return apiClient.get("hello/" + id);
}
