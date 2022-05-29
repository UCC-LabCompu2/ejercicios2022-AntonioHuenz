/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades (id, valor){
    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value ="";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = ""
    }
}