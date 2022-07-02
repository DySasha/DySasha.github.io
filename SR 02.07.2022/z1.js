function register(){
let Login = document.getElementById(`Login`).value;
let Email = document.getElementById(`Email`).value;
let Password = document.getElementById(`Password`).value;
let user = {
    Login: Login,
    Email: Email,
    Password: Password,
    loged: false
}
localStorage.setItem(`users`,JSON.stringify(user));
}
//let message = document.getElementById(`message`);
function Perewirka_Logina(){
    if(document.getElementById(`Login`).value.length < 4){
      document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`;
    }else{
        
        document.getElementById(`message`).innerHTML = ``;
    
      }
    }
function Perewirka_Email(){
    if(document.getElementById(`Email`).value.length < 6){
      document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`;
      }else{
       
          document.getElementById(`message`).innerHTML = ``;
      
    }
}
    function Perewirka_Password(){
        if(document.getElementById(`Password`).value.length < 6){
          document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`;
          }else{
          
              document.getElementById(`message`).innerHTML = ``;
          }
        }
 
        





