const allOrders = [
	{
		product: "Монітор Sony 8764d",
		price: 2430,
		type: 'монітор'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1350,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 3240,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1080,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 2705c",
		price: 1215,
		type: 'клавіатура'
	},
	{
		product: "Клавіатура 1905b",
		price: 1242,
		type: 'клавіатура'
	},
	{
		product: "Монітор Sony 8764d",
		price: 2160,
		type: 'монітор'
	},
	{
		product: "Монітор Samsung 734s",
		price: 4860,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 091g",
		price: 810,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1566,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 2700,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1242,
		type: 'роутер'
	},
];

const orders_table = document.getElementById("orders_table");

function showOrders(arr,curr){
    const orders_table = document.getElementById("orders_table")


    let orders = ``;

    arr.map(function(el, index){
        orders +=
        `
        <tr>
        <td>${index + 1}</td>
        <td>${el.product}</td>
        <td>${el.type}</td>
        <td>${el.price} ${curr}</td>
    </tr>
        `

    })

    orders_table.innerHTML = orders;
}
let currency = "UAH"
function changePricing(curr){
    if(curr == "USD" && currency == "UAH"){
        allOrders.map(function(el) {
            el.price = el.price / 27


        })

        showOrders(allOrders, 'USD')
        currency = "USD"
        const sum = allOrders.reduce(function(acc,el){
            return acc + el.price
        },0);
        result.innerText= `Загалом витрачено - ${sum} ${currency}`
    }



    if(curr == "UAH" && currency == "USD"){

        allOrders.map(function(el) {
            el.price = el.price * 27
        })
        showOrders(allOrders, 'UAH')
        currency = "UAH"
        const sum = allOrders.reduce(function(acc,el){
            return acc + el.price
        },0);
        result.innerText= `Загалом витрачено - ${sum} ${currency}`
    }
    }

function filterOrders(){
    const type_filter = document.getElementById('type_filter').value

    const arr_2 = allOrders.filter(function(el){
    return el.type == type_filter.toLowerCase()


    })
    showOrders(arr_2, currency);
}




showOrders(allOrders, 'UAH');

const result = document.getElementById('result')

const sum = allOrders.reduce(function(acc,el){
    return acc + el.price
},0);
result.innerText= `Загалом витрачено - ${sum} ${currency}`

