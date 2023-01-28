function uwijty(){ 
let user = JSON.parse(localStorage.getItem(`users`));
let Login = document.getElementById(`Login`).value;
let Password = document.getElementById(`Password`).value;
if(Login == user.Login || Login == user.Email && Password == user.Password){
     alert(`Вітаю! Ви увішли`);
}else{
  alert(`Невірний логін, або пароль`);
}
}

















//function uwijty(){ 
    //let Login = document.getElementById(`Login`).value;
    //let Password = document.getElementById(`Password`).value;
    //let user = {
       // Login: Login,
       // Password: Password,
    
   // }
    //localStorage.setItem(`users`,JSON.stringify(user));
   // }
     //function Perewirka_Logina(){
     // if(document.getElementById(`Login`).value.length < 4){
       // document.getElementById(`errorL`).innerHTML = `Логін не підходить`;
       // setTimeout(function(){
            //document.getElementById(`errorL`).innerHTML = ``;
        //},1000)
    
        //}
     // }
     
        //function Perewirka_Password(){
          //  if(document.getElementById(`Password`).value.length < 6){
             // document.getElementById(`errorP`).innerHTML = `Пароль не підходить`;
              
          
             // }else{
              
                 // document.getElementById(`errorP`).innerHTML = ``;
              //}
           // }
     
          
      