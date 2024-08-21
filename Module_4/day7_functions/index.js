var a = 8;

((a)=>{
    a = 9;
    console.log(a);
})(a);

console.log(a);


// var b = 10;
// function print(){
//     let b=8;
//     console.log(b);
// }
// print()
// console.log(b);


// (function(){
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("IIFE from arrow function");
// })()


// let add = function(x,y){
//     return x+y;
// }


// let add = (x,y) => x+y;


// let sqyare = function(x,){
//     return x*x;
// }

// let square = (x)=>x*x;

// let addAndSquare = function(x,y){
//     return sqyare(add(x,y));
// }

// let add = (x,y) => x+y;
// let square = (x)=>x*x;
// let addandsquare = (x,y)=>square(add(x,y));
// console.log(addandsquare(2,3));

// function returnFun(){
//     return function(){
//         console.log("hello");
//     }
// };

// const returnFunc = () => () => {
//     console.log("hello");
// };
// returnFunc()();
// let ans = returnFun();
// console.log(ans());




// function getCapture(camera, camera2){
//     console.log(camera);
//     camera();
//     camera2();
// }

// function capture(){
//     console.log("Captured the world");
// }

// // let a1 =10;
// // let b =30;
// // sum(a1, 50)

// getCapture(capture, function(){
//     console.log("Captured the world 2 times");
// });














//variable expression
// let a = 10;

// setTimeout(function(){
//     console.log("hello World");
// }, 3000)

//function expression or Anonymous function
// let functionVaraible = function(a,b){
//     return a+b;
// };

// console.log(functionVaraible(5,90));


// function addToCart(){
//     // console.log("Yes your product is added to cart");
//     return "Yes your product is added to cart";
//     console.log("kjksjgksaejf");
// }

// let ans = addToCart();

// console.log(ans);