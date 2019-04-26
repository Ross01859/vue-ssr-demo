const Mock = require("mockjs"); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = "http://localhost:3000"; // 定义默认域名，随便写
const code = 200; // 返回的状态码

// 随机生成新闻数据
const getNewsData = req => {
  console.log(req); // 请求体，用于获取参数

  let newsData = []; // 用于存放文章数据的数组

  for (let i = 0; i < 10; i++) {
    let post = {
      level_1: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      level_2: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      thumbnail: Random.dataImage("250x250", "文章icon"), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      context: Random.csentence(10, 225), // 随机生成长度为10-25的标题
      time: Random.date() + "" + Random.time()// 随机生成年月日 + 时间
    };

    newsData.push(post);
  }

  // 返回状态码和文章数据newsData
  return {
    code,
    newsData
  };
};

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/api/v0.1.0/news/list/`, "get", getNewsData);
