

class Admin{
    constructor(){
    }
static Vsi_Orders(){
   document.getElementById('tbody').innerHTML = ''
    db.collection("Orders-t8").get().then(res =>{
        let index = 1;
        res.forEach( doc => { let ord = {...doc.data(),id: doc.id}

        this.DrawOrders(ord, index)
        index++;
        
        });
    })
}

static DrawOrders( order, index){
 let tr = document.createElement('tr');

   let th_number = document.createElement('th'); 
   

    let th_name = document.createElement('th'); 
    let td_price = document.createElement('td');
    let td_email = document.createElement('td');
    let td_count = document.createElement('td');
    let td_total_price = document.createElement('td');
    let td_delivery = document.createElement('td');
    let td_submitted = document.createElement('td');
    let th_button = document.createElement('th'); 
    let th_a = document.createElement('th'); 

    th_number.innerText = index;
    th_name.innerText = order.product_name;
    td_price.innerText = order.product_price;
    td_email.innerText = order.user_email;
    td_delivery.innerText = order.delivery;
    td_count.innerText = order.count;
    td_total_price.innerText = order.total_price;
    td_submitted.innerText = order.submitted;
    th_number.setAttribute('type', 'scope')

    let button = document.createElement('button');
    let a = document.createElement('a');

    a.href = `mailto${order.user_email}?subject=Order%20submited&body=Test%20body.%0AWith%20many%20text.`
    a.classList.add('btn');
    a.classList.add('btn-info');
    a.innerText = 'Link';

    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add('btn-info');
    button.innerText = 'Submitted';

    button.addEventListener('click', function(){
        Admin.sub_order(order.id)
    })

    th_button.appendChild(button)
    th_a.appendChild(a)

    tr.appendChild(th_number)
    tr.appendChild(th_name)
    tr.appendChild(td_price)
    tr.appendChild(td_email)
    tr.appendChild(td_delivery)
    tr.appendChild(td_count)
    tr.appendChild(td_total_price)
    tr.appendChild(td_submitted)
    tr.appendChild(th_button)
    tr.appendChild(th_a)

    document.getElementById('tbody').appendChild(tr);

}

static sub_order(order_id){
  db.collection("Orders-t8").doc(order_id).update({submitted:true}).then(function(res){
      console.log('Orders completed')
      Admin.Vsi_Orders();
  })
}

}

Admin.Vsi_Orders();