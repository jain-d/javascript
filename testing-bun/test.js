let password = "THEcurrent$T@T3!$organicallyDERIVED4mPASTinstances";

let hash = await Bun.password.hash(password);
let firstHalf = "THEcurrent$T@T3!$organically";
let secondHalf = "DERIVED4mPASTinstances";
const isCorrect = await Bun.password.verify((firstHalf + secondHalf), hash);
console.log(isCorrect);
