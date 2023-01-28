let SpysokList = document.getElementById("SpysokList");

let ImyaUchnia = ` `;

for(i = 0; i < 3; i++){
    ImyaUchnia += `<li>${ImyaUchnia}</li>`;
    let ImyaNN = prompt(`Введіть вваше ім'я будь ласка`);
}
SpysokList.innerHTML = ImyaUchnia;
console.log(SpysokList);



/*let ImyaUchnia = `<li>Дияк Олександр</li>`;





ImyaUchnia += `<li>${ImyaUchnia}</li>`;
SpysokList.innerHTML = ImyaUchnia;*/