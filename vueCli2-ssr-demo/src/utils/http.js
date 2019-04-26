import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api/v0.1.0",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origen": "*"
  }
});

http.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    // Do something before response is sent
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default function request(method, url, data) {
  //暴露 request 给我们好API 管理
  // method = method.toLocaleLowerCase(); //封装RESTful API的各种请求方式 以 post get delete为例
  if (method === "post") {
    return http.post(url, data); //axios的post 默认转化为json格式
  } else if (method === "get") {
    return http.get(url, {
      params: data
    });
  } else if (method === "delete") {
    return http.delete(url, {
      params: data
    });
  }
}
