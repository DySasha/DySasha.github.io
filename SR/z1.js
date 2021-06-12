let name = prompt(`Введіть своє ім'я`);
alert(`Вітаємо ${name}`)
let  test1 = confirm(`Дарт Вейдер був джедаєм?`);
let  test2 = confirm(`Атака колнів І Епізод?`);
let  test3 = confirm(`Люк син Дарта Вейдера?`);
let  test4 = confirm(`Чи був віданий клонам приказ 66?`);
let  test5 = confirm(`Чи Еникін закохався в Падмеб і одружився на ній й народив зачав дитину?`);
let  test6 = prompt(`Яка була сама цікава подія в ІІ Епізоді?`);
let  test7 = prompt(`Люк вбив Дарта Сідіуса?`);
let  test8 = prompt(`Чи був такий клон в всесвіті Зоряних війн який відчував силу(був Forsuser) і як його звати?`);
let  test9 = prompt(`Самий популярний персонаж(-и) в всесвіті Star Wars?`);
let  test10 = prompt(`В яких епізодах була зірка смерті?`);
let  ZagalnaSumaBallyv = 0;
let  PravelnaKilkistBaliv = 0;
let  NepravelnaKilkistBaliv = 0;
if(test1 == true ){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
     PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test2 == false ){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test3 == true ){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else
NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
if(test4 == true ){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}   
if(test5 == true ){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test6 == `Коли майсетр Йода прилитів на бойових дисантних літаків які мали назву LAAT і рятували орден джедаїв з сенетором Падме Амедалою і падаваном Обівана Кенобі Еникіном Скайвокером і почали розтрілювати дроїдів і нищити кораблі Сеператистів на Джеанозесі` || test6 == `When Master Yoda landed on the LAAT combat drones and rescued the Jedi Order with Senator Padme Amedala and Obanwah Kenobi Evankin Skywalker and began shooting droids and destroying Separatist ships on Giannoses`|| test6 == `Kiedy mistrz Yoda wylądował na dronach bojowych LAAT i uratował Zakon Jedi z senatorem Padme Amedalą i Obanwah Kenobi Evankinem Skywalkerem, zaczął strzelać do droidów i niszczyć statki Separatystów na Giannosach
` || test6 == `Когда майсетр Йода пролить на боевых дисантних самолетов которые назывались LAAT и спасали орден джедаев с сенетором Падме Амедалою и падаваном Обивана Кеноби Еникином Скайуокер и начали розтрилюваты дроидов и уничтожать корабли Сеператистив на Джеанозесе`){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +2;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test7 == `Ні Люк не вбивав Дарта Сідіуса його вбив Лорд Вейдер` || test7 == `Ні` || test7 == `No Luke killed Darth Sidious, he was killed by Lord Vader`|| test7 == `No `|| test7 == `Żaden Luke nie zabił Dartha Sidiousa, został zabity przez Lorda Vader`|| test7 == `Nie`|| test7 == `Нет Люк не убивал Дарта Сидиуса его убил Лорд Вейдер`|| test7 == `Нет`){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +2;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test8 == `Так був його звали Глюк` || test8 == `Yes he was, his name was Gluck`|| test8 == `Tak był miał na imię Gluck` || test8 == `Да был его звали Глюк`){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test9 == `Дарт Вейдер` || test5 == `Люк Скайвокер`|| test9 == `Принцеса Лея` || test9 == `Чубака` || test9 == `Хан Соло` || test9 == `Еникін Скайвокер` || test9 == `Капітан Рекс` || test9 == `Капітан Коуді`|| test9 == `Асока Тано`){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(test10 == `в 4,5,9` || test10 == `в IV,V,XI` || test10 == `in 4,5,9` || test5 == `in IV,V,XI`|| test10 == `w 4,5,9` || test10 == `w IV,V,XI` || test5 == `в 4,5,9` || test10 == `в IV,V,XI`){
    ZagalnaSumaBallyv = ZagalnaSumaBallyv +1;
    PravelnaKilkistBaliv =  PravelnaKilkistBaliv  +1;
}else{
    NepravelnaKilkistBaliv = NepravelnaKilkistBaliv  +1;
}
if(ZagalnaSumaBallyv < 6){
    alert(`Тест провалено. Ваш рузультат - ${ZagalnaSumaBallyv} балів. ${name} ви вірно відповіли ${PravelnaKilkistBaliv} не вірно ${NepravelnaKilkistBaliv} `);
}else if(ZagalnaSumaBallyv <= 9 ){
    alert(`Тест пройдено задовільно. Ваш рузультат - ${ZagalnaSumaBallyv} балів.${name} ви вірно відповіли ${PravelnaKilkistBaliv} не вірно ${NepravelnaKilkistBaliv} `);
}else{
    alert(`Тест пройдено відміно. Ваш рузультат - ${ZagalnaSumaBallyv} балів.${name} ви вірно відповіли ${PravelnaKilkistBaliv} не вірно ${NepravelnaKilkistBaliv} `);
}