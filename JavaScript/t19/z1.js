function VyvodTextu(){
    let text = document.getElementById(`text`).value;
    localStorage.setItem(`TextKey`,text);
    storedText();

}


function storedText(){
    let text = localStorage.getItem(`TextKey`);
    let stored_text = document.getElementById(`stored_text`);

    stored_text.innerText = text;
 
}

function clearLocalStorage(){
    localStorage.clear();
    stored_text.innerText = ``;
}
 
function ChangeText(){
let ChangeText = localStorage.getItem(`TextKey`);
document.getElementById(`text`).value = ChangeText;

} 
stored_text();