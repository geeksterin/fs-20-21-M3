let numbers = [1,2,3,4,5];
numbers.forEach((number, index, arr)=>{
    // console.log(number, index, arr);
    console.log(number*2);
});
console.log(numbers);
console.log("------------------------------------------");
let numbersMap = numbers.map((number, index, arr)=>{
    // console.log(number, index, arr);
    return number*2;
});

console.log(numbersMap);
console.log(numbers);


// let a = 10;
// let b = 20;
// function outer(){
//     let c = 30;
//     return function inner(){
//         let d = 40;
//         return {a,b,c,d};
//     }
// }

// let result = outer();
// result();
// console.log(result);


// var l = 2;
// var w = 3;

// function calculate(length, width){
//     var area = length * width;
//     return area;
// }

// var rectangle = calculate(l, w);