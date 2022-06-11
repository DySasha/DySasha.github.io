let users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];
function  showError(text) {

     let message = document.getElementById(`message`);
     let Pomylka_text =`<div class="alert alert-danger col-6">${text}</div>`;

     message.innerHTML = Pomylka_text ; 
     setTimeout(function(){
          message.innerHTML = `` ; 
     }, 3000)
}
showError(`Користувач з таким іменем зареєстрований`)

 function showSuccess(text) {
    let messageUspix = document.getElementById(`message`);
    let Uspix_text =`<div class="alert alert-success col-6">${text}</div>`;

    messageUspix.innerHTML = Uspix_text; 
    setTimeout(function(){
        messageUspix.innerHTML = ``;
    }, 3000)
}
showSuccess(`Успішна реєстрація!`)
function checkName(){
    let UserName = document.getElementById(`name`).value;
    let arr2 = users.filter(function(user){
       return user.name.toLowerCase() == UserName.toLowerCase()       
      
    });
    if(arr2.length > 0){
     showError(`Користувач з таким іменем зареєстрований`)
    }
}
function checkEmail(){
    let UserEmail = document.getElementById(`email`).value;
    let arr3 = users.filter(function(user){
       return user.email.toLowerCase() == UserEmail.toLowerCase()       
      
    });
    if(arr3.length > 0){
     showError(`Користувач з таким email зареєстрований`)
    }
}
function  register(){
    if( name > 3 && email > 6 &&  password > 6 ){
        showError(`Ім'я не підходть`)
       }else{
        showSuccess(`Ви зареєстрованні!`) 
       }
       
}