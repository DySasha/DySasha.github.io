let name = prompt('Як вас звати?');
let NazvaPredmet = prompt('Яка назва предмету?');
let array = [];
array.length
for(i=0; i < 5; i++){
    array[i] = prompt(`Введіть оцінку`);
}


console.log(`Вітаю ${name}! Кількість з придмету ${NazvaPredmet} рівна ${array.length}. Остання оцінка ${array[array.length-1]} `);