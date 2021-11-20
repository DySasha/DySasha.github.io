let imya = document.getElementById("ProstoTolyk");
let name = prompt(`Як вас звати?`);
imya.innerHTML =`<a href="">${name}</a>`;

let IdEmeil = document.getElementById("Pryvitannya");
let email = prompt(`Введіть будь-ласка вашу елекрону скриньку`);
IdEmeil.innerHTML =`Вітаю ${name}! На вашу електрону скриньку <br> ${email} відправлино лист з привітанням `;


let password = prompt(`Увійдіть ваш пароль`); 
if(password == `111`){
    let Idpassword = document.getElementById("Login");
IdLogin.innerHTML =`Ви увішли в свій акаунт `;
     
}


console.log(imya);
console.log(IdEmeil);








/* `Вітаю ${name}! На вашу електрону скриньку ${email} відправлино лист з привітанням`   ${IdEmeil} 
let IdEmeil = document.getElementById("Pryvitannya");
let email = prompt(`Введіть будь-ласка вашу елекрону скриньку`);
IdEmeil.innerHTML =`Вітаю ${name}! На вашу електрону скриньку <br> ${email} відправлино лист з привітанням `;



let Login = true;
if(Login == true){
    let IdLogin = document.getElementById("Login");
    let Login = prompt(`Увійдіть у свій акаунт`); 
IdLogin.innerHTML =`Ви увішли в свій акаунт `;
     
}else if(login == false){
    IdLogin.innerHTML ='Увійдіть в всвій акаунт або створіть новий, будь ласка';
}*/

