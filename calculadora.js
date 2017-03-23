

function mostrarNumero (num){
  var guardarNumero = document.formulario.resultado.value;
  document.formulario.resultado.value = guardarNumero + num;
}


function signoIgual (valor){

 var numeroPresionado = document.getElementById("textoPantalla");
 numeroPresionado.value = eval(numeroPresionado.value);
}
