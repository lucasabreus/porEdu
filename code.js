var pilha = [];

function limparTela () {
   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.clearRect(0, 0, tamTela, tamTela);
}

function pintar ( cor ){
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.fillStyle=cor;
  ctx.fillRect(0,0,320,320);
}

function mover() {
   pilha.push('mover_();');
}

function mover_() {
  pintar("#FF0000");
}

function girarEsquerda () {
 pilha.push('girarEsquerda_();');
}

function girarEsquerda_ () {
  pintar("#0000ff");
}

function girarDireita () {
  pilha.push('girarDireita_();');
}

function girarDireita_ () {
  pintar("#00ff00");
}

var preto = 0;

function rodarPilha (){
   var time = 100;
   if ( pilha.length != 0 ){
      var comando; 
      if ( preto == 0 ){
        comando = pilha.shift();
        preto = 1;
      } else {
        comando = 'pintar("#000000");';
        preto = 0;
      }
      
      document.getElementById('tocar').play();
      eval(comando);
      setTimeout( function f () { rodarPilha(); } ,time);
   } 
}