class Point {
   constructor(
      private p: p5,
      private pointX: number,
      private pointY: number,
      public vx: number,
      public vy: number,
      private radius: number
   ) { }

   // http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/
   inside(x: number, y: number) {

      var res = (this.r * this.r) / (((x - this.x) * (x - this.x)) + ((y - this.y) * (y - this.y)))
      //console.log(res);
      return res;
   }

   move() {
      this.pointX += this.vx / this.p.width;
      this.pointY += this.vy / this.p.height;

      if (this.x - this.r < 0 || this.x + this.r > this.p.width) {
         this.vx *= -1;
      }
      if (this.y - this.r < 0 || this.y + this.r > this.p.height) {
         this.vy *= -1;
      }
   }
   get r() {
      // console.log(this.r, PARAMS.maxPointSize);
      return this.radius * PARAMS.maxPointSize;
   }

   get x() {
      return this.pointX * this.p.width;
   }
   get y() {
      return this.pointY * this.p.height;
   }

}