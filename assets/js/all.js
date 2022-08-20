"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
"use strict";

var path = window.location.pathname;
var data = [];
var productList = document.querySelector('.productList');

if (path.startsWith("/webLayoutTr2002_week4/product") && path.endsWith(".html")) {
  init();
}

function init() {
  axios.get("https://raw.githubusercontent.com/yts38n/webLayoutTr2002_week4/main/app/json/product-optical.json").then(function (res) {
    data = res.data.data;
    renderHTML(data);
  })["catch"](function (error) {
    console.log(error);
  });
}

; //寫入頁面

function renderHTML(ary) {
  var str = "";
  ary.forEach(function (item) {
    var colors = "";
    item["colors"].forEach(function (item) {
      colors += "<div class=\"paletteCard-".concat(item, "\"></div>");
    });
    str += "\n            <li class=\"productCard\">\n                <img src=\"".concat(item["imgUrl"], "\" alt=\"").concat(item["name"], "\">\n                <div class=\"productCard-content\">\n                    <h3>").concat(item["name"], "</h3>\n                    <p>").concat(item["price"], "</p>\n                    <div class=\"palette\">\n                        ").concat(colors, "\n                    </div>\n                </div>\n            </li>");
    productList.innerHTML = str;
  });
}

;
//# sourceMappingURL=all.js.map
