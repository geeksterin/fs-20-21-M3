let productsArray =
    {
        name:"Real me c20",
        price: 3999,
        description:"high quality phone",
        "goin_off":420,
        reviews:[
            {
                user :"Akhil",
                rating: 4,
                comment:"I am impressed"
            },
            {
                user :"Priyanshu",
                rating: 1,
                comment:"I am not impressed"
            },
            {
                user :"Swati",
                rating: 3,
                comment:"Ok Ok"
            },
        ]
    }

    // console.log(productsArray["goin off"]);
    console.log(productsArray.goin_off);
    console.log(productsArray["price"]);


    // let studentObjJSON = JSON.stringify(productsArray);
    // // console.log(studentObjJSON);
    // let studentObj1 = JSON.parse(studentObjJSON);
    // console.log(studentObj1);

    // let keys = Object.entries(productsArray);
    // console.log(keys);
    // productsArray.hasOwnPropoerty

    // let Obj = productsArray.reviews[0];
    // for(let key in Obj){
    //     console.log(key +  ": " + Obj[key]);
    // }
// console.log(productsArray[0].reviews[0].rating);






// let studentname = "Akhil";
// let age = 22;
// let age2 = 23;
// let studentmarks = 78;

// let arr = ["Akhil", 22, 78];

// let studentObj = {
//     name:"Akhil",
//     age:22,
//     marks:78
// };
// studentObj.subject = "Hindi";
// studentObj.age = 20;
// delete studentObj.marks;
// console.log(studentObj);