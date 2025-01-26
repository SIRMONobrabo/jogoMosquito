var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var tempoDificuldade ;


var nivel = document.location.search;
    nivel = nivel.replace('?', '');


if (nivel === 'normal'){
     tempoDificuldade = 1500;
     tempo = 10;
}
else if (nivel ==='dificil'){
    tempoDificuldade = 1000;
    tempo = 15;
}
else if(nivel === 'darksouls'){
    tempoDificuldade = 750;
    tempo = 20;
}
    


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

function iniciarJogo(){

    var nivel = document.getElementById('nivel').value

    if(nivel === ''){
        alert('Selecione o nível para iniciar o jogo!')
        return false;
    }
    document.location.href = 'app.html?' + nivel;
}



var cronometro = setInterval(function(){
    tempo--;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        document.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000);


function posicaoRandomica(){

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();

        if(vidas > 4){
            /*alert('Game Over')*/
            document.location.href = 'fimdejogo.html'
        }
        else{
            document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png";

            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;


    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca';
    mosca.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosca);

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch (classe){
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
    console.log(classe)
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA';

        case 1: 
            return 'ladoB';
    }
}