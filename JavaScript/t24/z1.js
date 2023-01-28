function AddGoods(array_cards){
let cards = document.getElementById(`cards`);
let new_cards = ``;
       
    array_cards.map(function(card){
      let action = ``;
           if(card.action == true){
                action = `<div class="action">Акція</div>`
           }     
     
     new_cards += `<div class="card">
						${action}
						<img src="${card.image}" class="card-img-top">
						<div class="card-body">
							<h6 class="card-title">${card.name} Lavender</h6>
							<ul class="list-group list-group-flush">
								<li class="list-group-item"><b>Виробник:</b> <span>${card.developer}</span></li>
								<li class="list-group-item"><b>Відгуків:</b> <span>${card.reviews}</span></li>
								<li class="list-group-item"><b>Ціна:</b> <span>${card.price}₴</span></li>
							</ul>
						</div>
						<div class="card-body price">
							<a href="#" class="card-link">В корзину</a>
							<a href="#" class="card-link">Придбати</a>
						  </div>
					</div> `
               
      })
  
  cards.innerHTML = new_cards;
}
AddGoods(phones)

function FindDevelopers(){
let developer = [];
phones.map(function(phone){
    if(developer.indexOf(phone.developer) === -1){
        developer.push(phone.developer);
  }


})
let datalistOptions = document.getElementById(`datalistOptions`);
let option = ``;

developer.map(function(dev){
 option += `<option value=${dev}>`


})
datalistOptions.innerHTML = option;
}
FindDevelopers();

function saveFilter(){
let ObFilter = {
name:document.getElementById(`name`).value,
developer:document.getElementById(`developer`).value,
min_price:document.getElementById(`min_price`).value,
max_price:document.getElementById(`max_price`).value,
order:document.getElementById(`order`).value,
}
localStorage.setItem("ObFilter",JSON.stringify(ObFilter))

   ReDrawCards(ObFilter)
}
function ReDrawCards(ObFilter){
   let new_Phones = phones.slice();
   if(ObFilter.name.length > 0){
    new_Phones = new_Phones.filter(function(phone){
        return phone.name.includes(ObFilter.name)
    })
   }

   if(ObFilter.developer.length > 0){
    new_Phones = new_Phones.filter(function(phone){
        return phone.developer === ObFilter.developer
   })
  }

  if(ObFilter.min_price.length > 0){
    new_Phones = new_Phones.filter(function(phone){
        return phone.price >= ObFilter.min_price
   })
  }
  if(ObFilter.max_price.length > 0){
    new_Phones = new_Phones.filter(function(phone){
        return phone.price <= ObFilter.max_price
   })
  }

  if(ObFilter.order.length > 0 && ObFilter.order === "price"){
    new_Phones = new_Phones.sort(function(a, b){
        return b.price - a.price
   })
  }

  if(ObFilter.order.length > 0 && ObFilter.order === "grprice"){
    new_Phones = new_Phones.sort(function(a, b){
        return a.price - b.price
   })
  }

  if(ObFilter.order.length > 0 && ObFilter.order === "reviews"){
    new_Phones = new_Phones.sort(function(a, b){
        return b.reviews - a.reviews
   })
  }
   AddGoods(new_Phones)
}

let object_fill = JSON.parse(localStorage.getItem("ObFilter"));
if(object_fill){
  ReDrawCards(object_fill)
}else{
  AddGoods(new_Phones)
}





