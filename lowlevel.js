// ArrayBuffers and TypedArrays


let buf = new ArrayBuffer(16);
let viewBuf = new Uint16Array(buf);
viewBuf[0] = 255;
viewBuf[1] = 256;
viewBuf[2] = 299;
console.log(buf);

console.log(viewBuf);


// TypedArrays
/*
let arr = new Uint8Array(8);
arr[0] = 44;
arr[1] = 257; 
arr[2] = 45;

console.log(arr);
*/
