import http from "./httpService";

const endPoint = "https://pokeapi.co/api/v2/";

export function getPokeList() {
  return http.get(`${endPoint}pokemon`);
}
