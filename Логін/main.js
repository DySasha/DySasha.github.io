var provider = new firebase.auth.GoogleAuthProvider();

function Sing_in_by_Google(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
     
      var user = result.user;
      CreateUser(user.uid)
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
    window.location.href = `user.html?id=${user.uid}`
  });
}

function CreateUser(id,namei,lastnamep,agev){
          let user = {
            name:namei,
            lastname:lastnamep,
            age: agev
          }
          db.collection('Reg_TestV').doc(id).set(user).then(res =>{
            console.log('Success!')
          })

}