class MarchingSquaresHelper {
    // http://www.huderlem.com/demos/marchingsquares.html
    //  1-- 2
    //  |   |
    //  8---4
    static drawForCombination(p: p5, x: number, y: number, bitmask: string) {

        var drawMesh = false;
        var drawLine = true;

        var midpoint = 0.5;
        var xPos = (x + 1) * PARAMS.gridSize;
        var yPos = (y + 1) * PARAMS.gridSize;
        var xZero = (x) * PARAMS.gridSize;
        var yZero = (y) * PARAMS.gridSize;
        var xMidpoint = xPos - (PARAMS.gridSize / 2);
        var yMidpoint = yPos - (PARAMS.gridSize / 2);

        if (bitmask == '0000') {
            // nothing
        }
        else if (bitmask == '0001') {
            if (drawLine) p.line(xZero, yMidpoint, xMidpoint, yZero);
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, midpoint);
                p.vertex(midpoint, 0);
                p.vertex(0, 0);
                p.endShape();
            }
        }
        else if (bitmask == '0010') {
            if (drawLine) p.line(xPos - (PARAMS.gridSize / 2), yZero, xPos, yMidpoint);
            if (drawMesh) {
                p.beginShape();
                p.vertex(1 - midpoint, 0);
                p.vertex(1, midpoint);
                p.vertex(1, 0);
                p.endShape();
            }
        }
        else if (bitmask == '0011') {
            if (drawLine) p.line(xZero, yMidpoint, xPos, yMidpoint);
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, midpoint);
                p.vertex(1, midpoint);
                p.vertex(1, 0);
                p.vertex(0, 0);
                p.endShape();
            }
        }
        else if (bitmask == '0100') {
            if (drawLine) p.line(xPos - (PARAMS.gridSize / 2), yPos, xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                p.beginShape();
                p.vertex(1 - midpoint, 1);
                p.vertex(1, 1 - midpoint);
                p.vertex(1, 1);
                p.endShape();
            }
        }
        else if (bitmask == '0101') {
            //pop();
            MarchingSquaresHelper.drawForCombination(p, x, y, '0001');
            //pop();
            MarchingSquaresHelper.drawForCombination(p, x, y, '0100');
        }
        else if (bitmask == '0110') {
            if (drawLine) p.line(xMidpoint, yZero, xMidpoint, yPos);
            if (drawMesh) {
                p.beginShape();
                p.vertex(midpoint, 0);
                p.vertex(midpoint, 1);
                p.vertex(1, 1);
                p.vertex(1, 0);
                p.endShape();
            }
        }
        else if (bitmask == '0111') {
            if (drawLine) p.line(xZero, yPos - (PARAMS.gridSize / 2), xMidpoint, yPos);
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, 1 - midpoint);
                p.vertex(midpoint, 1);
                p.vertex(1, 1);
                p.vertex(1, 0);
                p.vertex(0, 0);
                p.endShape();
            }
        }
        else if (bitmask == '1000') {
            if (drawLine) p.line(xZero, yPos - (PARAMS.gridSize / 2), xMidpoint, yPos);
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, 1 - midpoint);
                p.vertex(midpoint, 1);
                p.vertex(0, 1); y
                p.endShape();
            }
        }
        else if (bitmask == '1001') {
            if (drawLine) p.line(xPos - (PARAMS.gridSize / 2), yZero, xPos - (PARAMS.gridSize / 2), yPos);
            if (drawMesh) {
                p.beginShape();
                p.vertex(1 - midpoint, 0);
                p.vertex(1 - midpoint, 1);
                p.vertex(0, 1);
                p.vertex(0, 0);
                p.endShape();
            }
        }
        else if (bitmask == '1010') {
            MarchingSquaresHelper.drawForCombination(p, x, y, '0010');
            MarchingSquaresHelper.drawForCombination(p, x, y, '1000');
        }
        else if (bitmask == '1011') {
            if (drawLine) p.line(xPos - (PARAMS.gridSize / 2), yPos, xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                p.beginShape();
                p.vertex(1 - midpoint, 1);
                p.vertex(1, 1 - midpoint);
                p.vertex(1, 0);
                p.vertex(0, 0);
                p.vertex(0, 1);
                p.endShape();
            }
        }
        else if (bitmask == '1100') {
            if (drawLine) p.line(xZero, yPos - (PARAMS.gridSize / 2), xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, 1 - midpoint);
                p.vertex(1, 1 - midpoint);
                p.vertex(1, 1);
                p.vertex(0, 1);
                p.endShape();
            }
        }
        else if (bitmask == '1101') {
            if (drawLine) p.line(xMidpoint, yZero, xPos, yMidpoint);
            if (drawMesh) {
                p.beginShape();
                p.vertex(midpoint, 0);
                p.vertex(1, midpoint);
                p.vertex(1, 1);
                p.vertex(0, 1);
                p.vertex(0, 0);
                p.endShape();
            }
        }
        else if (bitmask == '1110') {
            if (drawLine) p.line(xMidpoint, yZero, xZero, yMidpoint);
            if (drawMesh) {
                p.beginShape();
                p.vertex(midpoint, 0);
                p.vertex(0, midpoint);
                p.vertex(0, 1);
                p.vertex(1, 1);
                p.vertex(1, 0);
                p.endShape();
            }
        }
        else if (bitmask == '1111') {
            // line(midpoint, 0, 0, midpoint);
            if (drawMesh) {
                p.beginShape();
                p.vertex(0, 0);
                p.vertex(0, 1);
                p.vertex(1, 1);
                p.vertex(1, 0);
                p.endShape();
            }
        }
        else {
            console.log('bad number' + bitmask);
        }
    }

    static getCurrentPointArray(p: p5, points: Point[]): number[][] {

        var res: number[][] = [];

        for (var y = 0; y < p.height / PARAMS.gridSize; y++) {
            res[y] = [];
            for (var x = 0; x < p.width / PARAMS.gridSize; x++) {
                res[y][x] = 0;
            }
        }

        var maxGridX = p.width / PARAMS.gridSize;
        var maxGridY = p.height / PARAMS.gridSize;
        for (let point of points) {

            //for (var i = 0; i < p.r / 2; i++) {
            var xmin = Math.max(0, p.floor((point.x - point.r) / PARAMS.gridSize));
            var ymin = Math.max(0, p.floor((point.y - point.r) / PARAMS.gridSize));
            var xmax = Math.min(maxGridX - 1, p.ceil((point.x + point.r) / PARAMS.gridSize));
            var ymax = Math.min(maxGridY - 1, p.ceil((point.y + point.r) / PARAMS.gridSize));

            // all grid x and y touched by this point
            for (var y = ymin; y <= ymax; y++) {
                for (var x = xmin; x <= xmax; x++) {

                    var insidePoint = point.inside(x * PARAMS.gridSize, y * PARAMS.gridSize);
                    // var d = dist(p.x, p.y, x * PARAMS.gridSize, y * PARAMS.gridSize)

                    if (insidePoint >= 1) {
                        //console.log(d, p.r);
                        try {
                            res[y][x] = Math.max(insidePoint, res[y][x]);
                        } catch (ex) {
                            console.log(y, x);
                        }
                    }
                }
            }
        }

        return res;
    }

    //  1-- 2
    //  |   |
    //  8---4

    static drawSquares(p: p5, pointsArr: number[][], ) {

        for (var y = 1; y < pointsArr.length - 1; y++) {
            var point = pointsArr[y];
            for (var x = 1; x < point.length - 1; x++) {

                var p1 = pointsArr[y][x] > 0 ? '1' : '0';
                var p2 = pointsArr[y][x + 1] > 0 ? '1' : '0';
                var p4 = pointsArr[y + 1][x + 1] > 0 ? '1' : '0';
                var p8 = pointsArr[y + 1][x] > 0 ? '1' : '0';

                // TODO: linear interpolation - pass in values not just 1 or 0

                p.stroke(PARAMS.colorsArray[p.floor(x * PARAMS.gridSize)]);
                MarchingSquaresHelper.drawForCombination(p, x, y, p8 + p4 + p2 + p1);

            }
        }


    }

}