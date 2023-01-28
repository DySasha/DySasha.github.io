// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy8v4szBUoa0mYnhKpYuX73P_3DA5wO0k",
    authDomain: "sl-topic-4.firebaseapp.com",
    projectId: "sl-topic-4",
    storageBucket: "sl-topic-4.appspot.com",
    messagingSenderId: "974549457876",
    appId: "1:974549457876:web:e28e58140b4350cc2f1441",
    measurementId: "G-0ZWE5KVXDW"
  };
  firebase.initializeApp(firebaseConfig);


  var db = firebase.firestore();
  Mass_User = [];
  db.collection("user").get().then( function(res){
       res.forEach( function(doc, index) {
           const doc_user = doc.data();
           const id = doc.id;
           Mass_User.push(doc_user);
           DrawUsers(doc_user,index,id);
       });
   });

function DrawUsers(user, index, id){
   let tbody = document.getElementById('tbody');
   let riadky = `<tr id=${id}>
   <th scope="row">${Mass_User.length}</th>
   <td>${user.name}</td>
   <td>${user.lastname}</td>
   <td>${user.email}</td>
   <td>${user.phone}</td>
   <td class="text-center"><button class="btn btn-warning btn-sm">Редагувати</button></td>
   <td class="text-center"><button class="btn btn-danger btn-sm" onclick=DeleteDoc('${id}')>x</button></td>
 </tr>
 <tr>`;
  tbody.innerHTML += riadky;
}
function DeleteDoc(id){
     db.collection('user').doc(id).delete().then(function(){
        location.reload();
     });

}
//function ShowAddUser (){
    //let add_users = document.getElementById('editTaskModal').classList.add('show');
//}
function AddUser(){
    let add_users = document.getElementById('editTaskModal').classList.add('show');
    let New_User = {
        name: document.getElementById('name').value ,
        lastname: document.getElementById('lastname').value ,
        email: document.getElementById('email').value ,
        phone: document.getElementById('phone').value ,
    }
   db.collection('user').add(New_User).then(function(){
    HideMod()
   location.reload()
   });
   
}

function ShowMod (){
    document.getElementById('editTaskModal').classList.add('show');
}
function HideMod (){
    document.getElementById('editTaskModal').classList.remove('show');
}

