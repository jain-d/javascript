let arr=[1,2,3,4,5,6]
let x='23';
//console.log(x);
let johnWick;



johnWick = function(guns='berretta',suit='black') {
    console.log(guns+" "+suit)
  };
 // johnWick('glock','blacknWHITE');
//

//-----------------------------------

/*let showPrimes=function(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
let rUn=showPrimes;
  rUn(14);
*/

//-----------------------------------

// let func1=(val1,val2,val3)=>{
//     val3(val1,val2);
// }

// func1(10,29,(param1, param2)=>console.log(param1+param2));
// func1(10,20,(param1, param2)=>console.log(param1-param2));

//-----------------------------------

// let testVariable=1;
// function timer(){
//     console.log(testVariable);
//     testVariable+=1;

//     if(testVariable===10)
//         clearInterval(id);
// }
// let id=setInterval(timer,500)

//-----------------------------------
/*
//---- 3 function declaration 2 callback function
let func1=(val1,val2,val3)=>{
  val3(val1,val2);
}

function add(param1, param2){
  console.log(param1+param2);
}
function subtract(param1, param2){
  console.log(param1-param2);
}
func1(10,20,add);
func1(10,20,subtract);


//------1 main function declaration 2 function expression
let func1=(val1,val2,val3)=>{
  val3(val1,val2);
}

let add=function(param1, param2){
  console.log(param1+param2);
};
let subtract=function(param1, param2){
  console.log(param1-param2);
}
func1(10,20,add);
func1(10,20,subtract);



//-------1 main function declaration 2 callback function expression
let func1=(val1,val2,val3)=>{
  val3(val1,val2);
}

func1(10,20,function(param1, param2){
  console.log(param1+param2);
});
func1(10,20,function(param1, param2){
  console.log(param1-param2);
});



//------1 main function declaration 2 callback arrow function expression
let func1=(val1,val2,val3)=>{
  val3(val1,val2);
}

func1(10,29,(param1, param2)=>console.log(param1+param2));
func1(10,20,(param1, param2)=>console.log(param1-param2));
*/
//-----------------------------------

/*
 let obj={
     name:'johnWick',
     age:52,
     city:'New York'
 }
// let obj2={}
//console.log(isEmpty(obj))

  for(let data in obj){
      console.log(obj[data]);
  }

// function isEmpty(obj){
//   return('info' in obj);
}
*/

//-----------------------------------

//let gross=0;

//let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130
//}

//  console.log(Sum(salaries));

//  function Sum(sr) {
//    for(data in sr){
//      gross += sr[data];
//    }
//    return gross;
//  }

//-----------------------------------

 // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// //multiplyNumeric(menu);

// for(props in menu){
//   console.log(menu[props]);
// }

// function multiplyNumeric(menu) {
//   for(props in menu) {
//     if(typeof menu[props]=='number') {
//       menu[props]*=2;
//     }
//   }
// }

//-----------------------------------

/*let abc='PASS';
 let bcg='PASS';

 let obj1={name:'John Wick', AGE:50}
 
 let obj2 = Object.assign({}, obj1);
// ---toggle ^ & v----
 //let obj2=obj1;

 console.log(obj1===obj2);
 //console.log(obj1);
 //console.log(obj2);*/
//-----------------------------------
/*
let man={name:'jack'};
let secret=Symbol('confidential')
let woman={name:'Ann',[secret]:'killer'};
woman.husband=man;

let ary=[1,2,3,7,8,9,4,5];
let etx=[]
for(item in ary) {
  etx.push(parseInt(item))
}
console.log(etx);*/

//----------------------------------

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
//recipeMap.forEach( (value, key) => {
//  console.log(`${key}: ${value}`);
//});

/*
let obj1={name:'John Wick', AGE:50}
let obj1Json=JSON.stringify(obj1);
console.log(obj1);
console.log(obj1Json);

*/

//-------------------------------
/*
let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000)


function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}

let timerId = setTimeout(tick, 2000)
*/
//---------------------------------------
//Promise
/*
let promise = new Promise(function(resolve, reject) {
  setTimeout(()=>{
    var escVel;
    escVel=Math.random();
    escVel*=100;
    
    if(escVel>20) {
      resolve(`Escape velocity achieved ${escVel}`);
    }
    else if(escVel===undefined) {
      reject('Ignition Failed');
    }
    else {
      reject(new Error(`Launch Failed ${escVel}`));
    }
},1000)
})

promise.then((value)=>{
  console.log(value);
}).catch((err)=>{
  console.log(err);
})
*/
//----------------------------
// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log);

//--------------------------------------------------

// let loadScriptPromise = function(src) 
// {
//   return new Promise((resolve, reject) => 
//   {
//     loadScript(src, (err, script) => {  if (err) reject(err);  else resolve(script); });
//   });
// };

//----------------------------------

// let ticker=0;
// let twitter = setInterval(()=>{
//   console.log(ticker);
  
//   if(ticker===10){
//     clearInterval(twitter);
//   }
//   ticker+=1;
// }, 200);