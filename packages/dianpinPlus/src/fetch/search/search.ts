import axios from "../axios";

export function getSearchData(page, cityName, category, keyword) {
  const keywordStr = keyword ? "/" + keyword : "";
  const result = axios.get(
    "/api/search/" + page + "/" + cityName + "/" + category + keywordStr
  );
  return result;
}
