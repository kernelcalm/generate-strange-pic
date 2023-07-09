import { getRandomNumber, generateText } from "./utils";
export function drawText(
  ctx,
  text,
  {
    color = "black",
    mode = 1,
    pos = [0, 0],
    width = ctx.canvas.width,
    height = ctx.canvas.height,
  } = {}
) {
  const textWidth = 32 * text.length;
  if (pos[0] + textWidth > width) {
    pos[0] = width - textWidth;
  }
  if (pos[1] + 48 > height) {
    pos[1] = height - 48;
  }
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillStyle = color;
  ctx.font = "bold 48px verdana, sans-serif ";
  if (mode !== 1) {
    ctx.strokeText(text, pos[0], pos[1]);
    return;
  }
  ctx.fillText(text, pos[0], pos[1]);
}

export function generatePic(
  ctx,
  { width = ctx.canvas.width, height = ctx.canvas.height } = {}
) {
  ctx.fillStyle = "rgb(255,0,0)";
  ctx.fillRect(0, 0, width, height);

  const textLen = Math.floor(getRandomNumber(1, 7));
  const textContent = generateText(textLen, 33, 126);
  drawText(ctx, textContent, {
    pos: [getRandomNumber(0, 640), getRandomNumber(0, 480)],
  });

  ctx.fillStyle = "gray";
  for (let c = 0; c < height; c++) {
    for (let i = 0; i < width; i += getRandomNumber(1, 5)) {
      ctx.fillRect(i, c, 1, 1);
    }
  }
  return ctx.canvas;
}
