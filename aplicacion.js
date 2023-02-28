//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let linux = document.getElementById("linux");
crearBarra(linux);
let windows = document.getElementById("windows");
crearBarra(windows);
let word = document.getElementById("word");
crearBarra(word);
let ecxel = document.getElementById("ecxel");
crearBarra(ecxel);
let power = document.getElementById("power");
crearBarra(power);
let python = document.getElementById("python");
crearBarra(python);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalLinux = setInterval(function(){
            pintarBarra(linux, 12, 0, intervalLinux);
        },100);
        const intervalWindows = setInterval(function(){
            pintarBarra(windows, 16, 1, intervalWindows);
        },100);
        const intervalWord = setInterval(function(){
            pintarBarra(word, 14, 2, intervalWord);
        },100);
        const intervalEcxel = setInterval(function(){
            pintarBarra(ecxel, 12, 3, intervalEcxel);
        },100);
        const intervalPower = setInterval(function(){
            pintarBarra(power, 15, 4, intervalPower);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 7, 5, intervalPython);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#020c94";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}