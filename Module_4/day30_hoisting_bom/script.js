// console.log(aaafn);
// aaafn();

// var aaa = 10;
// let aaafn = function () {
//     console.log("Hello");
// }




// aaavar = 10;
// console.log(aaavar);
// console.log(aaalet);
// console.log(aaaconst);




// var aaavar = 1;
// let aaalet = 2;
// const aaaconst = 3;


// console.log("Hello");
// console.log(a);
// const a = 10;



// aa();

// function aa() {
//     console.log("Hello there");
// }


// console.log(a);
// var a = 10;

// let b = 5;

// const c = 15;

// var a; // Declaration
// a = 10; // Value assignment, Initialization


// DOM & BOM

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

const successCallback = (location) => {
    console.log(location)
    //Todo : 
}

const errorCallback = (err) => {
    console.log(err)
};


const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}

// setInterval(getUserLocation, 2000)