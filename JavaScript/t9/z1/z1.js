let Masyw = [7,9,34,57,8,990];
let Max = Masyw[0];
let Min = Masyw[0];
for(i=0;i < Masyw.length; i++ ){
if(Max < Masyw[i]){
    Max = Masyw[i];
}
if (Min > Masyw[i]){
    Min = Masyw[i];
}
}




console.log(Masyw);
console.log(`Max число ${Max}`);
console.log(`Max число ${Min}`);





/*for(i=0;i > Masyw.length; i++ ){
    if(Min > Masyw[i]){
        Min = Masyw[i];
    }
    }*/