
let btnP1 = document.getElementById("btnP1");
let btnP2 = document.getElementById("btnP2");
let btnP3 = document.getElementById("btnP3");
let btnP4 = document.getElementById("btnP4");
let btnP5 = document.getElementById("btnP5");
let btnP6 = document.getElementById("btnP6");
let btnP7 = document.getElementById("btnP7");
let btnP8 = document.getElementById("btnP8");
let btnP9 = document.getElementById("btnP9");
let btnP10 = document.getElementById("btnP10");
let btnP11 = document.getElementById("btnP11");
let btnP12 = document.getElementById("btnP12");





// Variables
 let prod1 = {"nombre": "MANZANA", "precio" : 7000 };
 let prod2 = {"nombre": "BANANO", "precio" : 4000 };
 let prod3 = {"nombre": "FRESA", "precio" : 3000 };

 let prod4 = {"nombre": "ROSA", "precio" : 2000 };
 let prod5 = {"nombre": "GIRASOL", "precio" : 2500 };
 let prod6 = {"nombre": "TRIGO", "precio" : 1000 };

 let prod7 = {"nombre": "PERRO", "precio" : 700000 };
 let prod8 = {"nombre": "POLLO", "precio" : 3000};
 let prod9 = {"nombre": "CERDO", "precio" : 90000 };

 let prod10 = {"nombre": "FERTILIZANTE", "precio" : 25000 };
 let prod11 = {"nombre": "KIT HERRAMIENTAS", "precio" : 210000 };
 let prod12 = {"nombre": "MACETA", "precio" : 50000 };

this.productos =[ prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12];

//Funciones 
const P1 = () => {
    localStorage.getItem(productos.prod1);
    console.log(productos.prod1);
};




// EVENTOS 
btnP1.onclick = function () {
    P1();
};
btnP2.onclick = function () {
    P2();
};
btnP3.onclick = function () {
    P3();
};
btnP4.onclick = function () {
    P4();
};
btnP5.onclick = function () {
    P5();
};
btnP6.onclick = function () {
    P6();
};
btnP7.onclick = function () {
    P7();
};
btnP8.onclick = function () {
    P8();
};
btnP9.onclick = function () {
    P9();
};
btnP10.onclick = function () {
    P10();
};
btnP11.onclick = function () {
    P11();
};
btnP12.onclick = function () {
    P12();
};