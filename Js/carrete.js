const btnLeft = document.querySelector(".btn_left"),
    btnRight = document.querySelector(".btn_right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider_section");
    

//FUNCIONALIDAD DE BOTONES
btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

//PARA QUE LAS IMG SE MUEVAN SOLAS
setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
    counter = 0; //PARA LOGRAR UN CARRETE INFINITO
    widthImg = 100 / sliderSection.length; //DIVIDE POR LA CANTIDAD DE IMG

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthImg; //ANCHO DE IMAGEN
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter  = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg; //ANCHO DE IMAGEN
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}


/*OTRA FORMA DE HACERLO
function moveToRight() {
    if (counter >= sliderSection.length-1) {
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
    } else {
        counter++;
        
        operacion = operacion + widthImg; //ANCHO DE IMAGEN
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
}
}


function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter  = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
    } else {
    operacion = operacion - widthImg; //ANCHO DE IMAGEN
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}
}
*/