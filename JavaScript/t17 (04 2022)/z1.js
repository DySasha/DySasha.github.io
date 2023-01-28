let allOrders = [
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
 function showUsers( orders ){
	 let orders_table = document.getElementById(`orders_table`)
	 let DATA = ``;
	 orders.map(function(val, index){
		 DATA +=`
		 <tr>
					<td>${index + 1}</td>
					<td>${val.product}</td>
					<td>${val.type}</td>
					<td>${val.price} грн</td>
				</tr>
		 `
		 
	 })
	 
	 orders_table.innerHTML = DATA;
 }
 function changePricing
 
 
 
 
 
 
   
 showUsers(allOrders);
 
 