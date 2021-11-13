let ArrayPershyi = [1,2,3,4];
let ArrayDrygyi = [3,8,1,9,10];
let ArrayNew = ArrayPershyi.slice();
for( i=0; i < ArrayDrygyi.length; i++){
    if(ArrayDrygyi.indexOf(ArrayNew[i])== -1){
        ArrayDrygyi.push(ArrayNew[i]);
    }

    
}

console.log(`Перший масив ${ArrayPershyi}`);
console.log(`Другий масив ${ArrayDrygyi}`);
console.log(`Новий масив ${ArrayNew}`);