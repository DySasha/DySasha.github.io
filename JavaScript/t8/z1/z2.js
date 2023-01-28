let InternetMagazyn = true;
let KincevaCina = 0;
let KilkistTowariv  = 0;


while(InternetMagazyn == true){
     InternetMagazyn = confirm(`Чи ви хочете щось придбати в нашому магазині?`);
     KilkistTowariv++;
     CinaTovara = Number(prompt(`Введіть ціну тувару`));
     KincevaCina = KincevaCina + CinaTovara;
}   
console.log(`Ви придбали ${KilkistTowariv} товарів на загальну вартість - ${KincevaCina} грн. Згальна середня сума - ${CinaTovara/KilkistTowariv}`)
/*prompt(`Введіть суму`)
confirm(`Чи ви хочете щось придбати в нашому магазині?`)
MasyvInternetMagazyn.push(confirm(`Чи ви хочете щось придбати в нашому магазині?`));   */