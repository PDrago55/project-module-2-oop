const nextEnemySpot = enemies => {
  const enemySpots = ENEMY_SPACE_WIDTH / ENEMY_WIDTH;
  const spotsTaken = [true, true, false, false, false];
  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true;
  });
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};

const addBackground = root => {
  const bg = document.createElement("img");
  bg.src = "images/time.gif";
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;
  bg.style.position.fixed = "absolute";
  root.append(bg);
  // added my briefcase image to bg and root
  const brief = document.createElement("img");
  brief.src = "/images/briefcase.png";
  brief.style.position = "relative";
  brief.style.right = "61px";
  brief.style.bottom = "10";
  root.append(brief);
  const whiteBox = document.createElement("div");
  // We put a high z-index so that the div is placed over all other DOM nodes
  whiteBox.style.zIndex = 100;
  whiteBox.style.position = "absolute";
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = "#fff";
  const instructions = document.createElement("p"); //this is for the actual text on top
  instructions.innerText =
    "You are VINCE VEGA \n Get to the other side of the lane and DODGE Butch \n You have a dinner date with Marsellus Wallaces' wife \nUse the left / right arrow keys to navigate.";
  const background = document.createElement("div"); // this is for the color background
  background.style.backgroundColor = "blue";
  background.style.fontFamily = "Sans-Seriff";
  background.style.display = "block";
  background.appendChild(instructions); // append instructions onto box
  whiteBox.appendChild(background); // append box onto white box
  root.append(whiteBox);
};
