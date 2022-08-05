/**
 * Practica de POO usando canvas
 * 05/08/2022
 * 
 */

/**
 * CARGAR RECURSOS
 */
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");

/**
 * VALORES INICIALES
 */
var centro = {x:100,y:100};
var radio = 90;
var vel = {x:5,y:2};
animar();
/**
 * DIBUJAR EL MUNDO
 */
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);
    ctx.stroke();
}
/**
 * CALCULAR VALORES
 */
function calcular() {
    centro.x += vel.x;
    centro.y += vel.y;
    if (centro.x +radio>= canvas.width || centro.x <= radio ) {
        vel.x *=-1;
        
    }
   
    if (centro.y +radio>= canvas.height || centro.y <= radio) {
        vel.y *=-1;
       
    }
    
}
/**
 * CICLO DE ANIMACION
 */
 
function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);
}
