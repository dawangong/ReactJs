import http from "./http";

const musicApi = data => {
  return http({
    method: 'get',
    url: "/other/meting/api",
    params: data
  });
};

export {
  musicApi
}

