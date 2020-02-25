//FULL GAME WIDTH

const GAME_WIDTH = 800;
const GAME_HEIGHT = 650;

//ENEMY HITBOX

const ENEMY_WIDTH = 25;
const ENEMY_HEIGHT = 70;
const MAX_ENEMIES = 3;

//PLAYER HITBOX

const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 73;

//ENEMY SPACE

const ENEMY_SPACE_WIDTH = 700;
const ENEMY_SPACE_HEIGHT = 650;

// BRIEFCASE HITBOX

const BRIEFCASE_WIDTH = 25;
const BRIEFCASE_HEIGTH = 50;

//the Death GIF//

const death = document.createElement("img");
death.src = "images/death.gif";
document.body.appendChild(death);
death.style.backgroundColor = "black";
death.style.padding = "20px";
death.style.position = "absolute";
death.style.zIndex = "5000000";
death.style.height = "777px";
death.style.width = "900px";
death.style.bottom = "10px";
death.style.right = "499px";
// death.sttyle.left = "125px";
death.style.display = "none";

// winning GIF

const win = document.createElement("img");
win.src = "images/won.gif";
document.body.appendChild(win);
win.style.backgroundColor = "black";
win.style.padding = "20px";
win.style.position = "absolute";
win.style.zIndex = "5000000";
win.style.height = "777px";
win.style.width = "900px";
win.style.bottom = "10px";
win.style.right = "499px";
win.style.display = "none";

// creating a black background to cover the game over screen

// const over = documents.createElement("p");
// document.body.appendChild(over);
// over.style.position = "absolute";
// over.style.backgroundColor = "black";
// over.style.zIndex = "60000000";
// over.style.width = "800px";
// over.style.height = "650px";

// death.style.display

//BRINGING IN MY BRIEFCASE

// const brief = document.createElement("img");
// brief.src = "/images/briefcase.png";
// brief.style.position = "absolute";
// brief.style.left = "10px";
// brief.style.bottom = "10px";
