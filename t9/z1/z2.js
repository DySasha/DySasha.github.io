let CopyArray = [9,9,8,8,7,3,4,7,3,4];
let WithCopyArray = [];

for(i=0; i < CopyArray.length; i++){
  if(WithCopyArray.indexOf(CopyArray[i])== -1){
    WithCopyArray.push(CopyArray[i]);
  }
}

console.log(`Новий масив без повторень ${CopyArray}`);
console.log(`Новий масив без повторень ${WithCopyArray}`);