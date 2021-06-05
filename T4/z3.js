let chyslo = prompt(`Введіть число` );
if(chyslo > 0  ){
    alert(`Введене число є додатнім`);
}else if(chyslo < 0  ){
 alert(`Введене число є від'ємним `);
}else if(chyslo == 0){
    alert(`введене число є ні додатнім ні від'ємни`);
}else{
    alert(`Невірно введено число`);
}
if(chyslo % 2 == 0  ){
    alert(`Введене число є  парним`);
}else{
    alert(` Введене число є не парним`);
}