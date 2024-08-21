//implicit type casting (type Coercion)
// console.log(10 == "10");
// console.log(typeof "10" + typeof 20);
// console.log(typeof ("10" + 20));

// explicit type conversion (type casting)
// let num = 30;
// let str = null;
// let strBool = Boolean(str);
// let numStr = String(num);
// console.log(typeof strBool, strBool);

// console.log("1030"+ 40);

// console.log(10 + "50");
// console.log(typeof (10 + "50"));


//condtionals:- if, else. if-else, switch statement
//loops:- for, while and do-while
// for(var i=0;i<10;i++){
//     console.log(i);
// }

//while loop
// let i = 11;
// while(i < 10){
//     console.log(i);
//     i++;
// }



//do while
// let i = 11;   
// do{
//     console.log(i);
//     i++;
// }while(i < 10);


// fucntions
// console.log(sum(10,20));

// function sum(a , b = 10){    //parametres  
//     // let a = 10;
//     // let b = 20;
//     let c = a + b;
//     // console.log(c);
//     console.log("jsdvsdafv");
//     return c;
// } 

// let ans = sum(10, 30);  //arguments 
// console.log(ans);




// scoping
// Global Scope and local/Block Scope
const a = 10;
function sum(){
    // var a = 10;
    console.log(a);
}
sum()
console.log(a);





// if(true){
//     const a = 10;
//     console.log(a);
// }
// console.log(a);