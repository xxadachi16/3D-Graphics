// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
class Screen {
    pixels = [];
    
    width;
    height;
    
    constructor() {
      width = 500;
      height = 500;
    }
    
    constructor(array, w, h) {
      pixels = array;
      width = w;
      height = h;
    }
    //changes a pixel at x, y based on colors[]
    setPixel(x, y, colors) {
      //pixel index is how high it is + it's horizontal position 
      //times 4 because each pixel has 4 values
      let pi = (y * this.height + x) * 4;
      pixels[pi+0] = colors[0];
      pixels[pi+1] = colors[1];
      pixels[pi+2] = colors[2];
      pixels[pi+3] = 255; //alpha transparency value
      //pixels[pi+3] = colors[3];
    }
    
    //fills the entire screen based on color[]
    fillScreen(color) {
      for (var i = 0; i < pixels.length; i += 4) { //for each "real" pixel, change its color to color
        setPixel(i % this.width, i / this.height, color);
      }
    }
}