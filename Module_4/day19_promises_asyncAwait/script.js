//Async Await
// async await can be used with functions only
async function jokeStartEnd() {
  try {
    let res = fetch("");
    let fetchJoke = await fetchRandomJoke();
    let translatedJoke = await translteJoke(fetchJoke);
    let postedJoke = await postJoke(translatedJoke);
  } catch (e) {
    console.log("Error", e);
  }
}




// fetchRandomJoke((joke)=>{
//     console.log(joke);
//     translateJoke(joke,(translatedJoke)=>{
//         console.log(translatedJoke);
//         postJoke(translatedJoke,()=>{
//             console.log("Joke posted");
//         })
//     })
// })

// fetchRandomJoke()
// .then((joke)=>{
//     console.log(joke);
//     return translateJoke(joke);
// })
// .then((translatedJoke)=>{
//     console.log(translatedJoke);
//     return postJoke(translatedJoke);
// })
// .then(()=>{
//     console.log("joke posted");
// })
// .catch((err)=>{
//     console.log(err);
// })

let loggedIn = false;

function promise1() {
  let p1 = new Promise(function (res, rej) {
    if (loggedIn === true) {
      setTimeout(() => {
        res("Party krne chalte hai");
      }, 3000);
    } else {
      rej("Dosti Khatam");
    }
  });
  return p1;
}

promise1()
  .then(function (sandhya) {
    console.log(sandhya);
  })
  .catch((dosti) => {
    console.log(dosti);
  });

//   console.log(promise1());
//    promise1();
// console.log();

// console.log(promise1);

// fetchRandomJoke((joke)=>{
//     console.log(joke);
//     translateJoke(joke,(translatedJoke)=>{
//         console.log(translatedJoke);
//         postJoke(translatedJoke,()=>{
//             console.log("Joke posted");
//         })
//     })
// })

// console.log("hello world!!!");

// setTimeout(()=>{
//     console.log("Heelo from setimeout 1");
// }, 3000)

// setTimeout(()=>{
//     console.log("Heelo from setimeout 2");
// }, 5000)

// setTimeout(()=>{
//     console.log("Heelo from setimeout 3");
// }, 2000)
