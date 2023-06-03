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

let users = [];
db.collection("users").get().then( function(res) {

    //Пребираємо кожного отриманого юзера
    res.forEach( function(doc, index) {
        const user = doc.data();
        const id = doc.id;
        users.push(user);
        //Додаємо юзера у фукцію щоб відобратизи його інформацію на html-сторінці
        drawUsers(user, index, id);
    });

    console.log(users);
});

function drawUsers(user, index, id){
let tbody = document.getElementById('tbody');
let trs = `
<tr id=${id}>
<th scope="row">${users.length}</th>
<td>${user.name}</td>
<td>${user.lastname}</td>
<td>${user.email}</td>
<td>${user.phone}</td>
<td class="text-center"><button class="btn btn-warning btn-sm" onclick=showMod('editTaskModal','${id}')>Редагувати</button></td>
<td class="text-center"><button class="btn btn-danger btn-sm" onclick=deleteDoc('${id}')>x</button></td>
</tr>
`;

tbody.innerHTML += trs;
}
function deleteDoc(id){
    db.collection('users').doc(id).delete().then(function(){
        console.log(`видалено`)
        location.reload()
    })
}
function add(){

let new_user = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    password: document.getElementById('phone').value
}
db.collection('user_test').add(new_user).then(function(){
hideMod()
location.reload()
})

}

function showMod(id, docid){
    document.getElementById('save').setAttribute('onclick', `editUser('${docid}')`)
    document.getElementById(id).classList.add('show')
    modalGetUser(docid)
}
function hideMod(id){
    document.getElementById(id).classList.remove('show')
}


function modalGetUser(id) {
    db.collection("users")
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

function editUser(id){
    const user = {
        name: document.getElementById("name_edit").value,
        lastname: document.getElementById("lastname_edit").value,
        email: document.getElementById("email_edit").value,
        phone: document.getElementById("phone_edit").value
    }

    db.collection("users").doc(id).update(user).then( function(){

        console.log("Document is updated!")
        hideMod('editTaskModal')
        location.reload()
    });

}


