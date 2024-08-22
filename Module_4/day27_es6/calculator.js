function add () {

}

function subtract() {

}

function multiply() {

}

function divide() {

}


add();
subtract();


var a = 10;
if(true) {
    var a = 20;
    console.log(a)
}

console.log(a)

let b = 10;
if(true) {
    let b = 20;
    b = 30;
    console.log(b)
}
console.log(b)

const c = 10;
if(true) {
   const c = 20;
    console.log(c)
}
console.log(c)

// const users = ["John","Jack"];
// users = ["Alex"];
// users.push("Alex")
// console.log(users)

// const name = "Rahul";
// name = "Divyansh";

... => Spread Operator / Rest Operator

const user1 = {
    name: "John",
    address: "123 ABC Street",
    age: 30
}
console.log(user1);

// const user2 = user1; 
const user2 = { ...user1, bloodGroup: "A+" } // Shallow copy / Extraction of values
user2.age = 50;

const users1 = ["A","B","C","D"]

function add(a,b) {
    return a+b;
}

function add(...nums) {
    let total = 0;
    for (let i = 0;i<nums.length;i++) {
        total = total + nums[i];
    }
    return total;
}

add(1,2)


Arrow Functions

const sum = function(a,b) {
    return a+b;
}

const sumArrow = (a,b) => a+b; // Implicit return


Objects vs Map

Array vs Set

const arr = [1,2,5,3,2,4,1,3]

const uniqueArr = new Set(arr)


String Literals

const name = "Divyansh"
const msg = `Hello ${name}`

function greet(name = "There") {
    console.log(`Hello ${name}`)
}



// const label1 = "name"

// const user = {
//     [label1]: "John"
// }


const key1 = "name";
const key2 = "age";
const user = {
    [key1]: "ABC",
    [key2]: "XYZ"
}

const name1 = Symbol("name")
const name2 = Symbol("name")


