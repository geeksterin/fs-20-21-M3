let div = document.querySelector("div");

function onUi(data) {
  let moviesArr = data.description;
  //   console.log(moviesArr);
  moviesArr.forEach((movie) => {
    // console.log(movie);
    let ele = `
    <p>${movie["#TITLE"]}</p>
    <img src="${movie["#IMG_POSTER"]}" height="300" width="500">
    `;
    console.log(ele);
    div.innerHTML += ele;
  });
}

async function fetchNasaApi() {
  try {
    let res = await fetch("https:/search.imdbot.workers.dev/");
    let data = await res.json();
    console.log(data);
    onUi(data);
  } catch (error) {
    console.log("Erorr:- " + error);
  }
}

fetchNasaApi();

// let div = document.querySelector("div");

// function onUi(data) {
//   console.log(data);
//   div.innerHTML = `
//     <img src=${data.hdurl}>
//       `;
//   console.log(div);
// }

// async function fetchNasaApi() {
//   let res = await fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=Qf6RAcr81lA4IuSdQwP4Wvhj6bv2XJzaLaDNlQXi&date=2002-01-04"
//   );

//   let data = await res.json();
//   console.log(data);
//   onUi(data);
// }

// fetchNasaApi();

// let div = document.querySelector("div");
// function updateUI(data){
//     console.log(data);
//     div.innerHTML = `
//     <img src=${data.message}>
//     `;
//     console.log(div);
// }

// async function fetchData() {
//     let response = await fetch("https://dog.ceo/api/breeds/image/random");
//     let data = await response.json();
//     updateUI(data);
//     // console.log(data);
// }
// fetchData()

// document.querySelector("button").addEventListener("click", fetchData)

// let data = fetch("https://dog.ceo/api/breeds/image/random");
// // console.log(data);
// data.then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
