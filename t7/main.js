class Phone{
constructor(name, company, operatingSystem, screen, price, battery, color ){
    this.name=name;
    this.company=company;
    this.operatingSystem=operatingSystem;
    this.screen=screen;
    this.price=price;
    this.battery=battery;
    this.color=color;
}
displayTitle(){
    return `${this.company} ${this.name} ${this.color}`
}
Rostrochka_4_m(){
    let month_additional_cost = this.price*(4/100)
    let month_total = 4;
    let price_total = month_additional_cost * month_total + this.price;
    return `Загальна ціна телефону після 4 місяців ${price_total}` 
}
Rostrochka_6_m(){
    let month_additional_cost = this.price*(5/100)
    let month_total = 12;
    let price_total = month_additional_cost * month_total + this.price;
    return `Загальна ціна телефону після 6 місяців ${price_total}` 
}
Rostrochka_12_m(){
    let month_additional_cost = this.price*(6/100)
    let month_total = 12;
    let price_total = month_additional_cost * month_total + this.price;
    return `Загальна ціна телефону після 12 місяців ${price_total}` 
}
}
let phone_1 = new Phone('Pixel 6a', 'Google', 'Android 12', '6.1', 14000, 4410, 'Chalk');


let all_phones = [phone_1];
function AddNewPhone(){
    let new_phone = new Phone(
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('operating_system').value,
       Number(document.getElementById('screen').value),
       Number(document.getElementById('price').value),
       Number(document.getElementById('battery').value),
        document.getElementById('color').value,
        );
all_phones.push(new_phone)

console.log(all_phones)
DrawPhones()
db.collection('phones').add(new_phone).then(function(){
    console.log('Успішно додано');
})
}
function DrawPhones(){
    let phones_table = document.getElementById('phones_table');
    phones_table.innerHTML = ''

    all_phones.forEach((phone,index)=>{
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope='row'>${index+1}</th>
        <td>${phone.name}</td>
        <td>${phone.company}</td>
        <td>${phone.operatingSystem}</td>
        <td>${phone.screen}</td>
        <td>${phone.price}</td>
        <td>${phone.battery}</td>
        <td>${phone.color}</td>

        <td>
          <button class = "btn btn-sm btn-primary" onclick="alert('${phone.displayTitle()}')">
          Головна інформація
          </button>
        </td>
        <td>
          <button class = "btn btn-sm btn-primary" onclick="alert('${phone.Rostrochka_4_m()}')">
          Рострочка 4 місяці
          </button>
          </td>
          <td>
          <button class = "btn btn-sm btn-primary" onclick="alert('${phone.Rostrochka_6_m()}')">
          Рострочка 6 місяці
          </button>
          </td>
          <td>
          <button class = "btn btn-sm btn-primary" onclick="alert('${phone.Rostrochka_12_m()}')">
          Рострочка 12 місяці
          </button>
          </td>

        
        `;
        phones_table.appendChild(tr);
    })
    
}
DrawPhones()
