
for (var y = ymin; y <= ymax;="" y++)="" {="" for="" (var="" x="xmin;" <="xmax;" x++)="" var="" insidepoint="p.inside(x" *="" params.gridsize,="" y="" params.gridsize);="" if="" (insidepoint="">= 1) {
            try {
                res[y][x] = Math.max(insidePoint, res[y][x]);
            }
            catch (ex) {
                console.log(y, x);
            }
        }
    }
}</=>