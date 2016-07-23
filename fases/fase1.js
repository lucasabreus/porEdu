//Javascript criado para determinar os padrões da fase.

//Autor: Lucas
//Objetivo da fase: Jogador usar o laço de repetição "REPITA" e conseguir pegar o chip.

//Vídeo apresentado no início da fase.
var dicas = 'Lembre-se de usar o comando MOVER';
var objetivoMensagem = 'Nessa fase você deverá pegar todos os chips do poranito e ir para a posição indicada na imagem';
var videoAula = 'https://www.youtube.com/embed/CaTSyqrQQ-o';

//Significa que a tela de objetivo será desenhada seguindo essa matriz.
var ob = [
       [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,1]
   ];

//Tela inicial será desenhada de acordo com a seguinte matriz
var inicial = [
       [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ,   [1,0,11,0,0]
   ,   [0,0,0,0,0]
   ,   [0,0,0,0,0]
   ];

//Posição do personagem na tela e orientação
var linhainicial = 2;
var colunainicial = 0;
var orientacaoinicial = inicial[linhainicial][colunainicial];

//Define quais blocos serão usados na partida
var blocos = '<block type="mover"></block> <block type="girarEsquerda"></block> <block type="girarDireita"></block> <block type="repetir"></block> <block type="mudarPersonagem"></block> <block type="poranito"></block> <block type="zygmundi"></block>';