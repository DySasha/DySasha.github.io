let  user ="Іван Степанов ПейВоду";
let  email = 'ivan4ykpro3310@gmail.com';
let password = "Ivan4yknooblo1"
let  PorEmail = prompt(`Ведіть ваш email`);
if(PorEmail == email){
    let  PorPassword = prompt(`Ведіть ваш password`);
    if (PorPassword == password ){
        alert(`Welcome ${user}`);
    }else{
        alert("Пароль не правильний");
    }
}else{
    alert("Користувача з таким email не існує");
}
