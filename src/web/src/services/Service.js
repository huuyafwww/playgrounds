import axios from "axios";

export default class Service {
  static post(url, data = null, headers = {}) {
    return axios({
      method: "post",
      url: `${import.meta.env.VITE_API_BASE_URL}/${url}`,
      data,
      headers,
    });
  }
}
