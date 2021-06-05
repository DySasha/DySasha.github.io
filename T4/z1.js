let pytannia1 = prompt(`Ти фанат аніме?`);
let pytannia2 = prompt(`Яке твоє перше аніме?`);
let pytannia3 = confirm(`Дивився атаку Титанів?`);
let pytannia4 = confirm(`Дивися Наруто або Буруто?`);
let resultat = 0;
if(pytannia1 == "Так"){
     resultat = resultat + 1;
}else{}  
if(pytannia2 == "Наруто"){
     resultat = resultat + 1;
}else{}
if(pytannia3 == true){
     resultat = resultat + 1;
}else{}
if(pytannia4 == true){
   resultat = resultat + 1;
}else{}
alert(`Ви вірно відповіли на ${resultat} питань`);