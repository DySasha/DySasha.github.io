function User(id){
    let dsblock = document.getElementById(`myModal`);
     dsblock.style.display = `block`;
     let user = FindUser(id);
    document.getElementById(`modal-body`).innerHTML = `
    <p><b>Ім'я:</b>${user.name}</p>
    <p><b>Місто:</b> ${user.address.city}</p>
    <p><b>Email:</b>${user.email} </p>
    <p><b>Телефон:</b> ${user.phone}</p>
    <p><b>Сайт:</b> ${user.website}</p>
    <p><b>Компанія:</b> ${user.company.name}</p>`;
     


}
function CloseUser(){
    let dsblock = document.getElementById(`myModal`);
    dsblock.style.display = `none`;
}
function NewUser(){
   let users_table = document.getElementById(`users_table`);
   let NewUser =``;
   users.map(function(user,index){
    NewUser += `<tr>
    <td>${index+1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>
        <button onclick="User('${user.id}')" class="btn btn-sm btn-primary">
            Детально
        </button>
    </td>
    <td>
        <button onclick="DeleteUser()" class="btn btn-danger">Видалити</button>
    </td>
</tr>`   
   });
   users_table.innerHTML = NewUser;
}
NewUser();

function FindUser(id){
let filtered = users.filter(function(user){
    return user.id === id
})
   return filtered[0];

}


function DeleteUser(){
    let dluser = document.getElementById(`users_table`);
    dluser.remove
}








