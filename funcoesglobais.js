//tempo de jogo

function Start() {
  parar = setInterval(function () {
    Contador()
  }, timer)
};

function Contador() {

  seg++
  if (seg == 60) {
    min++;
    seg = 0;

  };

  if (min == 60) {
    min = 0;
    hora++;
  };
};

function PararTempo() {
  clearInterval(parar)
}


function Mostrar() {

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Your Time Playing : " + `${seg}:${min}:${hora}`, 100, 500);

  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Your Time Playing : " + `${seg}:${min}:${hora}`, 100, 505);

}

//creditos inicial

function ColaboradoresInicial() {

  ctx.fillStyle = "white";
  ctx.font = "65pt teko,Arial";
  ctx.fillText("Develop : Alessandro", 500, 100);
  ctx.fillStyle = "red";
  ctx.font = "65pt teko,Arial";
  ctx.fillText("Develop : Alessandro", 500, 105);

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("collaborators : Silas", 100, 250);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("collaborators : Silas", 100, 255);


  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Evernam993Nguyen : Fire-Against-Time", 800, 250);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Evernam993Nguyen : Fire-Against-Time"
    , 800, 255);

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dj-afterburnz : Gods-test-eurobeat-2022", 800, 550);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dj-afterburnz : Gods-test-eurobeat-2022", 800, 555);



  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("DJ-L3WIS : Game-Over", 100, 550);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("DJ-L3WIS : Game-Over", 100, 555);

}



//Inicio

function InicioGame() {

  Minicial.play();
  back.forEach(bga => {
    bga.draw();
    bga.update();

  });

  armaInicialx.forEach(Arma2 => {
    Arma2.draw();
    Arma2.update();
  });

  back = back.filter(bga => !bga.markedForDeletion)
  armaInicialx = armaInicialx.filter(Arma2 => !Arma2.markedForDeletion)
}

function InicioGame2() {
  aviaoinicio.forEach(aviao => {
    aviao.draw();
    aviao.update();
  });

  bande.forEach(badeiyra => {
    badeiyra.draw();
    badeiyra.update(looptempo);
  });

  armaInicialx.forEach(Arma2 => {
    Arma2.draw();
    Arma2.update();
  });

};

// Arma inicial
setInterval(function () {
  armaInicialx.push(new Arma2());

}, 1000);


// especial

function Exportar() {
  let cont = 1;
  for (let i = 0; i < cont; i++) {
    laseres.push(new Laserclass());

  };
};

function FinalizarEspecial() {
  laseres.forEach(laserClass => {
    laserClass.draw();
    laserClass.update(looptempo);
  });
  laseres = laseres.filter(Laserclass => !Laserclass.markedForDeletion);
};

setInterval((AtualizarEspecial), 10000)

function AtualizarEspecial() {
  barraespecial2.w = barraespecial2.w + 10
  if (barraespecial2.w == 200) {
    Exportar();
    barraespecial2.w = 0;
  };
};


function BarraEspecialX() {
  barraespecial.forEach(barraespecial2 => {
    barraespecial2.draw();
    barraespecial2.update();
  });
};

function MonsterDelete() {
  vilao.forEach(Vilao => {
    vilao2.forEach(Vilao2 => {
      Vilao.markedForDeletion = true;
      Vilao2.markedForDeletion = true;
    });
  });
};

//surgem vida 

function ExportarVida() {
  let viida = 1;
  for (x = 0; x < viida; x++) {
    vidajogox.splice(0, 1)
    vidajogox.push(new VidajogoX());

  };
};
function AddVida() {
  if (pontos == 100) {
    ExportarVida()
  } else {
    for (k = 0; k < vidajogox.length; k++) {
      vidajogox[k].draw();
      vidajogox[k].update(looptempo);
    };
  };

  vidajogox = vidajogox.filter(VidajogoX => !VidajogoX.markedForDeletion);
  setTimeout(TempoVida, 100)
};

function TempoVida() {

  Jogador.forEach(player => {
    vidajogox.forEach(VidajogoX => {
      if (
        VidajogoX.posXP < player.posXP + player.widthP &&
        VidajogoX.posXP + VidajogoX.width > player.posXP &&
        VidajogoX.posYP < player.posYP + player.heightP &&
        VidajogoX.posYP + VidajogoX.height > player.posYP) {
        Life.w = 200
        VidajogoX.markedForDeletion = true;

      }
    });
  });
};


/// surgem especial 

function AddEspe() {

  if (pontos == 120) {
    let espe = 1;
    for (let i = 0; i < espe; i++) {
      esp.splice(0, 1)
      esp.push(new espjogo());

    };
  } else {
    esp.forEach(espjogo => {
      espjogo.draw();
      espjogo.update(looptempo);
      setTimeout(TempoEsp, 100);
    });
  };
  esp = esp.filter(espjogo => !espjogo.markedForDeletion);


};

function TempoEsp() {

  Jogador.forEach(player => {
    esp.forEach(espjogo => {
      if (
        espjogo.posXP < player.posXP + player.widthP &&
        espjogo.posXP + espjogo.width > player.posXP &&
        espjogo.posYP < player.posYP + player.heightP &&
        espjogo.posYP + espjogo.height > player.posYP) {
        barraespecial2.w = 200
        Exportar();
        barraespecial2.w = 0;
        espjogo.markedForDeletion = true;

      }
    });
  });
};

// funcões do Jogador

function LifeJogador() {

  lifeBarra.forEach(Life => {
    Life.draw();
    Life.update();

  });
}

function backGraundJogo() {
  bgJogo.forEach(bg => {
    bg.draw();
    bg.update();
  });
};

function CriandoPlayer() {
  Jogador.forEach(player => {
    player.draw();
    player.update();
  });

  armas.forEach(Arma => {
    armas.splice(1, 1)
    Arma.draw();
    Arma.update();
  });

  Jogador = Jogador.filter(player => !player.markedForDeletion);
  armas = armas.filter(Armaxx => !Armaxx.markedForDeletion);
}

//pontuação

function ScoreVida() {
  ctx.fillStyle = "red";
  ctx.font = "35pt teko,Arial";
  ctx.fillText("Score : " + pontos, 230, 45);
  ctx.fillStyle = "black";
  ctx.font = "35pt teko,Arial";
  ctx.fillText("Score : " + pontos, 230, 49);

  //vidas

  ctx.fillStyle = "red";
  ctx.font = "30pt teko,Arial";
  ctx.fillText("Life : " + Life.w + "%", 10, 83);
  ctx.fillStyle = "black";
  ctx.font = "30pt teko,Arial";
  ctx.fillText("Life : " + Life.w + "%", 10, 87);


  ctx.fillStyle = "red";
  ctx.font = "35pt teko,Arial";
  ctx.fillText("Dead : " + dead, 230, 93);
  ctx.fillStyle = "black";
  ctx.font = "35pt teko,Arial";
  ctx.fillText("Dead : " + dead, 230, 97);

  ctx.fillStyle = "red";
  ctx.font = "25pt teko,Arial";
  ctx.fillText("Especial : " + barraespecial2.w + "%", 10, 143);
  ctx.fillStyle = "black";
  ctx.font = "25pt teko,Arial";
  ctx.fillText("Especial : " + barraespecial2.w + "%", 10, 147);


}

//vida
function AtualizarLifePlayer() {

  if (Life.w <= 0) {
    Global = 2;
    telaGameover.style.display = 'block'
    fogo.style.display = 'none';
  }
};
//colisoes

function CriarMosntros(looptempo) {
  if (inimigo > inimigoInterval) {

    vilao.push(new Vilao());
    vilao2.push(new Vilao2());

    inimigo = 0

  } else {
    inimigo += looptempo
  }

  vilao.forEach(Vilao => {

    Vilao.draw()
    Vilao.update(looptempo)

  })

  vilao2.forEach(Vilao2 => {

    Vilao2.draw()
    Vilao2.update(looptempo)
  });

  vilao = vilao.filter(Vilao => !Vilao.markedForDeletion);
  vilao2 = vilao2.filter(Vilao2 => !Vilao2.markedForDeletion);
}

//Colisao da arma com montros

function ColisaoAlien() {
  vilao.forEach(Vilao => {
    armas.forEach(Arma => {
      if (Vilao.sx < Arma.posXX + Arma.width &&
        Vilao.sx + Vilao.sh > Arma.posXX &&
        Vilao.sy < Arma.posYY + Arma.height &&
        Vilao.sy + Vilao.sh > Arma.posYY) {
        Vilao.Vida -= 25

        pontos += 1
        if (Vilao.Vida == 0) {
          dead += 1
          Vilao.markedForDeletion = true;
        }
        Arma.markedForDeletion = true;

      }

    });
  });
};

function ColisaoMorcego() {
  vilao2.forEach(Vilao2 => {
    armas.forEach(Arma => {
      if (Vilao2.sx < Arma.posXX + Arma.width &&
        Vilao2.sx + Vilao2.sw > Arma.posXX &&
        Vilao2.sy < Arma.posYY + Arma.height &&
        Vilao2.sy + Vilao2.sh > Arma.posYY) {
        Vilao2.Vida2 -= 25
        pontos += 1

        if (Vilao2.Vida2 == 0) {
          dead += 1
          Vilao2.markedForDeletion = true;
        };
        Arma.markedForDeletion = true;
      };
    });
  });
};

///Game Over
function GameOver() {
  Mjogando.pause()
  Mgameover.play()

  BgOver.forEach(bgover => {
    bgover.draw()
    bgover.update()

  });
}

function GameOver2() {

  pontosJogador.forEach(pontos => {

    ctx.fillStyle = "red";
    ctx.font = "55pt teko,Arial";
    ctx.fillText("Your Points : " + pontos, 700, 50);
    ctx.fillStyle = "white";
    ctx.font = "55pt teko,Arial";
    ctx.fillText("Your Points : " + pontos, 700, 54);


    ctx.fillStyle = "red";
    ctx.font = "55pt teko,Arial";
    ctx.fillText("Dead : " + dead + "%", 700, 150);
    ctx.fillStyle = "white";
    ctx.font = "55pt teko,Arial";
    ctx.fillText("Dead : " + dead + "%", 700, 154);

  })

}


function GameOver3() {

  playerover.forEach(playerover1 => {
    playerover1.draw();
    playerover1.update();

  });

}


function AudioLoop() {
  Mjogando.loop = true;
  Mjogando.load();
  Mjogando.play()
};

//fase chefe

function FaseFinal() {
  if (pontos == 300 || dead == 60) {
    Global = 3;
    Mjogando.pause();
    Mchefe.play();

  }
}


function FaseFinal2() {

  if (vidaDragao.w < 300) {
    vidaDragao.w = 300;
  }

};

function FaseChefe() {

  Mchefe.play()
  BackgraudJogo1.forEach(bg2 => {
    bg2.draw();
    bg2.update();
  })


  vilao.forEach(Vilao => {
    Vilao.markedForDeletion = true
  });

  vilao2.forEach(Vilao2 => {
    Vilao2.markedForDeletion = true
  });

};

function CriarDragao() {
  chefao.forEach(Dragon => {
    Dragon.draw();
    Dragon.update(looptempo);
  });

  chefao = chefao.filter(Dragon => !Dragon.markedForDeletion);
};

function LifeDragon() {

  lifeBarraDragao.forEach(vidaDragao => {
    vidaDragao.draw();
    vidaDragao.update();

  });

  ctx.fillStyle = "red";
  ctx.font = "30pt teko,Arial";
  ctx.fillText("Life Dragon : " + vidaDragao.w + "%", 1360, 93);
  ctx.fillStyle = "black";
  ctx.font = "30pt teko,Arial";
  ctx.fillText("Life Dragon : " + vidaDragao.w + "%", 1360, 98);



}

function CriarDragao2() {

  chefao2.forEach(dragao2 => {
    dragao2.draw();
    dragao2.update(looptempo);

  });
  chefao2 = chefao2.filter(dragao2 => !dragao2.markedForDeletion);
};


//fogo Dragao

function FogoDragao(looptempo) {

  if (firedragao > firedragaoInterval) {
    ArmaChefao.push(new AtaqueMonstro());
    firedragao = 0

  } else {
    firedragao += looptempo
  }
  ArmaChefao.forEach(AtaqueMonstro => {
    AtaqueMonstro.draw();
    AtaqueMonstro.update();

  });

  ArmaChefao = ArmaChefao.filter(AtaqueMonstro => !AtaqueMonstro.markedForDeletion)

}
//colisao arma do chefe no jogador


function ColisaoArmaChefe() {

  armas.forEach(Arma => {
    chefao.forEach(Dragon => {
      if (Dragon.posX < Arma.posXX + Arma.width &&
        Dragon.posX + Dragon.width > Arma.posXX &&
        Dragon.posY < Arma.posYY + Arma.height &&
        Dragon.posY + Dragon.height > Arma.posYY) {

        vidaDragao.w -= 5;
        Arma.markedForDeletion = true;

        if (vidaDragao.w <= 0) {
          PararTempo();
          Global = 5;

          //Dragon.markedForDeletion = true;
        }
      }
    });
  });
};

//colisao arma do jogador no chefe

function ColisaoChefePlayer() {
  ArmaChefao.forEach(AtaqueMonstro => {
    Jogador.forEach(player => {
      if (
        AtaqueMonstro.posXX < player.posXP + player.widthP &&
        AtaqueMonstro.posXX + AtaqueMonstro.width > player.posXP &&
        AtaqueMonstro.posYY < player.posYP + player.heightP &&
        AtaqueMonstro.posYY + AtaqueMonstro.height > player.posYP) {
        Life.w -= 25
        AtaqueMonstro.markedForDeletion = true;
        if (Life.w <= 0) {
          Mchefe.pause();
          Global = 2;
          telaGameover.style.display = 'block'
          fogo.style.display = 'none';
        }
      };
    });
  });
};

//Creditos
function CreditoBackgraund() {

  creditosbg.forEach(CreditosBack => {
    CreditosBack.draw();
    CreditosBack.update();


  });
};

function Creditos() {

  fogo.style.display = 'none';
  Mchefe.pause();
  Mfinal.play();

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("congratulations winner", 100,
    200);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("congratulations winner :", 100, 205);


  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Your Points : " + pontos, 100, 350);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Your Points : " + pontos, 100, 355);


  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dead : " + dead, 100, 650);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dead : " + dead, 100, 655);

}

function Colaboradores() {

  ctx.fillStyle = "white";
  ctx.font = "60pt teko,Arial";
  ctx.fillText("Develop : Alessandro", 500, 50);
  ctx.fillStyle = "red";
  ctx.font = "60pt teko,Arial";
  ctx.fillText("Develop : Alessandro", 500, 55);

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("collaborators : Silas", 800, 200);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("collaborators : Silas", 800, 205);


  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Evernam993Nguyen : Fire-Against-Time", 800, 350);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Evernam993Nguyen : Fire-Against-Time"
    , 800, 355);

  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dj-afterburnz : Gods-test-eurobeat-2022", 800, 500);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("Dj-afterburnz : Gods-test-eurobeat-2022", 800, 505);



  ctx.fillStyle = "red";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("DJ-L3WIS : Game-Over", 800, 650);
  ctx.fillStyle = "white";
  ctx.font = "45pt teko,Arial";
  ctx.fillText("DJ-L3WIS : Game-Over", 800, 655);

}

function FimGame() {
  aviaoinicio.forEach(aviao => {
    aviao.draw();
    aviao.update();
  });

  bande.forEach(badeiyra => {
    badeiyra.draw();
    badeiyra.update(looptempo);
  });

  armaInicialx.forEach(Arma2 => {
    Arma2.draw();
    Arma2.update();
  });

  armaInicialx = armaInicialx.filter(Arma2 => !Arma2.markedForDeletion)

}



// d-_-b
