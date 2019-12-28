import http from "./http";

const mainApi = data => {
  return http({
    method: 'get',
    url: "/main",
    params: data
  });
};

export {
  mainApi
}

