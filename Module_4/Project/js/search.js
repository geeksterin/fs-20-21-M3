// https://api.coingecko.com/api/v3/search?query=dog
// console.log("Search file");

// const onMoreInfoClick = (e) => {
//   console.log(e);
// };

function onMoreInfoClick(id) {
  // console.log(e);
  window.location.href = `details.html?id=${id}`;
}

const form = document.getElementById("searchForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";
  const loader = document.getElementById("loader");

  // Show loader
  loader.style.display = "block";

  const inputBox = document.getElementById("inputBox");
  console.log(inputBox.value);

  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${inputBox.value}`
  );
  const data = await res.json();
  // console.log(data);

  loader.style.display = "none";

  data.coins.forEach((coin, index) => {
    const coinCard = document.createElement("div");
    coinCard.classList.add("coin-card");
    // coinCard.id = coin.id;
    coinCard.innerHTML = `
        <span>${index + 1}</span>
        <img src="${coin.thumb}" alt="Crypto Thumbnail">
        <h3>${coin.name}</h3>
        <h3>${coin.symbol}</h3>
        <button onclick="onMoreInfoClick('${coin.id}')">More Info</button>
      `;
    cardsContainer.appendChild(coinCard);
  });
});
