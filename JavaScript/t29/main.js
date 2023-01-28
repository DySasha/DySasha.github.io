let DivSlades = document.querySelector(`.slides`);
let Slides_num = document.querySelectorAll(`.slide`);
function SlideLeft(){
    if(GetMargin() >= -((Slides_num.length-2)*500)){
        DivSlades.style.marginLeft = `${GetMargin()-500}px`
    }

 
}
function SlideRight(){
    if(GetMargin() < 0){
        DivSlades.style.marginLeft = `${GetMargin()+500}px`;
    }
    
     
    }
 function GetMargin(){
    return Number(DivSlades.style.marginLeft.replace('px',''))
 }   