import "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let ball;
let player1;
let player2;

function create()
{
  const player_config = {
    width: 20,
    height: 100,
    x: 100
  }

  ball    = this.add.rectangle(config.width/2, 200, player_config.width, player_config.width, 0xff0000);
  player1 = this.add.rectangle(player_config.x, 100, player_config.width, player_config.height, 0xDD0202);
  player2 = this.add.rectangle(config.width-player_config.x,100, player_config.width, player_config.height, 0xDD0202);

  ball.vx = 2.1;
  ball.vy = 2.4;
}
let show = true

function update()
{
  if (show) {
    
    console.log(ball);
    
    show = false;
  }
  
  handleBallWallCollision();
  moveBall();
  
}

function moveBall() {
  ball.x += ball.vx;
  ball.y += ball.vy; 
}

function handleBallWallCollision() {
  if (ball.x+ball.width/2 >= config.width) {
    ball.vx = -Math.abs(ball.vx);
  }
  else if (ball.x-ball.width/2 <= 0) {
    ball.vx = Math.abs(ball.vx);
  }

  if (ball.y+ball.height/2 >= config.height) {
    ball.vy = -Math.abs(ball.vy);
  }
  else if (ball.y-ball.height/2 <= 0) {
    ball.vy = Math.abs(ball.vy);
  }
}