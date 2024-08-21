let div1 = document.querySelector("div");

div1.addEventListener("click", function(e){
    if(e.target.innerText === "Button 2"){
        console.log("Hello akhil, how are you");
    }
    else{
        console.log(e.target.innerText);
    }

    // console.log(e);
})






// let btns = document.querySelectorAll("button");
// console.log(btns);

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         console.log(e.target.innerText);
//     })
// })







// // console.log("heelo ");
// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");
// // console.log(div1, div2, div3);

// div1.addEventListener("click", function(e){
//     console.log("div1 is clicked!");
//     e.stopPropagation();
// })
// div2.addEventListener("click", function(e){
//     console.log("div2 is clicked!");
//     e.stopPropagation();
// })
// div3.addEventListener("click", function(e){
//     console.log("div3 is clicked!");
//     e.stopPropagation();
// })
// document.getElementById("b1").addEventListener("click", function(){
//     console.log("body is clicked");
// })