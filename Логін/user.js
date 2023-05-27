let user_id = new URL(window.location.href).searchParams.get('id');

function vyvid(id){
     db.collection('Reg_TestV').doc(id).get().then(res =>{
        console.log(res)
     })
}
vyvid(user_id)