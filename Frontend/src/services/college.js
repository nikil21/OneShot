import http from "../http-common";

class CollegeDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  } 

  getCourses(id) {
    return http.get(`/Courses`);
  }

}

export default new CollegeDataService();