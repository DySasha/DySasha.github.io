let MasyvDni = ['Понеділок','Вівторок','Середа','Четверг','П`ятниця','Субота','Неділля'];
let MasywProbutok = [1200,1140,1400,1150,1400,2500,2950];
let Suma = 0;
let MaxChyslo = MasywProbutok[0];
let MinChyslo = MasywProbutok[0];
console.log(`День-Прибуток`);
for(i=0; i <MasyvDni.length; i++) {
    console.log(`${MasyvDni[i]} - ${MasywProbutok[i]}`);
  Suma = Suma + MasywProbutok[i]
  
}
for(i=0;i < MasywProbutok.length; i++ ){
    if(MaxChyslo < MasywProbutok[i]){
        MaxChyslo = MasywProbutok[i];
    }
    if (MinChyslo > MasywProbutok[i]){
        MinChyslo = MasywProbutok[i];
    }
    }
console.log(`Загальний прибуток за неділю - ${Suma}`);
console.log(`Найбільше зароблено - ${MaxChyslo} в ${MasyvDni[6]} `);
console.log(`Найменше зароблено - ${MinChyslo} в ${MasyvDni[1]}`);

