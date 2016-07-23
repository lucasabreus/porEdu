var tileSheet = new Image();
tileSheet.addEventListener('load', eventSheetLoaded , false);

tileSheet.src = "img/spritePoranito.png";

var mapIndexOffset = -1;
var mapRows = 5;
var mapCols = 5;

var tamTela = 320;

var tileMap = [
       [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ];
var objetivo;

var linha;
var coluna;
var orientacao;
var spritePosVazia = 0;

var pilha = [];

function limparTela () {
   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.clearRect(0, 0, tamTela, tamTela);
}

function zerarMatriz(){
   for( var i=0;i<tileMap.length;i++){
      for(var j=0;j<tileMap[i].length;j++){
         tileMap[i][j] = inicial[i][j];
      }
   }
   objetivo = ob;
   linha = linhainicial;
   coluna = colunainicial;
   orientacao = orientacaoinicial;

   drawScreen();
   drawObjetivo();
}

function eventSheetLoaded() {
   zerarMatriz();
}

function inicializaAjuda(){
   var valorVideo = '<div class="video-container"><iframe src="' + videoAula;
   valorVideo += '" frameborder="0" allowfullscreen></iframe></div>';

   document.getElementById("video").innerHTML = valorVideo;
   document.getElementById("objh6").innerHTML = objetivoMensagem;
   document.getElementById("dicash6").innerHTML = dicas;
   $('#alerta').openModal();
}

//Função para desenhar na tela principal de acordo com a matriz Tilemap
function drawScreen() {
   limparTela();
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
   for (var rowCtr=0;rowCtr<mapRows;rowCtr++) {
      for (var colCtr=0;colCtr<mapCols;colCtr++){

         var tileId = tileMap[rowCtr][colCtr]+mapIndexOffset;
         var sourceX = Math.floor(tileId % 4) *64;
         var sourceY = Math.floor(tileId / 4) *64;

         ctx.drawImage(tileSheet, sourceX,
         sourceY,64,64,colCtr*64,rowCtr*64,64,64);
      }
   }
 }

//Desenha no canvas do objetivo de acordo com a variável objetivo
 function drawObjetivo() {
   var c = document.getElementById("telaobjetivo");
   var ctx = c.getContext("2d");

   var d = document.getElementById("telainicial");
   var ctxd = d.getContext("2d");

   ctx.clearRect(0, 0, tamTela, tamTela);
   ctxd.clearRect(0, 0, tamTela, tamTela);

   for (var rowCtr=0;rowCtr<mapRows;rowCtr++) {
      for (var colCtr=0;colCtr<mapCols;colCtr++){

         var tileId = objetivo[rowCtr][colCtr]+mapIndexOffset;
         var sourceX = Math.floor(tileId % 4) *64;
         var sourceY = Math.floor(tileId / 4) *64;

         var tileIdI = tileMap[rowCtr][colCtr]+mapIndexOffset;
         var sourceXI = Math.floor(tileIdI % 4) *64;
         var sourceYI = Math.floor(tileIdI / 4) *64;

         ctx.drawImage(tileSheet, sourceX,
         sourceY,64,64,colCtr*64,rowCtr*64,64,64);

         ctxd.drawImage(tileSheet, sourceXI,
         sourceYI,64,64,colCtr*64,rowCtr*64,64,64);
      }
   }
 }

 //Função para girar o personagem à esquerda.
 function girarEsquerda () {
   pilha.push('girarEsquerda_();');
 }

 function girarEsquerda_ () {
   orientacao = orientacao + 1;
   if ( orientacao == 5 ) orientacao = 1;

   tileMap[linha][coluna] = orientacao;
   drawScreen();
 }

//Função para girar o personagem à direita.
 function girarDireita () {
   pilha.push('girarDireita_();');
 }

 function girarDireita_ () {
   if ( orientacao % 4 == 1 ) {
      orientacao += 3;
      tileMap[linha][coluna] += 3;
   }
   else {
      orientacao = orientacao - 1;
       tileMap[linha][coluna] -= 1;
   }

   drawScreen();
 }

//função para carregar os blocos na boolBox de acordo com a fase
 function iniciaToolBox(){
   var a = document.getElementById('toolbox').innerHTML = blocos;
 }

//Função para andar com uma casa o personagem de acordo com a orientação (SPRITE).
 function mover() {
   pilha.push('mover_();');
}

function mover_() {
   //Orientação = 1 -> // 2 = <- // 3 = ˆ // 4 = v
   var valor = tileMap[linha][coluna];
   if ( orientacao == 1 ){
      if ( coluna + 1 < mapCols ){
         tileMap[linha][coluna] = spritePosVazia;
         tileMap[linha][coluna+1] = valor;
         coluna++;
      }
   } else if ( orientacao == 3 ){
      if ( coluna - 1 >= 0 ){
         tileMap[linha][coluna] = spritePosVazia;
         tileMap[linha][coluna-1] = valor;
         coluna--;
      }
   } else if ( orientacao == 2 ){
      if ( linha - 1 >= 0 ){
         tileMap[linha][coluna] = spritePosVazia;
         tileMap[linha-1][coluna] = valor;
         linha--;
      }
   } else if ( orientacao == 4 ){
      if ( linha + 1 < mapRows ){
         tileMap[linha][coluna] = spritePosVazia;
         tileMap[linha+1][coluna] = valor;
         linha++;
      }
   }
   drawScreen();
}

//Função para mudar o personagem.
function mudarP( indice ){
   var string = 'mudarP_(' + indice + ');';
   pilha.push(string);
}

function mudarP_( indice ){
   tileMap[linha][coluna] = indice + tileMap[linha][coluna]%5;
   drawScreen();
}

//Verificar se a tela atual está de acordo com a matriz de objetivo.
function diffMatrizes (){
   var bool = 1;
   for( var i=0; i<objetivo.length; i++){
      for( var j=0; j<objetivo[i].length; j++){
         if ( objetivo[i][j] != tileMap[i][j] ){
            bool = 0;
         }
      }
   }
   if ( bool == 0 ){
      $('#alertaErro').openModal();
   } else {
      $('#alertaAcerto').openModal();
   }
}


function rodarPilha (){
   var time = document.getElementById('velocidadePoranito').value * 1000;
   if ( pilha.length != 0 ){
      var comando = pilha.shift();
      eval(comando);
      setTimeout( function f () { rodarPilha(); } ,time);
   } else {
      diffMatrizes();
   }
}