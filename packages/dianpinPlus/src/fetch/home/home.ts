import axios from "../axios";

export function getAdData() {
  const result = axios.get("/api/homead");
  return result;
}

export function getListData(city, page) {
  const result = axios.get(
    "/api/homelist/" + city + "/" + page
  );
  return result;
}
