// var startScreen = (function(input) {
//   // the red component of rgb
//   var hue = 0;
//   // are we moving toward red or black?
//   var direction = 1;
//   var transitioning = false;

//   var wasButtonDown = false;

//   function centerText(ctx, text, y) {
//     var measurement = ctx.measureText(text);
//     var x = (ctx.canvas.width - measurement.width) / 2;
//     ctx.fillText(text, x, y);
//   }

//   function draw(ctx, elapsed) {
//     var y = ctx.canvas.height / 2;

//     // create a css color from the `hue`
//     var color = "rgb(" + hue + ",0,0)";

//     // clear the entire canvas
//     // (this is not strictly necessary since we are always
//     // updating the same pixels for this screen, however it
//     // is generally what you need to do.)
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//     // draw the title of the game
//     // this is static and doesn't change
//     ctx.fillStyle = "white";
//     ctx.font = "48px monospace";
//     centerText(ctx, "My Awesome Game", y);

//     ctx.fillStyle = color;
//     ctx.font = "24px monospace";
//     centerText(ctx, "click to begin", y + 30);
//   }

//   function update() {
//     hue += 1 * direction;
//     if (hue > 255) direction = -1;
//     if (hue < 0) direction = 1;

//     var isButtonDown = input.isButtonDown();

//     var mouseJustClicked = !isButtonDown && wasButtonDown;

//     if (mouseJustClicked && !transitioning) {
//       transitioning = true;
//       gameLoop();
//     }

//     // record the state of input for use in the next frame
//     wasButtonDown = isButtonDown;
//   }

//   return {
//     draw: draw,
//     update: update
//   };
// })();
