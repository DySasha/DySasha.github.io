function toggle_item(elem){
  let element = elem.querySelector(`.accordion_body`);

  if(!elem.classList.contains(`isOpen`)){
elem.classList.add(`isOpen`);
  element.style.height = `${element.scrollHeight}px`
  }else{
    elem.classList.remove(`isOpen`);
    element.removeAttribute(`style`)
  }
}
document.querySelectorAll(`.accordion_title`).forEach(function(x){
     x.addEventListener(`clik`, function(){
        let opened = document.querySelector(`.isOpen`);
        toggle_item(this);
        if(opened && opened!==x){
            toggle_item(opened);
        }
     })
})