let golovnuy = document.getElementById(`golovnuy`);
let mashyna1 = {
    image: `<img src="SC1.jpg">`,
     Name: `Chevrolet Camaro 5 Gen`,
     price:22.462,
     color: `жовтий`,
     probig: 0
}
let mashyna2 = {
    image: `<img src="М1.jpg">`,
     Name: `москвич 412`,
     price:800,
     color: `помаранчевий`,
     probig: 15
}
let mashyna3 = {
    image: `<img src="T1.jpeg">`,
     Name: `Model S 2015`,
     price:42,
     color: `червоний`,
     probig: 0
}
let mashyna4 = {
    image: `<img src="D1.jpg">`,
     Name: `Dodge Challenger`,
     price:31,
     color: `чорний`,
     probig: 5
}

let TablCars = ` <div class="pershuy">
${mashyna1.image}
<h3 align="center">${mashyna1.Name}</h3> 
<h4>Ціна: ${mashyna1.price}$</h4>
<h4>Колір: ${mashyna1.color}</h4>
<h4>Пробіг: ${mashyna1.probig} тис. км</h4>
</div>`;
 TablCars += ` <div class="pershuy">
${mashyna2.image}
<h3 align="center">${mashyna1.Name}</h3> 
<h4>Ціна: ${mashyna2.price}$</h4>
<h4>Колір: ${mashyna2.color}</h4>
<h4>Пробіг: ${mashyna3.probig} тис. км</h4>
</div>`;
 TablCars += ` <div class="pershuy">
${mashyna3.image}
<h3 align="center">${mashyna3.Name}</h3> 
<h4>Ціна: ${mashyna3.price}$</h4>
<h4>Колір: ${mashyna3.color}</h4>
<h4>Пробіг: ${mashyna3.probig} тис. км</h4>
</div>`;
 TablCars += ` <div class="pershuy">
${mashyna4.image}
<h3 align="center">${mashyna4.Name}</h3>
<h4>Ціна: ${mashyna4.price}$</h4>
<h4>Колір: ${mashyna4.color}</h4>
<h4>Пробіг: ${mashyna4.probig} тис. км</h4>
</div>`;




golovnuy.innerHTML = TablCars;