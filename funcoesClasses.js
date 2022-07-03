// Inicio do jogo

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

class Bandeira {
  constructor() {
    this.xx = 0;
    this.yy = 0;
    this.sWW = 300;
    this.sHH = 200;
    this.posX = aviao.posXP - 220
    this.posY = aviao.posYP - 10
    this.width = 300;
    this.height = 200;
    this.DX = 2;
    this.DY = 2;
    this.frame = 0;
    this.maxframe = 1;
    this.frameinicio = 0;
    this.frameinterval = 70;
    this.image = document.getElementById('bandeira');

  }


  draw() {

    ctx.drawImage(this.image, this.frame * this.sWW, this.yy, this.sWW, this.sHH, this.posX, this.posY, this.width, this.height)


  }


  update(looptempo) {

    this.frameinicio += looptempo;
    if (this.frameinicio > this.frameinterval) {

      if (this.frame >= this.maxframe)
        this.frame = 0;
      else this.frame++;
      this.frameinicio = 0
    }
    if (this.posY < 0 || this.posY > canvas.height - this.height) {
      this.DY = this.DY * -1
    }
    if (this.posX > canvas.width) this.posX = 0;
    this.posX += this.DX;
    this.posY += this.DY;

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
    this.width = 300;
    this.height = 200;
    this.velX = 2;
    this.velY = 2;
    this.image = document.getElementById('snoopano');

  }

  draw() {
    ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.width, this.height)

  }
  update(looptempo) {

    this.frameinicio += looptempo;
    if (this.frameinicio > this.frameinterval) {

      if (this.frame >= this.maxframe)
        this.frame = 0;
      else this.frame++;
      this.frameinicio = 0
    }
    if (this.posYP < 0 || this.posYP > canvas.height - this.height) {
      this.velY = this.velY * -1
    }
    if (this.posXP > canvas.width) this.posXP = 0;
    this.posXP += this.velX;
    this.posYP += this.velY;

  }
}

//  1° Arma 

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

//fase do jogo

class BackGraund {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('bg')
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
    if (Life.w <= 0) {
      this.restart()
    }
  }
}

class BarraVida {
  constructor() {
    this.x = 10
    this.y = 10
    this.width = 200
    this.height = 40
    this.w = 200
    this.color = 'red'
    this.markedForDeletion = false;


  }
  draw() {
    ctx.lineJoin = 'round'
    ctx.lineWidth = 6
    ctx.strokeStyle = 'black'
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.w, this.height)

  }

  update() {

  } //update
} //class


class Player {
  constructor() {

    this.xP = 0;
    this.yP = 0;
    this.sWP = 336;
    this.sHP = 200;
    this.posXP = 10;
    this.posYP = 200;
    this.widthP = 336;
    this.heightP = 200;
    this.image = document.getElementById('snoop');

    this.image2 = document.getElementById('snoop2');
    this.markedForDeletion = false;
    this.frame = 0;
    this.maxframe = 1;
    this.vertical = 0;
    this.horizontal = 0;
    this.velo = 15;
    this.framemenor = 0;
    this.framemaior = 50;
    this.correr02 = 250;



  }
  restart() {
    this.posXP = 10;
    this.posYP = 200;

  }

  draw() {
    let atake = true;

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

    //codigo de movimento modo celular

    if (window.matchMedia("(max-width:800px)").matches) {

      if (array[0] == 'frente') {
        this.posXP += this.velo
        if (this.posXP > canvas.width - this.widthP) this.posXP = canvas.width - this.widthP

      } else if (array[0] == 'fundo') {
        this.posXP -= this.velo
        if (this.posXP < 0) this.posXP = 0

      } else if (array[0] == 'cima') {
        this.posYP -= this.velo
        if (this.posYP < 0) this.posYP = 0

      } else if (array[0] == 'baixo') {
        this.posYP += this.velo
        if (this.posYP > canvas.height - this.heightP) this.posYP = canvas.height - this.heightP

      }

    }

    //codigo de movimento modo desktop 

    if (teclasTiro == 'Enter' || teclas == '32') {
      armas.push(new Arma());
    } else {
      teclasTiro = false;
    
    }

    if (teclas == '37' || teclas == '65') {

      this.posXP -= this.velo;
      if (this.posXP - 100 < 0)
        this.posXP = 0

    } else if (teclas == '39' || teclas == "68") {
      this.posXP += this.velo
      if (this.posXP + 300 > canvas.width) this.posXP = canvas.width - this.widthP

    } else if (teclas == '38' || teclas == '87') {
      this.posYP -= this.velo
      if (this.posYP < 0) this.posYP = 0;

    } else if (teclas == '40' || teclas == '83') {
      this.posYP += this.velo;
      if (this.posYP + 200 > canvas.height) this.posYP = canvas.height - this.heightP
    } else {
      teclas = false;
    }
    if (Life.w <= 0) {
      this.restart()
    }
  } //update
} //class


// 2° Arma 

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
    this.speed = 25;
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
    };
  };
};


// Especial do player
class BarraEspecial {
  constructor() {
    this.x = 10;
    this.y = 94;
    this.width = 200;
    this.height = 20;
    this.w = 0;
    this.color = 'cyan';


  }
  draw() {
    ctx.lineJoin = 'round'
    ctx.lineWidth = 8
    ctx.strokeStyle = 'black'
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.w, this.height)

  }

  update() {

  } //update
} //class


// Vidas e especial
class VidajogoX {
  constructor() {

    this.xP = 0;
    this.yP = 0;
    this.sWP = 336;
    this.sHP = 200;
    this.posXP = Math.random()*1000;
    this.posYP = Math.random()*500;
    this.width = 100;
    this.height = 70;
    this.image = document.getElementById('vidajogo');
    this.marckedForDeletion = false;

  }

  draw() {
    ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.width, this.height)

  }
  update() {

    
  }//update
}//class

class espjogo {
  constructor() {

    this.xP = 0;
    this.yP = 0;
    this.sWP = 300;
    this.sHP = 200;
    this.posXP = Math.random()*1000;
    this.posYP = Math.random()*500;
    this.width = 100;
    this.height = 50;
    this.image = document.getElementById('esp');
    this.marckedForDeletion = false;
    

  }

  draw() {
    ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.width, this.height)

  }
  update() {

    
  }//update
}//class

class Laserclass {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.dw = 300;
    this.dh = 200;
    this.sx = player.posXP + 100;
    this.sy = player.posYP - 50;
    this.sw = 600;
    this.sh = 400;
    this.img = document.getElementById('especial')
    this.frame = 0;
    this.maxframe = 5;
    this.speedy = 0;
    this.speedyIntervalo = 150;
    this.marckedForDeletion = false;
  }

  update(looptempo) {

    this.speedy += looptempo

    if (this.speedy > this.speedyIntervalo) {
      if (this.frame >= this.maxframe)
        this.frame = 0;
      else this.frame++;
      this.speedy = 0;
    }

    if (this.sx > canvas.width) {
      MonsterDelete();
      this.markedForDeletion = true;

    }

    this.sx = this.sx + 6;

  }
  draw() {

    ctx.drawImage(this.img, this.frame * this.dw, this.y, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh)

  } //update
} //class




//Monstros do jogo e armas

class Tiro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 10;
    this.speed = 25;
    this.color = "red";
    this.marckedForDeletion = false;
  }

  update() {
    this.x -= this.speed

  };

  draw() {
    ctx.lineJoin = 'round'
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
} //class


class LifeVilao {
  constructor(x, y, w) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 13
    this.speed = 13
    this.color = "green"
    this.w = w
  }

  update() { }

  draw() {

    ctx.lineJoin = 'round'
    ctx.lineWidth = 6
    ctx.strokeStyle = 'black'
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.w, this.height)

  }
}

class Vilao {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.barraVida = [];
    this.tiro = [];
    this.dw = 300;
    this.dh = 200;
    this.sx = 1700;
    this.sy = Math.random() * canvas.height - this.dh;
    this.Medidas = Math.random() * 0.6 + 0.8;
    this.sw = 200 * this.Medidas;
    this.sh = 150 * this.Medidas;
    this.img = document.getElementById('alien');

    this.DX = Math.random() * 1 + 2;
    this.DY = Math.random() * 1 - 2;
    this.frame = 0;
    this.maxframe = 2;
    this.baterAsa = 0;
    this.baterAsaIntevalo = 150;
    this.Vida = 100;
    this.markedForDeletion = false;
    this.NovoTiro = null;
    this.NovoLife = null;
  }
  CriarLife() {
    this.barraVida.push(new LifeVilao(this.sx, this.sy, 100, this.height))
    this.NovoLife = new Date();
  }

  CriarTiro() {
    if (fires > intervalfires) {
      this.tiro.push(
        new Tiro(this.sx, this.sy + 30, this.width, this.height));
      fires = 0
    } else {
      fires += looptempo;

    }
    this.NovoTiro = new Date();
  };

  draw() {
    ctx.drawImage(this.img, this.frame * this.dw, this.y, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh)
  }

  update(looptempo) {
    if (this.sx < 1600) {
      if (this.NovoLife) {
        this.barraVida.forEach(LifeVilao => {
          this.barraVida.splice(0, 1)
          LifeVilao.draw()
          LifeVilao.update()

        });
      };

      this.CriarLife();
    };

    if (this.sy < 0 || this.sy > canvas.height - this.sh) {
      this.DY = this.DY * -1
    }

    this.sx -= this.DX;
    this.sy += this.DY;

    this.baterAsa += looptempo

    if (this.baterAsa > this.baterAsaIntevalo) {
      if (this.frame >= this.maxframe) this.frame = 0;
      else this.frame++;
      this.baterAsa = 0;
    };

    if (this.sx < 0 - this.width) {
      this.markedForDeletion = true
    }


    if (this.sx < 1600) {
      if (this.NovoTiro) {
        this.tiro.forEach(Tiro => {
          Tiro.draw()
          Tiro.update()
        });
        this.tiro = this.tiro.filter(Tiro => !Tiro.marckedForDeletion)

      }
      this.CriarTiro();
    }

    this.barraVida.forEach(LifeVilao => {
      while (this.Vida !== LifeVilao.w) {
        LifeVilao.w -= 25
      };
    });

    this.tiro.forEach(Tiro => {
      Jogador.forEach(player => {
        if (
          Tiro.x < player.posXP + player.widthP &&
          Tiro.x + Tiro.width > player.posXP &&
          Tiro.y < player.posYP + player.heightP &&
          Tiro.y + Tiro.height > player.posYP) {
          Life.w -= 5
          Tiro.marckedForDeletion = true;
        };

      });
      if (Tiro.x < 0) {
        Tiro.marckedForDeletion = true;
      }
    });
  } //update
} //class

class LifeVilao2 {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 13;
    this.color = "blue";
    this.w = w;

  }
  update() { }
  draw() {

    ctx.lineJoin = 'round'
    ctx.lineWidth = 8
    ctx.strokeStyle = 'black'
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.w, this.height)

  }
}

class Vilao2 {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.barraVida2 = [];
    this.dw = 240;
    this.dh = 221;
    this.sx = 1720;
    this.big = Math.random() * 0.6 + 0.8;
    this.sy = Math.random() * canvas.height - this.dh;
    this.sw = 200 * this.big;
    this.sh = 180 * this.big;
    this.DX2 = Math.random() * 1 + 1;
    this.DY2 = Math.random() * 1 - 1
    this.img = document.getElementById('Morcego')
    this.frame = 0;
    this.maxframe = 4;
    this.speed = 0.1;
    this.passos = 0;
    this.passosIntervalo = 350;
    this.marckedForDeletion = false;
    this.Vida2 = 100;
  }
  CriarLife2() {
    this.barraVida2.push(new LifeVilao2(this.sx, this.sy, 100, this.height));

  }

  draw() {
    ctx.drawImage(this.img, this.frame * this.dw, this.y, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh)
  }

  update(looptempo) {

    this.sx -= this.speed

    this.barraVida2.forEach(LifeVilao2 => {
      this.barraVida2.splice(0, 1)
      LifeVilao2.draw()
      LifeVilao2.update()
    });
    this.CriarLife2();

    if (this.sy < 0 || this.sy > canvas.height - this.sh) {
      this.DY2 = this.DY2 * -1
    }
    this.sx -= this.DX2;
    this.sy += this.DY2;

    this.passos += looptempo
    if (this.passos > this.passosIntervalo) {
      if (this.frame >= this.maxframe) this.frame = 0;
      else this.frame++;
      this.passos = 0;
    }

    if (this.sx < 0 - this.width) {
      this.markedForDeletion = true
    }

    this.barraVida2.forEach(LifeVilao2 => {
      while (this.Vida2 !== LifeVilao2.w) {
        LifeVilao2.w -= 25
      }
    });

  }
} //class

class BackgraudJogo {
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

// Chefe do jogo


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



// barra vida dragao

class VidaDragao {
  constructor() {
    this.x = 1360
    this.y = 10
    this.width = 300
    this.height = 40
    this.w = 300
    this.color = 'green'

  }
  draw() {
    ctx.lineJoin = 'round'
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black'
    ctx.fillStyle = this.color
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.w, this.height)

  }

  update() {

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
    this.veloY = Math.random() * 2 + 2;
    this.veloX = Math.random() * 2 + 2;
    this.image = document.getElementById('chefe');
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
      this.veloY = this.veloY * -1
    }

    if (this.posX < 0 || this.posX > canvas.width) {
      this.veloX = this.veloX * -1

    }
    this.posX -= this.veloX;
    this.posY += this.veloY;
  }
}



class Dragao2 {
  constructor() {

    this.x = 0;
    this.y = 0;
    this.sW = 300;
    this.sH = 360;
    this.posX = 1600;
    this.posY = 100;
    this.width = 500;
    this.height = 509;
    this.image = document.getElementById('dragon');
    this.frame = 0;
    this.maxframe = 3
    this.markedForDeletion = false;
    this.speed = 5;
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

    if (this.posX < 0 - this.width) {
      this.posX = 1600
      Global = 4
    }
    this.posX -= this.speed;

  } //update
} //class


class AtaqueMonstro {
  constructor() {
    this.xM = 0;
    this.yM = 0;
    this.sWM = 200;
    this.sHM = 145;
    this.posXX = Dragon.posX;
    this.posYY = Dragon.posY + 180;
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

//gameOver

class BackGraundover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('gamehover')
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

  }

  update() {

  };
};

class PlayerOver {
  constructor() {
    this.xP = 0;
    this.yP = 0;
    this.sWP = 336;
    this.sHP = 200;
    this.posXP = 400;
    this.posYP = 500;
    this.widthP = 300;
    this.heightP = 200;
    this.DX = 2;
    this.DY = 2;
    this.markedForDeletion = false;
    this.image = document.getElementById('snoop3')

  }

  draw() {
    ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)
  }
  update() {

  };
};

class CreditosBg {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1700;
    this.height = 700;
    this.speed = 2;
    this.image = document.getElementById('credito')
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

  }

  update() {

  };
};


// d-_-b
