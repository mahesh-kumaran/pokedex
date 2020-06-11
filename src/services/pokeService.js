import http from "./httpService";

const endPoint = "https://pokeapi.co/api/v2/";

export function getPokeList() {
  return http.get(`${endPoint}pokemon`);
}

export function getPokeProfile(pokeId) {
  return http.get(`${endPoint}pokemon/${pokeId}`);
}