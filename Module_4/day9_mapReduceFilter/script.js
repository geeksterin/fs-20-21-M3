//map function
//map function is used to iterate over the array and return a new array
let productsArray = [
  { id: 1, name: "Product 1", price: 99 },
  { id: 2, name: "Product 2", price: 199 },
  { id: 3, name: "Product 3", price: 139 },
  { id: 4, name: "Product 2", price: 49 },
  { id: 5, name: "Product 6", price: 149 },
  { id: 6, name: "Product 2", price: 499 },
];

// let numbers = [1,2,3,4,5,6];
let sum = productsArray.reduce(function(accumulator, currentvalue){
    return accumulator * currentvalue.price;
}, 1)
console.log(sum);

// acc -> 0+99
// acc->99+199=>298
// acc->298+139=>437
// acc=>437+49=>




// let ans1 = productsArray
//   .map((product) => product.price * 5)
//   .filter((product) =>{
//     return product < 1000;
//   });
// let ans = productsArray.map(function(product){
//     return product.price*5;
// }).filter(function(product){
//     return product>1000;
// })
// console.log(ans1);

// let multiplyArray = productsArray.map(function(product){
//     return product.price * 5;
// })
// let filteredPriceProduct = multiplyArray.filter(function(product){
//     return product < 999;
// })
// console.log(filteredPriceProduct);

// let filteredArray = productsArray.filter(function(product){
//     return product.price >= 199 && product.name === "Product 2";
// })
// console.log(filteredArray);

// let numbers = [1,2,3,4,5,6,7,8,9];
// let filteredArray = numbers.filter(function(number){
//     return number%2===0;
// })
// console.log(filteredArray);

// let changedPriceArray = productsArray.map(function(product, idx, arr){
//     return {
//         id: idx,
//         name:product.name,
//         price:`$${product.price}`
//     }
// });
// console.log(changedPriceArray);
// console.log(productsArray);

//for of
// let colors = ["red", "blue", "voilet","purple"];
// for(let color of colors){
//     console.log(color);
// }

// forEach lloop
// let productsArray = [
//     {id:1, name:"Product 1", price:99},
//     {id:2, name:"Product 2", price:199},
//     {id:3, name:"Product 3", price:139},
//     {id:4, name:"Product 4", price:49},
//     {id:5, name:"Product 6", price:149},
//     {id:6, name:"Product 7", price:499}
// ]

// productsArray.forEach(function(product){
//     console.log(product.id);
//     console.log(product.name);
//     console.log(product.price);
// })

// let numbers = [10,20,30,40,50,60,70];
// function hello(){
//     console.log("Hello");
// }
// numbers.forEach(function(value){
//     console.log(value);
// });
