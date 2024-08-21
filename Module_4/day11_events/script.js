// console.log("heelo WOlrd!!!");
let div = document.querySelector("a");
console.log(div);
div.addEventListener("click", function(eventObject){
    eventObject.preventDefault();
    console.log(eventObject);
})

let text = document.querySelector("input");
console.log(text);
text.addEventListener("keyup", function(eventObject){
    console.log(eventObject);
});