import http from "./http";

const getArticleDirectoryApi = data => {
  return http({
    method: 'get',
    url: "/article-directory",
    params: data
  });
};

export {
  getArticleDirectoryApi
}

