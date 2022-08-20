"use strict";

var data = [{
  "id": 0,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-1.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}, {
  "id": 1,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-2.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}, {
  "id": 2,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-3.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}, {
  "id": 3,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-4.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}, {
  "id": 4,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-5.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}, {
  "id": 5,
  "name": "BJ41600S",
  "imgUrl": "./assets/images/product-6.png",
  "price": 3490,
  "colors": ["#5F3E2D", "#B75929"]
}]; //執行預設頁面載入

init(); //預設頁面載入

function init() {
  axios.get("https://raw.githubusercontent.com/yts38n/webLayoutTr2002_week4/blob/main/app/json/product-optical.json").then(function (res) {
    data = res.data.data;
    console.log(data);
  })["catch"](function (error) {
    console.log(error);
  });
}

; //寫入頁面

function renderHTML(ary) {
  var str = "";
  ary.forEach(function (item) {
    str += "\n        <li class=\"productCard\">\n          \t<img src=".concat(item["imgUrl"], " alt=\"").concat(item["name"], "\">\n            <div class=\"productCard-content\">\n                <div>\n                    <h3>").concat(item["name"], "</h3>\n                    <p>").concat(item["price"], "</p>\n                </div>\n                <div>\n\t\t\t\t\t").concat(item["colors"], "\n                </div>\n            </div>\n        </li>");
    productCard.innerHTML = str;
  });
}

;
//# sourceMappingURL=all.js.map
