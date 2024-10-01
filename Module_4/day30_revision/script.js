let total = 0;
function add(a, b) {
  total = total + a + b;
  return total;
}

console.log(add(2, 5));
console.log(add(2, 5));
console.log(add(2, 5));

function step1(cb) {
  // Todo: Calculation
  cb();
}

function step2() {
  // Todo: Calc for step 2
}

step1(step2);

// function callbackFunction(name) {
//   console.log("Hello " + name);
// }

// function outerFunction(callback) {
//   let name = prompt("Please enter your name.");
//   callback(name);
// }

// outerFunction(callbackFunction);

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
   .then((dat) => {
    console.log("A")
    // ToDo : Perform your operation here

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
       .then((otherData) => {
        console.log("B")
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
           .then((otherData) => {
            console.log("C")
          });
      })
  })



  // async - await

  const res1 = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
  console.log("A")
  const res2 = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
  console.log("B")
  const res3 = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
  console.log("C")