function zagol(){
    let test = document.getElementById(`test`).value;
    let zagolowky = document.getElementById(`zagolowky`);
    let zag = "";
    for(i=1; i < test; i++){
        showyche += `<h1 class ="SZ">Заголовки${i+1}</h1>`;
 }
 zagolowky.innerHTML = zag;
}
function zminaColor(){
     let color = document.getElementById(`color`).value;
     let zagolowki = document.getElementsByClassName(`SZ`)
     Array.from(zagolowky).map(function(x){
        x.style.color = color;
     });
  console.log(zagolowky);
}