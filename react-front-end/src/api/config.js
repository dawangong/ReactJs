import axios from 'axios';

// 前缀
axios.defaults.baseURL = "/api";
// 跨域携带cookie
axios.defaults.withCredentials = true;
// 6s超时
axios.defaults.timeout = 6000;
// ajax标识
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// req拦截器配置
axios.interceptors.request.use(config => {
  // config.setHeaders([]);
  return config
});
// res拦截器配置
axios.interceptors.response.use(response => {
  // 200请求
  if (response.status === 200) {
    return response.data.data || response.data;
  } else {
    // 非200请求
    throw Error(response.data.msg || '服务异常')
  }
});
