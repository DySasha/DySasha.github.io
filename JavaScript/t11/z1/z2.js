let NazwaMisiacia = document.getElementById(`MOUNTH`);
let dni = ` `;
let zapytannya = prompt(`Введіть будь-який місяць `);
for(i = 1; i < 32; i++){
    
    if(i % 7 == 0 || (i+1) % 7 == 0){
        dni += `<div class="Days weekend"><br>${i}<br><br>${zapytannya}<br></div>`;
    }else{
        dni += `<div class="Days"><br>${i}<br><br>${zapytannya}<br></div>`;
    }    
}

NazwaMisiacia.innerHTML = dni;

let NazwaKalendar = document.getElementById(`Kalendar`);
NazwaKalendar.innerHTML = zapytannya; 



Spysok += `<tr>
       <td>$[i]</td> 
       <td>$[users]</td>
        <td>input type = "checkbox"</td> 
        </tr>`
		
		
		
		let Tablycia1 = ` `;
    Tablycia1 += `<tr>
    <th>$[Nomer]</th> 
    <th>$[Korystowachi]
    </th> <th>$[WidLyst]
    </th>`
	
	let Nomer = `№ `;
let Korystowachi = `Користовачі `;
let WidLyst = `Відправити лист`;


       <th>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
</th>