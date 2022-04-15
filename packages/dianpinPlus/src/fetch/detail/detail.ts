import axios from "../axios";

export function getDetail(id) {
  const result = axios.get("/api/detail/info/" + id);
  return result;
}

export function getCommentData(page, id) {
  const result = axios.get("/api/detail/comment/" + page + "/" + id);
  return result;
}
