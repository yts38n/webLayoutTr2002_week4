let data = [{
		"id": 0,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-1.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	},
	{
		"id": 1,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-2.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	},
	{
		"id": 2,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-3.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	},
	{
		"id": 3,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-4.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	},
	{
		"id": 4,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-5.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	},
	{
		"id": 5,
		"name": "BJ41600S",
		"imgUrl": "./assets/images/product-6.png",
		"price": 3490,
		"colors": ["#5F3E2D", "#B75929"]
	}
];

//執行預設頁面載入
init();

//預設頁面載入
function init() {
	axios.get("https://raw.githubusercontent.com/webLayoutTr2002_week4/blob/main/app/json/product-optical.json")
		.then(res => {
			data = res.data.data;
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});
};

//寫入頁面
function renderHTML(ary) {
	let str = "";
	ary.forEach(item => {
		str += `
        <li class="productCard">
          	<img src=${item["imgUrl"]} alt="${item["name"]}">
            <div class="productCard-content">
                <div>
                    <h3>${item["name"]}</h3>
                    <p>${item["price"]}</p>
                </div>
                <div>
					${item["colors"]}
                </div>
            </div>
        </li>`;
		productCard.innerHTML = str;
	});
};