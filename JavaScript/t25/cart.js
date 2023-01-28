function getCartProducts(){
    let cart = JSON.parse(localStorage.getItem(`cart`));
         if(cart === null){
           return [];
         }else{
            return cart
         }
    }
    function AddCardsInCart(){
        let cart_table = document.getElementById(`cart_table`);
        let new_cardsincart = ``;
        getCartProducts().map(function(cart, index){
            new_cardsincart += `<tr>
              <th scope="row">${index}</th>
              <td>
                  <img src="${cart.image}
              <td>${cart.name}</td>
              <td>${cart.price}₴</td>
              <td class="text-center"><button class="btn btn-danger">x</button></td>
            </tr>
            <tr>`
         
               })
               cart_table.innerHTML = new_cardsincart;
        
        }
        AddCardsInCart()