

function operaciones(operacion){
    var operacion1 = document.formulario.operacion1.value
    var operacion2 = document.formulario.operacion2.value
    var resultado = eval(operacion1 + operacion + operacion2)
    document.formulario.resultado.value = resultado

}
