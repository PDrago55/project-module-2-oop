// bringing in click to start methods

const start = document.getElementById("start");
const menu = document.getElementById("menu");
const intro = document.getElementById("intro");

class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    console.log(this.player);
    this.enemies = [];
    addBackground(this.root);
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    if (this.isPlayerDead()) {
      death.style.display = "block";
      function timedRefresh(timeoutPeriod) {
        setTimeout("location.reload(true);", timeoutPeriod);
      }
      window.onload = timedRefresh(8000);
      return;
    }
    if (this.player.x === 740) {
      win.style.display = "block";
      function fuck(out) {
        setTimeout("location.reload(true);", out);
      }
      window.onload = fuck(4000);
      return;
    }
    setTimeout(this.gameLoop, 20);
  };

  //hitbox detection//

  isPlayerDead = () => {
    let x = false;
    this.enemies.forEach(function(item) {
      //   console.log(this);
      if (
        item.x + ENEMY_WIDTH >= this.player.x &&
        item.x <= this.player.x + PLAYER_WIDTH &&
        item.y + ENEMY_HEIGHT >= this.player.y &&
        item.y <= this.player.y + PLAYER_HEIGHT
      ) {
        x = true;
      }
    }, this);
    return x;
  };
}

//   if (this.player.x === item.x) {
//     // console.log(this.player, item);
//     if (this.player.y < item.y) {
//       console.log("collision");
//     }
//   }
// }, this);

//             console.log(this);
//             if((item.x + ENEMY_WIDTH) >= (this.player.x) && (item.x) <=
//             (this.player.x + PLAYER_WIDTH) && (item.y + ENEMY_HEIGHT) >=
//             (this.player.y) && (item.y) <= (this.player.y + PLAYER_HEIGHT))
//             console.log(item)
//             return true;
//         }, this)
//     }

// if (catHitbox.x < burgerHitbox.x + burgerHitbox.width &&
//     catHitbox.x + catHitbox.width > burgerHitbox.x &&
//     catHitbox.y < burgerHitbox.y + burgerHitbox.height &&
//     catHitbox.y + catHitbox.height < burgerHitbox.y)
// alert('you dead')
// return true;
// console.log(isPlayerDead)
// let catHitbox = {x: 10, y: 5, height: 156, width: 75}
// let burgerHitbox = {x: 'this.x', y: 'y', height: 54, width: 75}
