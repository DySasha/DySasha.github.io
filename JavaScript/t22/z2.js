function ChangeCard(){
let cards_num = document.getElementById(`cards_num`).value;
let cards = document.getElementById(`cards`);
let kilkistCartok = ``;
  for(i=1; i < cards_num; i++ ){
    kilkistCartok += `<div class="card">
    <div class="card-body my-2">
      <h5 class="card-title">Card ${i}</h5>
    </div>
  </div>`;
    
  }
  cards.innerHTML = kilkistCartok; 
}
function ChangeColor(){ 
let cards_text = document.getElementById(`cards_text`).value;
let cards = document.getElementsByClassName(`card`);
Array.from(cards).map(function(k){
    k.style.color = cards_text;


})
}
function ChangeBackColor(){ 
    let cards_fon = document.getElementById(`cards_fon`).value;
    let cards = document.getElementsByClassName(`card`);
    Array.from(cards).map(function(y){
        y.style.background = cards_fon;
    
    
    })
    }
    function Clean(){
        cards.clean(`col`)
        

    }
    function Delete(){
      cards.remove(`cards`)


    }




