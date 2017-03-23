

function mostrarNumero (num){
  var guardarNumero = document.formulario.resultado.value;
   document.formulario.resultado.value = guardarNumero + num;
}


function signoIgual (valor){

 var numeroPresionado = document.getElementById("textoPantalla");
  numeroPresionado.value = eval(numeroPresionado.value);
}

function teclaPresionada (event) {
  var codigoASCII = event.keyCode;
    if (codigoASCII == 13){ // 13 codigoascii enter
     signoIgual();
     return false;
}    else if (codigoASCII < 42 || codigoASCII > 57) {
      return false;
  }
}
