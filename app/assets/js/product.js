let path = window.location.pathname;
let data = [];
const productList = document.querySelector('.productList');

if (path.startsWith("/product") && path.endsWith(".html")) {
    init();
}

function init() {
    axios.get("https://raw.githubusercontent.com/yts38n/webLayoutTr2002_week4/main/app/json/product-optical.json")
        .then(res => {
            data = res.data.data;
            renderHTML(data);
        })
        .catch(error => {
            console.log(error);
        });
};

//寫入頁面
function renderHTML(ary) {
    let str = "";
    
    ary.forEach(item => {
        let colors = "";

        item["colors"].forEach(item => {
            colors += `<div class="paletteCard-${item}"></div>`
        });
        
        str += `
            <li class="productCard">
                <img src="${item["imgUrl"]}" alt="${item["name"]}">
                <div class="productCard-content">
                    <h3>${item["name"]}</h3>
                    <p>${item["price"]}</p>
                    <div class="palette">
                        ${colors}
                    </div>
                </div>
            </li>`;
        productList.innerHTML = str;
    });
};