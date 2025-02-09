interface Point {
   x: number,
   y: number
}

function specialTest(p: Point) {
   console.log(`this is x:${p.x}, this is y:${p.y}`);
}

let point = {y: 12, x: 24};
specialTest(point);

let message: string = "This is a test";

console.log(message);




