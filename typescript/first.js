function specialTest(p) {
    console.log("this is x:".concat(p.x, ", this is y:").concat(p.y));
}
var point = { y: 12, x: 24 };
specialTest(point);
