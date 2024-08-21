//throittling
let myThrottle = (fn, delay)=>{
    return function(){
        document.getElementById("myId").disabled = true;
        setTimeout(()=>{
            fn(3,5);
        }, delay)
    }
}


let newFun = myThrottle((a,b)=>{
    document.getElementById("myId").disabled = false;
    console.log("user has clicked the button!!!", a,b);
}, 3000);



//Debouncing
// let counter = 0;
// function count(){
//     console.log("encountered "+ counter++);  
// }

// function myDebounceFunc(func, delay){
//     let timer;
//     console.log(timer);
    
//     return function(){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         },delay)
//     }
// }

// let betterFunction = myDebounceFunc(count, 2000)



// let sum = function(a,b,c){

//     return{
//         getsumTwo:function(){
//             return a+b;
//         },
//         getsumThree:function(){
//             return a+b+c;
//         }
//     }
// }

// let store = sum(5,6,7);
// console.log(store.getsumTwo());
// console.log(store.getsumThree());





// let sum = function(a){
//     console.log("live viewes" +  a);
//     var c = 4;
//     return function(b){
//         return a+b+c;
//     }
// }

// let ans = sum(50);
// console.log(ans(20));










// a function that has access to the variables in its parent scope, even after the parent function has completed execution

// function outer(){
//     let a = 20;
//     return function(){
//         console.log(a);
//     }
// }

// let inner = outer();
// console.log(inner());







// var a = 10;
// function outer() {
//   var b = 20;
//   console.log(b);
//   function inner() {
//     var c = 30;
//     console.log(a, b, c);
//     function innerMost() {
//       var d = 40;
//       console.log(a++, --b, ++c, d--);
//       function innerMostFunc() {
//         var e = 50;
//         console.log(a, b, c, d, e);
//       }
//       innerMostFunc();
//     }
//     innerMost();
//   }
//   inner();
// }
// outer();














// console.log("Closures");

// let a = 90;
// function outer(){
//     let b = 20;
//     console.log(a++, b--);
//     function inner(){
//         let d = 30;
//         console.log(a++, b--, d--);
//     }
//     inner();
// }
// outer();
