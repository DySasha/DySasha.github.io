function enter(){ 
    let user = JSON.parse(localStorage.getItem(`users`));
    let Login = document.getElementById(`Login`).value;
    let Password = document.getElementById(`Password`).value;
    if(Login == user.Login || Login == user.Email && Password == user.Password){
         
        alert( `Вітаю! Ви увішли`)
    }else{
     alert( `Невірний логін, або пароль`)
    }
    
    if(Password == user.Password){
        user.loged == true
    }
}