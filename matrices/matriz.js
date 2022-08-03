/**
 * Practica de JavaScript utilizando matrices 
 */
//Variables globales ++++++++++++++++++++++
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones').value;
    borrarMatriz();
    switch (opcion) {
        case '1':
            mostrarMatriz();
            document.body.style.backgroundColor = "#E6E6FA";
            break;
        case '2':
            mostrarDiagonalPri();
            break;
        case '3':
            mostrarDiagonalInversa();
            break;
        case '4':
            mostrarSuperiorDerecho();
            break;
        case '5':
            mostrarSuperiorIzq();
            break;
        case '6':
            mostrarInferiorIzquierdo();
            break;
        case '7':
            mostrarInferiorDerecho();
            break;
        case '8':
            generarMatriz();
            //mostrarMatriz();
            console.log(matriz);
            break;

        default:
            break;
    }

}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function borrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = '';
        }
    }
}
function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100);

        }
    }
}
/**Muestra los numeros de la matriz en la caja */
function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f' + f + 'c' + c;
            console.log(ident);
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarDiagonalPri() {
    for (let f = 0; f < matriz.length; f++) {
        let ident = 'd-f' + f + 'c' + f;
        let numero = matriz[f][f];
        document.getElementById(ident).innerText = numero
    }

}

function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let = c = matriz.length - 1 - f;
        let ident = 'd-f' + f + 'c' + c;
        let numero = matriz[f][c];
        document.getElementById(ident).innerText = numero;
    }
}



function mostrarSuperiorIzq() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length-f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            let numero = matriz[f][c];
            document.getElementById(ident).innerText = numero;
        }
    }
}
function mostrarSuperiorDerecho() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            let numero = matriz[f][c];
            document.getElementById(ident).innerText = numero;
        }
    }
}
function mostrarInferiorIzquierdo() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <= f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            let numero = matriz[f][c];
            document.getElementById(ident).innerText = numero;
        }
    }
}
function mostrarInferiorDerecho() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 4-f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            let numero = matriz[f][c];
            document.getElementById(ident).innerText = numero;
        }
    }
}
/**
 * Genera un numero entero aleatorio
 * entre min y max
 * @param {int} min valor minimo a generar
 * @param {int} max valor maximo a generar
 */
function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;
}


generarMatriz();