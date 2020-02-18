class Player {
  constructor(root) {
    this.x = 2 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/vinceVega.gif";
    // this.domElement.width = "100%";
    // this.domElement.height = "auto";
    this.domElement.style.position = "absolute";
    // this.domElement.style.left = `${this.x}px`; //removed so that VEGA starts at the left end of game
    this.domElement.style.top = ` ${this.y}px`;
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }
  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }
  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }

  /// add a spcace-bar jump to this game...
}

// creating my briefcase hitbox detector

// isPlayerDead = () => {
//   let x = false;
//   this.enemies.forEach(function(item) {
//     //   console.log(this);
//     if (
//       item.x + ENEMY_WIDTH >= this.player.x &&
//       item.x <= this.player.x + PLAYER_WIDTH &&
//       item.y + ENEMY_HEIGHT >= this.player.y &&
//       item.y <= this.player.y + PLAYER_HEIGHT
//     ) {
//       console.log("x");
//       x = true;
//     }
//   }, this);
//   return x;
// };
