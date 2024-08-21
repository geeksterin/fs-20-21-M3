function f1(){
    console.log("f1");  
}

function f4(){
    console.log("f4");  
}

function f2(){
    console.log("f2");  
}

function f3(){
    setTimeout(f4, 1000);
    console.log("f3");  
}

function main(){
    console.log("main");
    setTimeout(f1, 1000);
    f3();
    setTimeout(f2, 500);
}

main();




// function printMe(){
//     console.log("print me");
// }

// function test(){
//     console.log("test");
// }

// setTimeout(printMe, 2000);
// test();



// console.log("start");

// setTimeout(()=>{
//     console.log("from settimeout");
// }, 5000);

// setTimeout(()=>{
//     console.log("from settimeout 2222");
// }, 6000);

// setTimeout(function(){
//     console.log("from settimeout 2222");
// },3000)

// setTimeout()
// let i = 0;
// setInterval(function(){
//     console.log("from settimeout 2222", i++);
// },1000)

// console.log("end");









//synachronous example

// console.log("start");
// function fun1(){
//     console.log("fn1 started!!");

//     for(let i=0;i<10000000;i++){

//     }

//     console.log("fn1 ended!!!"); 
    
// }

// function fun2(){
//     console.log("fn2 started!!");

//     for(let i=0;i<100000000;i++){

//     }

//     console.log("fn2 ended!!!"); 
    
// }

// fun1()
// fun2();
// console.log("end");


