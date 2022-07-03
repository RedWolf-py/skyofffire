window.addEventListener('load', function () {
  fogo.style.display = 'none';
  telaInicial.style.display = 'block';

  telaInicial.addEventListener('click', function () {
    telaInicial.style.display = 'none';
    fogo.style.display = 'block';
    Global = 1;
    Minicial.pause();
    AudioLoop();


  });
});


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const kd = function (e) {
  return document.querySelector(e);
}

const fullscreen = document.getElementById('fulscreen');
var telaInicial = document.getElementById('tela');
var telaGameover = document.getElementById('tela2');

var fogo = kd('.fogo');

const Minicial = kd('.Miniciar');
const Mjogando = kd('.Mjogando');
const Mchefe = kd('.Mchefe');
const Mgameover = kd('.Mgameover');
const Mfinal = kd('.Mfinal');

canvas.width = 1700;
canvas.height = 700;

//Variaveis Principais

var Global = 0;
var pontos = 0;
var dead = 0;
var pontosJogador = []

//Variaveis array

let aviaoinicio = [];
let bande = [];
let armaInicialx = [];
let back = [];
let iniciop = [];
let bgJogo = [];
let Jogador = [];
let vilao = [];
let vilao2 = [];
let armas = [];
let chefao = [];
let ArmaChefao = [];
let BackgraudJogo1 = [];
let BgOver = [];
let creditosbg = [];
let playerover = [];
let lifeBarra = [];
let lifeBarraDragao = [];
let chefao2 = [];
let barraespecial = [];
let laseres = [];
let vidajogox = [];
let esp = [];


//variaveis criadas dentro de funcoes;

var numLife;
var maxWidth;
var chavevar;
var teclas;
var teclasTiro;
let contadorTempo;
var parar;

//variaveis normais
var cor = ["rgba(255,0,0,", "rgba(0,255,0,", "rgba(255,215,0,", "rgba(255,184,0,", "rgba(102,204,255,", "rgba(255,0,255,", "rgba(222,184,135,", "rgba(0,105,07,", "rgba(4,243,60,", "rgba(238, 130, 238,", "rgba(255, 117, 24,", "rgba(0,255,0,"]

var seg = 0;
var min = 0;
var hora = "0" + 0;
var timer = 1000;
let tempo = 0;
let inimigo = 0;
let inimigoInterval = 5000;
let inimigoVida = 0;
let ChefeVida = 0;
let playerVida = 5;
let arm = 0;
let intervalarm = 1500;
let largura = 50;
let size = 200;
let size2 = 240;
let LifeDragao = 100;
let fires = 0
let intervalfires = 1200;
let firedragao = 0;
let firedragaoInterval = 1200




// Variaveis Objetos

var aviao = new Iniciaraviao();
var player = new Player();
const bg = new BackGraund();
const bg2 = new BackgraudJogo();
const bga = new BackGraund35();
var badeiyra = new Bandeira();
var Dragon = new Dragao();
var dragao2 = new Dragao2();
const bgover = new BackGraundover();
var CreditosBack = new CreditosBg();
const playerover1 = new PlayerOver();
var Life = new BarraVida();
var vidaDragao = new VidaDragao();
var barraespecial2 = new BarraEspecial();

// Modo celular

var touchX;
var touchY;
var distancia = 30;
var array = []

Jogador.push(player);
chefao.push(Dragon)
back.push(bga);
bgJogo.push(bg);
bande.push(badeiyra);
aviaoinicio.push(aviao);
BackgraudJogo1.push(bg2);
playerover.push(playerover1);
BgOver.push(bgover);
lifeBarra.push(Life);
lifeBarraDragao.push(vidaDragao);
chefao2.push(dragao2);
creditosbg.push(CreditosBack)
barraespecial.push(barraespecial2)

//Eventos computador

window.addEventListener('keydown', key => {
  teclas = key.keyCode
  teclasTiro = key.code
});

window.addEventListener('keyup', key => {
  teclas = false
  teclasTiro = false

});


//Eventos Celular

canvas.addEventListener('touchstart', e => {

  touchY = e.changedTouches[0].pageY;
  touchX = e.changedTouches[0].pageX;

});

canvas.addEventListener('touchmove', e => {

  e.preventDefault();

  var posicaoY = e.changedTouches[0].pageY - touchY

  var posicaoX = distanceX = e.changedTouches[0].pageX - touchX


  if (posicaoY < -distancia && array.indexOf('cima') === -1) {
    array.push('cima')

  } else if (posicaoY > distancia && array.indexOf('baixo') === -1) {
    array.push('baixo')
  }

  if (posicaoX < -distancia && array.indexOf('fundo') === -1) {
    array.push('fundo')

  } else if (posicaoX > distancia && array.indexOf('frente') === -1) {
    array.push('frente')

  }
});

canvas.addEventListener('touchend', e => {

  array.splice(array.indexOf('cima'), 1)

  array.splice(array.indexOf('baixo'), 1)

  array.splice(array.indexOf('fundo'), 1)

  array.splice(array.indexOf('frente'), 1)

});

//evento das telas

telaGameover.addEventListener('click', function () {
  telaInicial.style.display = 'block';
  telaGameover.style.display = 'none';
  fogo.style.display = 'none';
  Mgameover.pause()
  pontos = 0;
  dead = 0;
  Life.w = 200;
  barraespecial2.w = 0;
  Mgameover.pause();
  Global = 0;
  vilao.forEach(Vilao => {
    Vilao.markedForDeletion = true
  });
  vilao2.forEach(Vilao2 => {
    Vilao2.markedForDeletion = true
  });

});


fogo.addEventListener('click', function () {
  armas.push(new Arma());
});

function FullScreen() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen().catch(err => {
      alert(`Erro, não pode habilitar o modo de tela cheia: ${err.message}`);

    });
  } else {
    document.exitFullscreen();
  }
}
fullscreen.addEventListener('click', FullScreen);


Start();

function loop(tempopassado) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  looptempo = tempopassado - tempo
  tempo = tempopassado

  switch (Global) {
    //inicio do jogo 1º Tela
    case 0:
      InicioGame();
      InicioGame2();
      ColaboradoresInicial();

      break;
    case 1:
      // 2º Tela
      backGraundJogo();
      CriandoPlayer();
      LifeJogador();
      AtualizarLifePlayer();
      BarraEspecialX();
      CriarMosntros(looptempo);
      ScoreVida();
      ColisaoAlien();
      ColisaoMorcego();
      FaseFinal();
      FinalizarEspecial();
      AddVida();
      AddEspe();
      break;

    case 2:
      // Tela Game Over
      GameOver();
      GameOver2();
      GameOver3();
      break;
    case 3:
      // 3º tela
      FaseFinal2();
      FaseChefe();
      CriarDragao2(looptempo);
      CriandoPlayer();
      AtualizarLifePlayer();
      LifeJogador();
      ScoreVida();
      LifeDragon();
      BarraEspecialX();


      break;
    case 4:
      // 4º Tela
      FaseChefe();
      CriarDragao(looptempo);
      CriandoPlayer();
      AtualizarLifePlayer();
      LifeJogador();
      BarraEspecialX();
      ScoreVida();
      LifeDragon();
      FogoDragao(looptempo);
      ColisaoArmaChefe();
      ColisaoChefePlayer();
      FinalizarEspecial();
      AddVida();
      AddEspe();

      break;
    case 5:
      // Tela  Final
      CreditoBackgraund();
      Creditos();
      Colaboradores();
      Mostrar();
      FimGame();
      break
  }

  requestAnimationFrame(loop);
}

loop(0);

//d-_-b
