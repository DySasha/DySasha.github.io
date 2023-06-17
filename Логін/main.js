var provider = new firebase.auth.GoogleAuthProvider();

function Sing_in_by_Google(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
     
      var user = result.user;
      CreateUser(user.uid, '','','')
      localStorage.setItem('login',user.uid)
      setTimeout(function() {
        window.location.href = `SPA.html?id=${user.uid}`
      }, 3000);
    }).catch((error) => {
      var errorCode = error.code;

      var errorMessage = error.message;

      var email = error.email;
    });
}

function Sing_in_by_Mail(){
  
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
   
    var user = userCredential.user;
    console.log(userCredential);
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    CreateUser(user.uid,namei.value,lastnamep.value,agev.value)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `SPA.html?id=${user.uid}`
    }, 3000);
  });
}

function CreateUser(id,namei,lastnamep,agev){
          let user = {
            name:namei,
            lastname:lastnamep,
            age: agev
          }
          db.collection('Reg_TestV').doc(id).set(user).then(res =>{
            console.log('Success!');
          })

}
function CheckUser() {
  let check = localStorage.getItem('login')
  if(check != null){
    window.location.href = `SPA.html?id=${check}`
  }
}
CheckUser()



let stalker = 'поле реєстрації'



function ChangeForm(){
  if(stalker == 'поле реєстрації'
  ){
  Form.innerHTML = ` 
  <label>Пошта</label><br>
  <input type="text" id="email_login"><br><br>
  <label>Пароль</label><br>
  <input type="text" id="password_login"><br><br>
  <button onclick="Sing_in_by_Mail_Real()" >Увійти</button><br><br>
  <button onclick="Sing_in_by_Google()">Вхід за допомогою Google</button><br>
  <button onclick="ChangeForm()">Зарейструвати?</button>
  `
  stalker = 'поле входу'
  }else{
    Form.innerHTML = `
    <label>Ім'я</label><br>
    <input type="text" id="namei"><br><br>
    <label>Прізвище</label><br>
    <input type="text" id="lastnamep"><br><br>
    <label>Вік</label><br>
    <input type="text" id="agev"><br><br>
    <label>Пошта</label><br>
    <input type="text" id="email"><br><br>
    <label>Пароль</label><br>
    <input type="text" id="password"><br><br>
    <button onclick="Sing_in_by_Mail()" >Зарейструватися</button><br><br>
    <button onclick="Sing_in_by_Google()">Вхід за допомогою Google</button><br>
    <button onclick="ChangeForm()">Уже маєте акаунт?</button>
    `
    stalker = 'поле реєстрації'
  }
}












function Sing_in_by_Mail_Real(){
  firebase.auth().signInWithEmailAndPassword(email_login.value, password_login.value)
  .then((userCredential) => {
    
    var user = userCredential.user;
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `SPA.html?id=${user.uid}`
    }, 3000);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
} 



