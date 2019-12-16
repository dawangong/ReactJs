import axios from "axios";

const mainApi = data => {
  return axios({
    method: 'get',
    url: "/main",
    params: data
  });
};

export {
  mainApi
}

