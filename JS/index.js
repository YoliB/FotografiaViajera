//Aqui empieza el código del modal del formulario
function modalFormulario(){
    document.getElementById("modalFormulario").style.display="block";
    document.documentElement.style.overflow="hidden";

    const nombre= document.getElementById("formNombre").value;
    const apellido= document.getElementById("formApellido").value;
    const email= document.getElementById("formMail").value;
    const texto= document.getElementById("formTexto").value;
    
    const mensaje= "Estimad@ " + nombre + " " + apellido + " , le confirmamos que hemos recibido correctamente la siguiente información: " + texto + " . Recibirá una copia en el email " + email + ".";

    document.getElementById("mensajeFormulario").innerHTML = mensaje;
}
//Función para cerrar el modal y se eliminen los datos almacenados
function cierre(){
    document.getElementById("modalFormulario").style.display="none";
    document.documentElement.style.overflow="auto";
    document.getElementById("formNombre").value="";
    document.getElementById("formApellido").value="";
    document.getElementById("formMail").value="";
    document.getElementById("formAsunto").value="";
    document.getElementById("formTexto").value="";
}
//Código para controlar ocultar y mostrar el menú según la dirección del scroll
var posInicialScroll = document.documentElement.scrollTop;
window.onscroll = function(){
    ocultarMostarMenu()};

function ocultarMostarMenu(){

    var posActualScroll = document.documentElement.scrollTop;

    if(posInicialScroll>posActualScroll){
        document.getElementById("navBar").style.display="block";
    }

    else{
        document.getElementById("navBar").style.display="none";
    }

    posInicialScroll = posActualScroll;
}

//Código carrusel autómatico
var bgcounter=0;
function slideHeroImage(){

    var listaImgBg= [
       " url('Galería/Encabezado.jpg')",
       " url('Galería/sunset.jpg')",
       " url('Galería/conoceme.jpg')"
    ];

    bgcounter++;

    if(bgcounter== listaImgBg.length){
        bgcounter = 0;
    }

    document.getElementById("cabecera").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))," + listaImgBg[bgcounter];
}

var counterNext=0;
var counterMain=0;

function slideshowAnimado(){
    var listaImBgAnim = document.getElementsByClassName("fondosHero");
    counterNext++;
    counterMain = counterNext-1;

    if(counterNext == listaImBgAnim.length){
        counterNext = 0;
    }

    if(counterMain<0){
        counterMain = listaImBgAnim.length-1;
    }

    for(var i=0; i<listaImBgAnim.length; i++){
        listaImBgAnim[i].classList.remove("nextSlide");
        listaImBgAnim[i].classList.remove("mainSlide");
        listaImBgAnim[i].classList.remove("hiddenSlide");

        if(i==counterNext){
            listaImBgAnim[i].classList.add("nextSlide");
        }

        else if(i==counterMain){
            listaImBgAnim[i].classList.add("mainSlide");
        }

        else {
            listaImBgAnim[i].classList.add("hiddenSlide");
        }
    }

}
//Código para controlar el menú de pestañas
function seleccionarPestanha(containerVista, tabSeleccionada){
    var listaPestanhas = document.getElementsByClassName("containerPais");

    for(var i=0; i<listaPestanhas.length; i++){
        listaPestanhas[i].style.display="none";
    }
    document.getElementById(containerVista).style.display="block";

    var tabLinks = document.getElementsByClassName("continente");
    for(var i=0; i<tabLinks.length;i++){
        tabLinks[i].classList.remove("pestanhaActiva");
    }

    document.getElementById(tabSeleccionada).classList.add("pestanhaActiva");

    var countries = document.getElementsByClassName("pais");
    for(var i=0; i<countries.length; i++){
        countries[i].classList.remove("paisAnimado");
    }

    var countriesC = document.getElementById(containerVista).children;
    for(var i=0; i<countriesC.length; i++){
        countriesC[i].classList.add("paisAnimado");
    }
}
//Código  para gestionar el lightbox
var listaRutaImagen = [];
var numeroImg = 0;

function readyLb(){
    var listaImagen = document.getElementsByClassName("imagen");

    for(var i=0; i <listaImagen.length; i++){
        listaRutaImagen.push(listaImagen[i].src);
    }

    for(var i=0; i<listaImagen.length; i++){
        listaImagen[i].addEventListener('click', openLb);
    }

    function openLb(event){
        var imgSeleccionada = event.currentTarget.src; 
       
        numeroImg = listaRutaImagen.indexOf(imgSeleccionada);
        document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImagen[numeroImg] + ">"; 
        document.getElementById("modalGaleria").style.display="block";
        document.documentElement.style.overflow="hidden";    
        closeLb();
    }

    function closeLb(event){
        window.addEventListener("click", function(event){

            if(!event.target.matches(".imgLB") && !event.target.matches(".imagen") && !event.target.matches(".lbButton") && !event.target.matches(".fa"))
            document.getElementById("modalGaleria").style.display="none";
            document.documentElement.style.overflow="auto";    
         })
    }
}

function nextImg(){
    numeroImg++;

    if(numeroImg == listaRutaImagen.length){
        numeroImg= 0 ;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImagen[numeroImg] + ">"; 
}

function prevImg(){
    numeroImg--;

    if(numeroImg < 0 ){
        numeroImg= listaRutaImagen.length -1 ;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImagen[numeroImg] + ">"; 
}

    