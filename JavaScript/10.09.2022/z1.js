function register(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("pass").value;

let user = {
     name: name, 
     pass: password,

}
  localStorage.setIteam( `users`,JSON.stringify(user));   

}