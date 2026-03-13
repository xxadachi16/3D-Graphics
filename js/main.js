import {Screen} from "./types.js";

//OneCompiler start up code
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

const c = curDoc.getElementById("canvas");
const ctx = c.getContext('2d');
//Simpler height and width
const width = c.width;
const height = c.height;
//Per-pixel control of canvas
let imageData = ctx.createImageData(width, height);

const s = new Screen();

function main() {
  s.fillScreen([0, 0, 0, 255]);
}