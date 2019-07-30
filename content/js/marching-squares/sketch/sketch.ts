var PARAMS = {
    gridSize: 15,
    maxPointSize: 10,
    numberOfpoints: 100,
    colorsArray: <p5.Color[]>[]
};
var points: Point[];
var sliderGridSize: p5.Element;

var sketch = (p: p5) => {
    p.preload = () => {

    }

    p.setup = () => {
        p.createCanvas(500, 500);//p.windowWidth, p.windowHeight);

        points = [];

        for (var i = 0; i < PARAMS.numberOfpoints; i++) {
            var x = Math.random();
            var y = Math.random();
            var velocityX = Math.random() * 2 - 1;
            var velocityY = Math.random() * 2 - 1;
            var size = Math.random();// * PARAMS.maxPointSize;
            points.push(new Point(p, x, y, velocityX, velocityY, size))

        }
        sliderGridSize = p.createSlider(2, 30, PARAMS.gridSize, 2);
        sliderGridSize.position(10, 10);

        setParams();
    }

    p.windowResized = () => {
        p.resizeCanvas(500, 500);//p.windowWidth, p.windowHeight);
        setParams();
    }

    p.draw = () => {
        p.background(1);

        PARAMS.gridSize = <number>sliderGridSize.value();

        p.strokeWeight(2);
        var arr = MarchingSquaresHelper.getCurrentPointArray(p, points);
        MarchingSquaresHelper.drawSquares(p, arr);

        for (let p of points) {
            p.move();
        };

        p.textSize(15);
        p.noStroke();
        p.fill(255);
        p.text('fps: ' + p.frameRate(), 10, 50);

    }

    function setParams() {
        PARAMS.colorsArray = ColorHelper.getColorsArray(p, p.floor(p.width));
        PARAMS.maxPointSize = p.width / 15;
    }
}

var sketchP = new p5(sketch, document.getElementById("sketch"));