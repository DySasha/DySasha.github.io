let chelovek = {
      color: "чорний",
      IQ: 90,
      Gender: "NePidaras",
      photo: `<img src="Cj-1.jpg">`,
      rasa: `афроамериканець`,
      price: 15000,
    }

let Niger = document.getElementById(`Niger`);

let ProdarzNigera = ` ${chelovek.photo} <br>
<h1>Продається ${chelovek.rasa}, колір: ${chelovek.color}</h1>
<h2>Ціна:${chelovek.price}</h2>`;
Niger.innerHTML = ProdarzNigera;

console.log(chelovek);


