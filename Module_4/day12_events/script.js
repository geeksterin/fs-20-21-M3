//project 2
let categoryFilter = document.getElementById("category-filter");
let productList = document.getElementById("product-list");
console.log(categoryFilter, productList);

let products = productList.querySelectorAll(".product");

categoryFilter.addEventListener('change', function(){
    let selectedCategory = categoryFilter.value;
    console.log(selectedCategory);

    // let products = productList.querySelectorAll(".product");
    console.log(products);

    products.forEach(function(product){
        let productAttribute = product.getAttribute('data-category');
        console.log(productAttribute);

        if(selectedCategory === productAttribute || selectedCategory == 'all'){
            product.style.display = 'block'
        }else{
            product.style.display = 'none'
        }
    })
})
















// // console.log("hello world!!!");
// let plusBtn = document.getElementById("incrementBtn");
// let minusBtn = document.getElementById("decrementBtn");
// let result = document.getElementById("result");
// console.log(plusBtn, minusBtn);

// let counter = 0;

// plusBtn.addEventListener("click", function () {
//   counter++;
//   result.innerText = counter;
//   // console.log(counter);
// });

// minusBtn.addEventListener("click", function () {
//   if (counter > 0) {
//     counter--;
//     result.innerText = counter;
//   }
//   // console.log(counter);
// });
