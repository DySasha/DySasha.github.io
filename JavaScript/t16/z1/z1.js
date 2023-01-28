let Pocupka = {
    Name: ` ` ,
    Phone: ` ` ,
    NazwaTowar: ` ` ,
    cina: ` ` ,
    check: ` ` ,
}
let all_orders = [
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
		order_name: "Samsung S21 FE",
		order_price: "360",
		order_status: true
	}
]
function addOrder(){
 Pocupka.Name = document.getElementById(`client_name`).value;
 Pocupka.Phone = document.getElementById(`client_phone`).value;
 Pocupka.NazwaTowar = document.getElementById(`order_name`).value;
 Pocupka.Cina = document.getElementById(`order_price`).value;
 Pocupka.Check = document.getElementById(`order_status`).value;
 console.log(Pocupka);
}
function drawOrder(){
    
}
let OrderTable = document.getElementById(`orders_table`);
let Data = ` `;
for(i=0; i<all_orders.length; i++){
 Data += `<tr>
<td>1</td>
<td>Дмитро Іванов</td>
<td>+3809781240</td>
<td>Iphone 12</td>
<td class="centered">700$</td>
<td class="centered"><input type="checkbox" checked></td>
<td class="centered"><button class="del_btn">Видалити</button></td>
</tr>`;
}
OrderTable.innerHTML = Data;