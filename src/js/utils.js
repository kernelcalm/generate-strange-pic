export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
export function generateText(len, charCodeStart, charCodeEnd) {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(getRandomNumber(charCodeStart, charCodeEnd));
  }
  return result;
}

export async function convert2DataUrl(blobOrFile) {
  let reader = new FileReader();
  reader.readAsDataURL(blobOrFile);
  await new Promise(
    (resolve) =>
      (reader.onload = function () {
        resolve();
      })
  );
  return reader.result;
}

export async function convertOffCanvasToDataUrl(canv) {
  const blob = await canv.convertToBlob();
  const dataUrl = await convert2DataUrl(blob);
  return dataUrl;
}
