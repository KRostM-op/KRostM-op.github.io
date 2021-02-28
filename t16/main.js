const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]
function addOrder(){

    const order = {
        client_name: document.getElementById("client_name").value,
        client_phone: document.getElementById("client_phone").value,
        order_name: document.getElementById("order_name").value,
        order_price: document.getElementById("order_price").value,
        order_status: document.getElementById("order_status").checked,
    }
    all_orders.push(order)

    drawTable();
}
function drawTable(){
    const orders_table = document.getElementById('orders_table');
    let table_text = ``;
    

    for (i = 0 ; i < all_orders.length; i++){
      let check = ``
        if(all_orders[i].order_status == true){check = `checked`}
      
        table_text +=
        `
        <tr>
            <td>${i+1}</td>
            <td>${all_orders[i].client_name}</td>
            <td>${all_orders[i].client_phone}</td>
            <td>${all_orders[i].order_name}</td>
            <td class="centered">${all_orders[i].order_price}$</td>
            <td class="centered"><input type="checkbox" ${check}></td>
            <td class="centered"><button class="del_btn" onclick="deleteOrder(${i})">Видалити</button></td>
        </tr>
        `
    }
orders_table.innerHTML = table_text;
}

function deleteOrder(index){
all_orders.splice(index, 1)

}


drawTable();