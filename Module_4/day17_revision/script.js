let conatiner = document.querySelector(".container");

for(let i =0;i<30;i++){
    // let div = document.createElement("div");
    let div = `<div class="color_conatiner"></div>`;
    // conatiner.appendChild(div);
    conatiner.innerHTML += div;
    console.log(div);
}

// function generatorColor(){
//     let color = '#' + Math.floor(Math.random()* 16777215).toString(16);
//     return color;
// }
// let ans1 = generatorColor();
// console.log(ans1);



function randomColor(){
    let chars = "0123456789abcdef";
    let color = "#";
    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        // console.log(chars[randomNumber]); 
        color += chars[randomNumber];
        // console.log(color);
    }
    return color;
}
// randomColor();


function generateColors(){
    // console.log(conatiner);
    let colorContainer = document.querySelectorAll(".color_conatiner");
    console.log(colorContainer);
    
    colorContainer.forEach((ele)=>{
        let newColor = randomColor();
        ele.style.background = newColor;
        ele.innerText = newColor;
    })
    
}
window.addEventListener("load", generateColors);