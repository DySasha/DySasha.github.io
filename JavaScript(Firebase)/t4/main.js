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
   <td class="text-center"><button class="btn btn-warning btn-sm" onclick="ShowMod('editTaskModal','${id}')">Редагувати</button></td>
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
    let add_users = document.getElementById('AddTaskModal').classList.add('show');
    let New_User = {
        name: document.getElementById('name').value ,
        lastname: document.getElementById('lastname').value ,
        email: document.getElementById('email').value ,
        phone: document.getElementById('phone').value 
    }
   db.collection('user').add(New_User).then(function(){
    HideMod()
   location.reload()
   });
   
}

function ShowMod (id, docid){
    document.getElementById('Save').setAttribute('onclick', `EditUser('${docid}')`);
    document.getElementById(id).classList.add('show');
    modalGetUser(docid)

}
function HideMod (id){
    document.getElementById(id).classList.remove('show');
}

function EditUser(id){
    let user = {
        name: document.getElementById('name_edit').value ,
        lastname: document.getElementById('lastname_edit').value ,
        email: document.getElementById('email_edit').value ,
        phone: document.getElementById('phone_edit').value 
    }
    db.collection("user").doc(id).update(user).then( function(){
        HideMod('editTaskModal')
        location.reload()
    });   
    
}
function modalGetUser(id){
    db.collection("user")
.doc(id)
.get()
.then(function(res){
    const data = res.data();
    console.log(data);
    document.getElementById("name_edit").value = data.name;
    document.getElementById("lastname_edit").value = data.lastname;
    document.getElementById("email_edit").value = data.email;
    document.getElementById("phone_edit").value = data.phone;

});
}

