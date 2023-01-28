function register(){ 
let Login = document.getElementById(`Login`).value;
let Email = document.getElementById(`Email`).value;
let Password = document.getElementById(`Password`).value;
let user = {
    Login: Login,
    Email: Email,
    Password: Password,

}
localStorage.setItem(`users`,JSON.stringify(user));
}
 function Perewirka_Logina(){
  if(document.getElementById(`Login`).value.length < 4){
    document.getElementById(`errorL`).innerHTML = `Логін не підходить`;
    setTimeout(function(){
        document.getElementById(`errorL`).innerHTML = ``;
    },1000)

    }
  }
  function Perewirka_Email(){
    if(document.getElementById(`Email`).value.length < 6){
      document.getElementById(`errorE`).innerHTML = `Пошта не підходить`;
      
  
      }else{
       
          document.getElementById(`errorE`).innerHTML = ``;
      
    }
}
    function Perewirka_Password(){
        if(document.getElementById(`Password`).value.length < 6){
          document.getElementById(`errorP`).innerHTML = `Пароль не підходить`;
          
      
          }else{
          
              document.getElementById(`errorP`).innerHTML = ``;
          }
        }
 
      
  


//if(Login.length > 4  && Email.length > 6 && Password.length > 6 ){
       //alert(`Операція прошла успішно`);
//}else{
    //alert(`Перевірьте умови`) 
//}