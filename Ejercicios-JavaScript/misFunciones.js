/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method Nombre de la función
 * @param {string} id - El id de los impus de metros, yardas, pies o pulgadas
 * @param {numbre} valor -  EL valor de los imputs metros, yardas, pies o pulgadas
 * @return
 */
function cambiarUnidades (id, valor){
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido"+id);
        metro ="";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.09361 * valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro = 0.9144 * valor;
        pie= 3 * valor;
        pulgada= 36 * valor;
    }else if(id=="pie"){
        pie = valor;
        metro = 0.3048 * valor;
        pulgada = 12 * valor;
        yarda = 0.333333 * valor
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = grad;
}
function mostrar_ocultar(valorMo){
    if(valorMo=="val_Mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if(valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}
function calcularSuma(){
    var num1 , num2;

    num1= document.getElementsByName("sum_num1")[0].value;
    num2= document.getElementsByName("sum_num2")[0].value;

    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}
function calcularRest(){
    var num1, num2;

    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}
function calcularMult(){
    var num1, num2;

    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num1")[0].value;

    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}
function calcularDiv(){
    var num1, num2;

    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}

function cargarWeb(){
    var  cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementById("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);

}
function cargarResultado(){
    var urlComp, can , un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dis").value = can + " " + un;
}

function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen,yMax-tamCuadrado-margen,tamCuadrado,tamCuadrado);

    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#3c91d2";
    ctx.fill();

}
var bandera;
function dibujar(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY =event.clientY;

    console.log(posX,posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmousedown = function (){bandera=false};
    if(bandera){
    ctx.fillRect(posX,posY,5, 5);
    }
}

function borrarCanvas(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
function cargarListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousedown", function (event){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    console.log(posX,posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if(bandera){
        ctx.fillRect(posX,posY,5, 5);
    }

    })
}
function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax =canvas.width;
    let yMax = canvas.height;
    //Dibujar Lineas Horizontales

    for(let i=20;i<yMax;){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(xMax,i);
        ctx.strokeStyle = "#5d0429";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
        }

    //Dibujar Lineas Verticales

    for(let i=20;i<xMax;){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,yMax);
        ctx.strokeStyle = "#0d0d69";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
    }

    //Ejex
    ctx.beginPath();
    ctx.moveTo(0,yMax/2);
    ctx.lineTo(xMax,yMax/2);
    ctx.strokeStyle = "#557921";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font="10pt Verdadera";
    ctx.fillStyle= "blue";
    ctx.fillText("Eje X",canvas.width/2,canvas.height/2);
    ctx.closePath();

    //Ejey
    ctx.beginPath();
    ctx.moveTo(xMax/2,0);
    ctx.lineTo(xMax/2,yMax);
    ctx.strokeStyle = "#5d0429";
    ctx.stroke();
    ctx.closePath();

}

function dibujarAuto(posX,posY){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";
    console.log(posX,posY);

    img.onload = function (){
        ctx.drawImage(img, posX,posY);
        console.log("Se deberia dibujar la imagen");
    }
}

x = 0;
dx = 2;

function animarAuto(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x = 0;
    }
    x = x+dx;
}

function guardarLocalStorage(){
     let distancia, unidad;
     distancia = document.getElementById('distancia').value;
     unidad = document.getElementsByName('unidad')[0].value;
     localStorage.setItem("distanciaLS", distancia);
     localStorage.setItem("unidadLS", unidad);
     window.open('2_web.html');

}
function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}