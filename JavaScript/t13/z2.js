let keyboard = {
   akcia: true,
   NazwaTowaru: `Клавіатура дротова Logitech G209 Prodigy USB`,
   Vidguki: 204,
   price: 1399,
   photo1:`<img src="z1-2.jpg">`,
}
let produkt = document.getElementById(`products`);
let products2 = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
      ${keyboard.photo1}
</div>

<div class="card_info">
    <div class="name">
    ${keyboard.NazwaTowaru}
    </div>
    
    <div class="reviews">
    ${keyboard.Vidguki}
    </div>
    
    <div class="price">
    ${keyboard.price}&#8372;
    </div>
</div>
</div>
</div>`;

let keyboard1 = {
    NazwaTowaru: `Клавіатура Cougar Vantar`,
    Vidguki: 6,
    price: 1286,
    photo1:`<img src="z1-4.jpg">`,
 }

 let products3 = `<div class="card">
 <div class="header">
 <div class="card_image">
       ${keyboard1.photo1}
 </div>
 
 <div class="card_info">
     <div class="name">
     ${keyboard1.NazwaTowaru}
     </div>
     
     <div class="reviews">
     ${keyboard1.Vidguki}
     </div>
     
     <div class="price">
     ${keyboard1.price}
     </div>
 </div>
 </div>
 </div>`;
 produkt.innerHTML = products2 + products3 ;
 

 let PorivnianniaC1 = 0;
 let PorivnianniaL2 = 0;

if(keyboard.price < keyboard1.price ){
    PorivnianniaL2 =  keyboard1.price - keyboard.price 
}else{
    PorivnianniaC1 = keyboard.price - keyboard1.price 
}
    



/* <img src="img_1.jpg" alt="">*/