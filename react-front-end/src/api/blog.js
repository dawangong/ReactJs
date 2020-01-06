import http from "./http";

const getArticleDirectoryApi = data => {
  return http({
    method: 'get',
    url: "/article-directory",
    params: data
  });
};

const getBlogDirectoryApi = data => {
  const { page } = data;
  return http({
    method: 'get',
    url: `/csdn/wangongda/article/list/${page}`
  });
};

export {
  getArticleDirectoryApi,
  getBlogDirectoryApi
}

