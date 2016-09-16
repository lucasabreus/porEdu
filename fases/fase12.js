function getFase12(){
    fase2 = new fase();
    //Javascript criado para determinar os padrões da fase.

    //Autor: Lucas
    
    //Vídeo apresentado no início da fase.
    var id = 12;
    var dicasFase = 'Lembre-se de usar o comando TROCAR PERSONAGEM';
    var objetivoMensagem = 'Nessa fase você deverá chamar a ajuda do Zygmundi';
    var videoAula = 'https://www.youtube.com/embed/SupLkSyK7_Q';

    //Significa que a tela de objetivo será desenhada seguindo essa matriz.
    var ob = [
           [0,0,0,0,0]
       ,   [0,0,0,0,0]
       ,   [5,0,0,0,0]
       ,   [0,0,0,0,0]
       ,   [0,0,0,0,0]
       ];

    //Tela inicial será desenhada de acordo com a seguinte matriz
    var inicial = [
           [0,0,0,0,0]
       ,   [0,0,0,0,0]
       ,   [1,0,0,0,0]
       ,   [0,0,0,0,0]
       ,   [0,0,0,0,0]
       ];

    //Posição do personagem na tela e orientação
    var linhainicial = 2;
    var colunainicial = 0;
    var orientacaoinicial = inicial[linhainicial][colunainicial];

    //Define quais blocos serão usados na partida
    var blocos = '<block type="mudarPersonagem"></block> <block type="poranito"></block> <block type="zygmundi"></block>';

    fase2.setID(id);
    fase2.setDicas(dicasFase);
    fase2.setObjetivoMensagem(objetivoMensagem);
    fase2.setVideoAula(videoAula);
    fase2.setob(ob);
    fase2.setInicial(inicial);
    fase2.setLinha(linhainicial); 
    fase2.setColuna(colunainicial);
    fase2.setOrientacao(orientacaoinicial);
    fase2.setBlocos(blocos);

    return fase2;
}