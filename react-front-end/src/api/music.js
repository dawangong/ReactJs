import http from "./http";

const musicApi = data => {
  return http({
    method: 'get',
    url: "https://api.i-meto.com/meting/api",
    params: data
  });
};

export {
  musicApi
}

