function AddCards(){
let cards = document.getElementById(`cards`);
let new_cards = ``;
     phones.map(function(card, index){
      new_cards += `<div class="card">
           <img src="${card.image}" class="card-img-top">
           <div class="card-body">
               <h6 class="card-title">${card.name}</h6>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Виробник:</b> <span>${card.developer}</span></li>
                   <li class="list-group-item"><b>Відгуків:</b> <span>${card.reviews}</span></li>
                   <li class="list-group-item"><b>Ціна:</b> <span>${card.price}₴</span></li>
               </ul>
           </div>
           <div class="card-body price">
							<a href="#" class="card-link" onclick ="addToCart(${index})">В корзину</a>
							<a href="#" class="card-link">Придбати</a>
						  </div>
					</div>`
 
       })
       cards.innerHTML = new_cards;
}
AddCards();
function addToCart(index){
    let cart = getCartProducts();
    cart.push(phones[index]);
   localStorage.setItem(`cart`, JSON.stringify(cart))
   showProdsInCart()
}
function getCartProducts(){
let cart = JSON.parse(localStorage.getItem(`cart`));
     if(cart === null){
       return [];
     }else{
        return cart
     }
}
let x = getCartProducts();
console.log(x);
function  showProdsInCart(){
    let number = getCartProducts(prod_in_card).length;
    document.getElementById(`prod_in_card`).innerText = `${number}`;
    
}
