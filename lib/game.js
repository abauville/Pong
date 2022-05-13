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

var game = new Phaser.Game(config);


function create()
{
  const player_config = {
    width: 20,
    height: 100,
    x: 100
  }

  const ball    = this.add.rectangle(config.width/2, 200, player_config.width, player_config.width, 0xff0000);
  const player1 = this.add.rectangle(player_config.x, 100, player_config.width, player_config.height, 0xDD0202);
  const player2 = this.add.rectangle(config.width-player_config.x,100, player_config.width, player_config.height, 0xDD0202);
}

function update()
{

}