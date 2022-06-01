/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method Nombre de la función
 * @param {string} id - El id de los impus de metros, yardas, pies o pulgadas
 * @param {numbre} valor -  EL valor de los imputs metros, yardas, pies o pulgadas
 * @return
 */
function cambiarUnidades (id, valor){
    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value ="";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    }else if(id=="pulgadas"){
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_pulgada.value = 12 * valor;
        document.lasUnidades.unid_yarda.value = 0.333333 * valor
    }
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
function mostra_ocultar(valorMo){
    if(valorMo=="val_Mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if(valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
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

    img = new Image();
    img.src = "images/auto.png";
    console.log(posX,posY);

    img.onload = function (){
        ctx.drawImage(img, posX,posY);
        console.log("Se deberia dibujar la imagen");
    }
}