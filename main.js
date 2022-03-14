window.addEventListener('load', function() {

  telaInicial.style.display = 'block'
  none();

  telaInicial.addEventListener('click', function() {
    Global++

    telaInicial.style.display = 'none'

    visivel()

  });

});


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')

const kd = function(e) {
  return document.querySelector(e)
}


let Fogo = document.getElementById('bt');



const fullscren = document.getElementById('fulscreen');

let telaInicial = document.getElementById('tela')
let gameover = document.getElementById('over');
let direita = kd('.di');
let esquerda = kd('.es');
let praCima = kd('.ci');
let praBaixo = kd('.ba');


function none() {

  direita.style.display = 'none'
  esquerda.style.display = 'none'
  praCima.style.display = 'none'
  praBaixo.style.display = 'none'
  Fogo.style.display = 'none'
  fullscren.style.display = 'none'
}

function visivel() {
  direita.style.display = 'block'
  esquerda.style.display = 'block'
  praCima.style.display = 'block'
  praBaixo.style.display = 'block'
  Fogo.style.display = 'block'
  fullscren.style.display = 'block'

}



canvas.width = 1700;
canvas.height = 700;

const inicioJogo01 = new Audio();
inicioJogo01.src = '/sons/iniciar.wav'

/*const arma = new Audio();
arma.src = '/sons/machinne.wav'*/

const audio = new Audio();
audio.src = '/sons/jogando.wav'

const chefe = new Audio();
chefe.src = '/sons/chefe.wav'



//Objetos

class Bandeira {
  constructor() {
    this.xx = 0;
    this.yy = 0;
    this.sWW = 300;
    this.sHH = 200;
    this.posXX = aviao.posXP - 220
    this.posYY = aviao.posYP - 10
    this.width = 300;
    this.height = 200;
    this.direcaoX = 2;
    this.direcaoY = 2;
    this.frame = 0;
    this.maxframe = 1;
    this.frameinicio = 0;
    this.frameinterval = 70;
    this.image = document.getElementById('bandeira')
    this.markedForDeletion = false;

  }


  draw() {

    ctx.drawImage(this.image, this.frame * this.sWW, this.yy, this.sWW, this.sHH, this.posXX, this.posYY, this.width, this.height)


  }


  update(looptempo) {
  
    

    this.frameinicio += looptempo;
    if (this.frameinicio > this.frameinterval) {

      if (this.frame >= this.maxframe)
        this.frame = 0;
      else this.frame++;
      this.frameinicio = 0
    }
    if (this.posYY < 0 || this.posYY > canvas.height - this.height) {
      this.direcaoY = this.direcaoY * -1
    }
    if (this.posXX > canvas.width) this.posXX = 0;
    this.posXX += this.direcaoX;
    this.posYY += this.direcaoY;

  }
}



class BackGraund35 {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('bga')
  }
  restart() {
    this.x = 0;

  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);

  }


  update() {
    this.x -= this.speed
    if (this.x < 0 - this.width) this.x = 0;
  }
}

class BackGraund {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('bg')
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);

  }


  update() {
    this.x -= this.speed
    if (this.x < 0 - this.width) this.x = 0;
  }
}

class Iniciaraviao {
  constructor() {

    this.xP = 0;
    this.yP = 0;
    this.sWP = 300;
    this.sHP = 200;
    this.posXP = 10;
    this.posYP = 10;
    this.widthP = 300;
    this.heightP = 200;
    this.movi = 1;
    this.direcaoX = 2;
    this.direcaoY = 2;

    this.image = document.getElementById('snoopano');

  }

  draw() {
    ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)
  }
  update() {


    if (this.posYP < 0 || this.posYP > canvas.height - this.heightP) {
      this.direcaoY = this.direcaoY * -1
    }
    if (this.posXP > canvas.width) this.posXP = 0
    this.posXP += this.direcaoX;
    this.posYP += this.direcaoY;


  }
}




class Arma2 {
  constructor() {
    this.xx = 0;
    this.yy = 0;
    this.sWW = 200;
    this.sHH = 205;
    this.posXX = aviao.posXP + 200
    this.posYY = aviao.posYP + 130
    this.width = 50;
    this.height = 50;
    this.speed = 15;
    this.image = document.getElementById('arma2')
    this.markedForDeletion = false;
    this.visible = true;

  }

  draw() {
    ctx.drawImage(this.image, this.xx, this.yy, this.sWW, this.sHH, this.posXX, this.posYY, this.width, this.height)

  }
  update() {
    this.posXX += this.speed

    if (this.posXX > canvas.width) {
      this.markedForDeletion = true
    }
  }

}


class Player {
  constructor() {

    this.xP = 0;
    this.yP = 0;
    this.sWP = 336;
    this.sHP = 200;
    this.posXP = 10;
    this.posYP = 40;
    this.widthP = 336;
    this.heightP = 200;
    this.image = document.getElementById('snoop');

    this.image2 = document.getElementById('snoop2');

    this.image3 = document.getElementById('snoop3')
    this.markedForDeletion = false;
    this.frame = 0;
    this.maxframe = 1;
    this.vertical = 0;
    this.horizontal = 0;
    this.correr = 80;
    this.framemenor = 0;
    this.framemaior = 50;
    this.visible = true;
    this.correr02 = 250



  }
  restart() {
    this.posXP = 10;
    this.posYP = 40;
  }


  draw() {

    let atake = true;

    if (Life <= 0 || size <= 0) {
      ctx.drawImage(this.image3, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)
      atake = false

    }


    armas.forEach(Arma => {
      atake = false;

      if (Arma.visible == true) {

        ctx.drawImage(this.image2, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)
      }
    });


    if (atake == true) {

      ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)

    }
  }
  update() {

    if (this.posXP < 0) this.posXP = 0;
    else if (this.posXP > canvas.width - this.widthP) this.posXP = canvas.width - this.widthP

    if (this.posYP + 60 < 0) this.posYP = 0;
    else if (this.posYP - 50 > canvas.height - this.heightP) this.posYP = canvas.height - this.heightP

  }

}

class Vilao {
  constructor() {

    this.x = 0;
    this.y = 0;
    this.sW = 200;
    this.sH = 200;
    this.posX = 1720;
    this.posY = Math.random() * canvas.height;
    this.Medidaradom = Math.random() * 0.6 + 0.8;
    this.width = 200 * this.Medidaradom

    this.height = 200 * this.Medidaradom

    this.direcaoX = Math.random() * 1 + 1;
    this.direcaoY = Math.random() * 1 - 1;

    this.image = document.getElementById('bicho');
    this.frame = 0;
    this.maxframe = 3
    this.markedForDeletion = false;
    this.speed = 0.1;
    this.baterAsa = 0;
    this.baterAsaIntevalo = 150;
  }

  restart() {

    this.posX = 320
    this.posY = Math.random() * canvas.height;
    this.frame = 0;
    this.maxframe = 3

  }


  draw() {

    ctx.drawImage(this.image, this.frame * this.sW, this.y, this.sW, this.sH, this.posX, this.posY, this.width, this.height);

  }
  update(looptempo) {


    this.baterAsa += looptempo
    if (this.baterAsa > this.baterAsaIntevalo) {
      if (this.frame >= this.maxframe) this.frame = 0;
      else this.frame++;
      this.baterAsa = 0;
    };
    if (this.posY - 70 < 0 || this.posY > canvas.height - this.height) {
      this.direcaoY = this.direcaoY * -1
    }
    this.posX -= this.direcaoX;
    this.posY += this.direcaoY;

    if (this.posX < 0 - this.width) {
      this.markedForDeletion = true

    }
  }
}

class Vilao2 {
  constructor() {

    this.x2 = 0;
    this.y2 = 0;
    this.sW2 = 240;
    this.sH2 = 221;
    this.posX2 = 1720
    this.posY2 = Math.random() * canvas.height;
    this.Medidaradom = Math.random() * 0.6 + 0.8;
    this.width = 200 * this.Medidaradom
    this.height = 200 * this.Medidaradom
    this.direcaoX2 = Math.random() * 1 + 1;
    this.direcaoY2 = Math.random() * 1 - 1

    this.image = document.getElementById('anjo');
    this.frame = 0;
    this.maxframe = 4
    this.markedForDeletion = false;
    this.speed = 0.1;
    this.passos = 0;
    this.passosIntervalo = 350
  }

  draw() {

    ctx.drawImage(this.image, this.frame * this.sW2, this.y2, this.sW2, this.sH2, this.posX2, this.posY2, this.width, this.height)

  }
  update(looptempo) {

    if (this.posY2 - 70 < 0 || this.posY2 > canvas.height - this.height) {
      this.direcaoY2 = this.direcaoY2 * -1
    }
    this.posX2 -= this.direcaoX2;
    this.posY2 += this.direcaoY2;


    this.passos += looptempo
    if (this.passos > this.passosIntervalo) {
      if (this.frame >= this.maxframe) this.frame = 0;
      else this.frame++;
      this.passos = 0;
    }

    if (this.posX2 < 0 - this.width) {
      this.markedForDeletion = true
    }
  }
}


class Arma {
  constructor() {
    this.xx = 0;
    this.yy = 0;
    this.sWW = 200;
    this.sHH = 205;
    this.posXX = player.posXP + 180;
    this.posYY = player.posYP + 130;
    this.width = 50;
    this.height = 50;
    this.speed = 15;
    this.frameX = 0;
    this.maxframe = 2
    this.image = document.getElementById('arma')
    this.markedForDeletion = false;
    this.visible = true;

  }

  draw() {
    ctx.drawImage(this.image, this.xx, this.yy, this.sWW, this.sHH, this.posXX, this.posYY, this.width, this.height)

  }
  update() {
    this.posXX += this.speed

    if (this.posXX > canvas.width) {
      this.markedForDeletion = true
    }
  }

}

class BackGraund2 {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('bg2')
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);

  }

  update() {
    this.x -= this.speed
    if (this.x < 0 - this.width) this.x = 0;
  }
}

class AtaqueMonstro {
  constructor() {
    this.xM = 0;
    this.yM = 0;
    this.sWM = 200;
    this.sHM = 145;
    this.posXX = Dragon.posX + 60
    this.posYY = Dragon.posY + 200

    this.width = 90;
    this.height = 50;
    this.speed = 5;
    this.frameX = 0;
    this.maxframe = 2;
    this.girarLaser = 0;
    this.girarLaserInterval = 100;
    this.image = document.getElementById('laser2');
    this.markedForDeletion = false;

  }

  draw() {
    ctx.drawImage(this.image, this.frameX * this.sWM, this.yM, this.sWM, this.sHM, this.posXX, this.posYY, this.width, this.height)

  }
  update(looptempo) {

    this.girarLaser += looptempo;

    if (this.girarLaser > this.girarLaserInterval) {
      if (this.frameX >= this.maxframe) this.frameX = 0;
      else this.frameX++;
      this.girarLaser = 0;
    }

    this.posXX -= this.speed

    if (this.posXX < 0 - this.width) this.markedForDeletion = true


  }

}


class Dragao {
  constructor() {

    this.x = 0;
    this.y = 0;
    this.sW = 300;
    this.sH = 345;
    this.posX = 1500;
    this.posY = 100;
    this.width = 500;
    this.height = 500;
    this.heightChefe = 200;
    this.metadeL = 0.1;
    this.direcaoY = Math.random() * 2 + 2;
    this.direcaoX = Math.random() * 2 + 2;
    this.image = document.getElementById('chefe');
    this.veloX = 6
    this.veloY = 6
    this.frame = 0;
    this.maxframe = 5
    this.markedForDeletion = false;
    this.speed = 0.1;
    this.baterAsa = 0;
    this.baterAsaIntevalo = 250;
  }


  draw() {

    ctx.drawImage(this.image, this.frame * this.sW, this.y, this.sW, this.sH, this.posX, this.posY, this.width, this.height);
  }
  update(looptempo) {


    this.baterAsa += looptempo


    if (this.baterAsa > this.baterAsaIntevalo) {
      if (this.frame >= this.maxframe) this.frame = 0
      else this.frame++;
      this.baterAsa = 0;
    }




    if (this.posY + this.heightChefe < 0 || this.posY - 200 > canvas.height - this.height) {
      this.direcaoY = this.direcaoY * -1
    }

    if (this.posX < 0 || this.posX > canvas.width - this.metadeL) {
      this.direcaoX = this.direcaoX * -1

    }
    this.posX -= this.direcaoX;
    this.posY += this.direcaoY;


  }

}

//Variaveis

let aviaoinicio = [];
let bande = [];
let armaInicialx = [];
let back = [];
let iniciop = [];
let Jogador = [];
let ArmaChefao = [];
let chefao = [];
let vilao = [];
let vilao2 = [];
let armas = [];


const aviao = new Iniciaraviao();
var Dragon = new Dragao()
var player = new Player();
const bg = new BackGraund();
const bg2 = new BackGraund2();
const bga = new BackGraund35();
var badeiyra = new Bandeira();

var Global = 0;
var pontos = 0;
let tempo = 0;
let inimigo = 0;
let inimigoInterval = 4000;
let inimigoVida = 0;
let ChefeVida = 0;
let playerVida = 0;
let arm = 0;
let intervalarm = 1500;
let largura = 50;
let Life = 100;
let size = 200;
let size2 = 240;
let LifeDragao = 100;


Jogador.push(player);
chefao.push(Dragon)
back.push(bga);
bande.push(badeiyra);
aviaoinicio.push(aviao)

function musica() {
  if (audio.paused) {
    audio.play();

  } else {
    audio.pause();

  }
}

//funções

direita.addEventListener('click', e => {
  player.posXP += player.correr

});

esquerda.addEventListener('click', e => {
  player.posXP -= player.correr

});

praCima.addEventListener('click', e => {
  player.posYP -= player.correr

});

praBaixo.addEventListener('click', e => {
  player.posYP += player.correr

});

Fogo.addEventListener('click', function() {

  armas.push(new Arma());

});

function Colisao() {
  vilao.forEach(Vilao => {
    armas.forEach(Arma => {

      if (Vilao.posX < Arma.posXX + Arma.width &&
        Vilao.posX + Vilao.width > Arma.posXX &&
        Vilao.posY < Arma.posYY + Arma.height &&
        Vilao.posY + Vilao.height > Arma.posYY) {
        Vilao.markedForDeletion = true;
        Arma.markedForDeletion = true;
        pontos++
      };
    });
  });
};

function Colisao2() {
  vilao2.forEach(Vilao2 => {
    armas.forEach(Arma => {

      if (Vilao2.posX2 < Arma.posXX + Arma.width &&
        Vilao2.posX2 + Vilao2.width > Arma.posXX &&
        Vilao2.posY2 < Arma.posYY + Arma.height &&
        Vilao2.posY2 + Vilao2.height > Arma.posYY) {
        inimigoVida++

        if (inimigoVida == 2) {
          Vilao2.markedForDeletion = true;
          inimigoVida = 0
          pontos++
        }
        Arma.markedForDeletion = true;


      };
    });
  });
};

function Colisao3() {
  chefao.forEach(Dragon => {
    armas.forEach(Arma => {
      if (Dragon.posX < Arma.posXX + Arma.width &&
        Dragon.posX + Dragon.width > Arma.posXX &&
        Dragon.posY < Arma.posYY + Arma.height &&
        Dragon.posY + Dragon.height > Arma.posYY) {
          LifeDragao = LifeDragao -(5)

        ChefeVida++


        if (ChefeVida == 30) {
          
          Dragon.markedForDeletion = true;
        }
        Arma.markedForDeletion = true;

      };
    });
  });
};


function Colisao4() {

  ArmaChefao.forEach(AtaqueMonstro => {
    Jogador.forEach(player => {

      if (AtaqueMonstro.posXX < player.posXP + player.widthP &&
        AtaqueMonstro.posXX + AtaqueMonstro.width > player.posXP &&
        AtaqueMonstro.posYY < player.posYP + player.heightP &&
        AtaqueMonstro.posYY + AtaqueMonstro.height > player.posYP) {
        Life = Life - (20)
        loopLife();
        playerVida++

        if (playerVida == 5) {

          player.posYP += player.correr02

          setTimeout(function() {
            GameOver();
            
          });
          telaInicial.style.display = 'none'

        }
        AtaqueMonstro.markedForDeletion = true;
      }

    });
  });
}

function bgA() {
  back.forEach(bga => {
    bga.draw()
    bga.update()
  });

  back = back.filter(bga => !bga.markedForDeletion)
}



function backGraundDelete() {


  if (pontos < 30) {
    bg.draw();
    bg.update();
  } else {
    bg2.draw();
    bg2.update();
  }
}



function armax() {
  armas.forEach(Arma => {
    Arma.draw();
    Arma.update();

  });
}

function FaseChefe() {

  if (pontos == 30) {
     Colisao3();
     Text3();
    criarArma(looptempo);

    chefao.forEach(Dragon => {
      Dragon.draw();
      Dragon.update(looptempo);
    });

    chefao = chefao.filter(dragao => !dragao.markedForDeletion);

    //para os.monstros
    //clearInterval(UploadMonstros());
    vilao.forEach(Vilao => {
      Vilao.markedForDeletion = true
    });
    vilao2.forEach(Vilao2 => {
      Vilao2.markedForDeletion = true

    });

  }
}
gameover.addEventListener('click', function() {

  gameover.style.display = 'none';
  Global = 0;
  telaInicial.style.display = 'block';
  pontos = 0;
  playerVida = 0;
  Life = 100;
  size = 200;
  size2 = 240;
  player.restart();
  LifeDragao = 100;

});

function GameOver() {
  gameover.style.display = 'block'

}

function CriandoPlayer() {
  Jogador.forEach(player => {
    player.draw();
    player.update();

  });

  Jogador = Jogador.filter(player => !player.markedForDeletion);
}


function UploadMonstros(looptempo) {
  if (inimigo > inimigoInterval) {
    vilao.push(new Vilao())
    vilao2.push(new Vilao2())
    inimigo = 0

  } else {
    inimigo += looptempo
  }

  vilao.forEach(Vilao => {
    Vilao.draw();
    Vilao.update(looptempo);
  });
  vilao2.forEach(Vilao2 => {
    Vilao2.draw();
    Vilao2.update(looptempo);
  });

  vilao = vilao.filter(Vilao => !Vilao.markedForDeletion);
  vilao2 = vilao2.filter(Vilao2 => !Vilao2.markedForDeletion);

}

function armasJogo() {
  armas.forEach(armax => {
    armax.draw();
    armax.update();

  });
  ArmaChefao.forEach(AtaqueMonstro => {
    AtaqueMonstro.draw();
    AtaqueMonstro.update();
  });

  armas = armas.filter(armax => !armax.markedForDeletion);
  ArmaChefao = ArmaChefao.filter(AtaqueMonstro => !AtaqueMonstro.markedForDeletion);


}

function criarArma(looptempo) {

  if (arm > intervalarm) {
    ArmaChefao.push(new AtaqueMonstro());
    arm = 0

  } else if(Life <= 0 || size <= 0) {
    AtaqueMonstro.markedForDeletion = true;
   
   }else{
     arm += looptempo
  }
}



function Text() {
  ctx.fillStyle = "red";
  ctx.font = "35pt Arial";
  ctx.fillText("Pontos: " + pontos, 260, 36);
  ctx.fillStyle = "black";
  ctx.font = "35pt Arial";
  ctx.fillText("Pontos: " + pontos, 263, 39);


}


function Text2() {
  ctx.fillStyle = "red";
  ctx.font = "35pt arial";
  ctx.fillText("Vida: " + Life + "%", 10, 70);
  ctx.fillStyle = "black";
  ctx.font = "35pt arial";
  ctx.fillText("Vida: " + Life + "%", 13, 73);


}

function Text3() {
  ctx.fillStyle = "green";
  ctx.font = "35pt arial";
  ctx.fillText("Vida: " + LifeDragao + "%", 1420, 70);
  ctx.fillStyle = "black";
  ctx.font = "35pt arial";
  ctx.fillText("Vida: " + LifeDragao + "%", 1423, 73);


}

function lifeFill() {
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 30;
  ctx.lineCap = 'round';

  ctx.fillRect(0, 0, size2, 40)
  ctx.beginPath();
  ctx.moveTo(size, 15);
  ctx.lineTo(15, 15);
  ctx.stroke();
}

function loopLife() {
  if (size <= 200 || size2 <= 240)
    size = size - 40
  size2 = size2 - 34
  ctx.beginPath();
  ctx.moveTo(size, 100);
  ctx.lineTo(15, 100);
  ctx.stroke();


}





function FullScreen() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen().catch(err => {
      alert(`Erro, não pode habilitar o modo de tela cheia: ${err.message}`);

    });
  } else {
    document.exitFullscreen();
  }
}
fullscren.addEventListener('click', FullScreen);


setInterval(function() {
  armaInicialx.push(new Arma2());

}, 1000)

function UplodArma() {

  armaInicialx.forEach(Arma2 => {
    Arma2.draw();
    Arma2.update();
  })
  armaInicialx = armaInicialx.filter(Arma2 => !Arma2.markedForDeletion)
}

function criandoAviao() {
  aviaoinicio.forEach(aviao => {
    aviao.draw();
    aviao.update();
  })

  bande.forEach(badeiyra => {
    badeiyra.draw();
    badeiyra.update(looptempo);
  })
}




/*function autoReset() {
  if (Life <= 0 || size <= 0) {

  }
}*/


function Iniciar() {

  bgA();
  criandoAviao();
  UplodArma();

}


function loop(tempopassado) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  looptempo = tempopassado - tempo
  tempo = tempopassado

  Iniciar();

  if (Global == 1) {
    backGraundDelete();
    Text();
    Text2();
    lifeFill();
    Colisao();
    Colisao2();
    Colisao4();
    armasJogo();
    FaseChefe();
    CriandoPlayer();
    UploadMonstros(looptempo);
    //autoReset();
    audio.play();
   


  }

  requestAnimationFrame(loop);

}

loop(0);
