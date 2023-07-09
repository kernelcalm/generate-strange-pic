const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

import { generatePic } from "./drawing";

generatePic(ctx);
