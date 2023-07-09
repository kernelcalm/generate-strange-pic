import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import { generatePic } from "./drawing";
import { convertOffCanvasToDataUrl } from "./utils";

const initCanvas = (width, height) => new OffscreenCanvas(width, height);
const ctx = initCanvas(640, 480).getContext("2d");
const feed = document.querySelector(".feedspace");
const sendBtn = document.querySelector("#send");

const processMessageTemplate = (src) => {
  return `

  <div class="message mb-3">
              <img src="${src}" alt="#" class="img">
            </div>

  `;
};

const addMessageToFeed = (messageProcessedTemplate) => {
  feed.insertAdjacentHTML("beforeend", messageProcessedTemplate);
};

sendBtn.addEventListener("click", async (e) => {
  const picDataUrl = await convertOffCanvasToDataUrl(generatePic(ctx));
  const messageProcessedTemplate = processMessageTemplate(picDataUrl);
  addMessageToFeed(messageProcessedTemplate);
  feed.scroll({
    top: feed.scrollHeight,
    behavior: "smooth",
  });
});
