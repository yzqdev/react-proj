const $ = require("licia/$");
import axios from 'axios'
// const Mock = require(`mockjs`);
// const axios = require(`axios`);
// let Random = Mock.Random;
// // 使用mockjs模拟数据
// let dataList = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   "list|1-10": [
//     {
//       // 属性 id 是一个自增数，起始值为 1，每次增 1
//       "id|+1": 1,
//       name: `@FIRST`,
//       creatTime: Random.datetime()
//     }
//   ]
// });
// //根据数据模板生成模拟数据
// Mock.mock(`/api/getprodlist`, `get`, (req, res) => {
//   return {
//     status: 0,
//     data: dataList,
//     message: `成功`
//   };
// });
axios.get(`https://github-trending-api.now.sh/`).then(res => {
  res.data.forEach((data) => {
    console.log(data)
  })
});
// function component() {
//   const element = document.createElement("div");
//   const button = document.createElement("button");
//   const br = document.createElement("br");
//   button.innerHTML = "click me and look console";
//   element.innerHTML = _.join("hello", "wepack", " ");
//   element.appendChild(br);
//   element.appendChild(button);
//
//
//   return element;
// }

// document.body.appendChild(component());
