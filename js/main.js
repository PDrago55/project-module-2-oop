const gameEngine = new Engine(document.getElementById("app"));

// const Menu =
const keydownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
};
document.addEventListener("keydown", keydownHandler);

///creating a timer to start game

gameStart = () => {
  function clock() {
    document.getElementById("start").innerHTML = --c;
    document.getElementById("intro");
    if (c === 0) {
      clearInterval(timer);
      // document.getElementById('countdown').innerText = "GO!"
      menu.style.display = "none";
      start.style.display = "none";
      intro.style.display = "none";
      console.log("remove instructions");
      gameEngine.gameLoop();
    }
  }
  let timer = setInterval(clock, 1000);
  let c = 4;
};

//toggle menubar for intructions

let $toggleDiv = document.getElementById("helpMe");
let toggled = true;
help = () => {
  if (!toggled) {
    toggled = true;
    $toggleDiv.style.display = "none";
  } else if (toggled) {
    toggled = false;
    $toggleDiv.style.display = "block";
  }
};
