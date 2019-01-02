import Axios from 'axios';
import Qs from 'qs';
import router from '../router';
import Cookies from 'js-cookie';


const config = {
  baseURL: '/api',
  timeout: 30000, //超过两秒的请求请用微服务来处理
  withCredentials: true, //是否允许跨域
  headers: {
    'Content-Type': 'charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    "type": "web",
  },
  // 如果使用formdata，在headers的Content-Type加入这个application/x-www-form-urlencoded;
  // transformRequest: [function (data) {
  //   // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
  //   data = Qs.stringify(data);
  //   return data;
  // }],
  //返回数据类型
  responseType: 'json'
};

const AsInst = Axios.create(config);

//请求拦截器
AsInst.interceptors.request.use((config) => {
  //若是有做鉴权token , 就给头部带上token
  if (window.localStorage.getItem('Authorization')) {
    config.headers.Authorization = `${window.localStorage.getItem('Authorization')}`;
  }

  return config;
}, (err) => {
  return Promise.reject(err);
});

//响应拦截器
AsInst.interceptors.response.use(response => {
  //检查数据是否返回NULL
  if (response.data === null) {
    return Promise.reject(response);
  }

  //检查是否有权限
  if (response.data.code === 2000 && response.data.status === false) {
    return Promise.reject(response);
  }

  //检查登陆信息是否还存在
  if (response.data.code === 2001 && response.data.status === false) {
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('Authorization');
    Router.push({
      path: '/passport/login'
    });
    return Promise.reject(response);
  }

  // 更新登录标识
  if (typeof response.headers.Authorization !== 'undefined') {
    window.localStorage.setItem("Authorization", response.headers.Authorization);
  }
  return response;
}, (error) => {
  console.log(error);
  if (error.response.status === 401) {
    Cookies.remove('user');
    Cookies.remove('password');
    Cookies.remove('access');
    // 恢复默认样式
    let themeLink = document.querySelector('link[name="theme"]');
    themeLink.setAttribute('href', '');
    // 清空打开的页面等数据，但是保存主题数据
    let theme = '';
    if (localStorage.theme) {
        theme = localStorage.theme;
    }
    var userName = localStorage["userName"]
    localStorage.clear();
    localStorage["userName"] = userName;
    router.push({path: '/login'});
    return false;
  }
  // 下面是接口回调的status ,因为我做了一些错误页面,所以都会指向对应的报错页面
  if (error.response.status === 404) {
    Router.push({
      path: '/error/404'
    });
  }
  //请求错误时做些事
  return Promise.reject(error);
});

export default AsInst;
