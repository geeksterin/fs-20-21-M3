//api.coingecko.com/api/v3/coins/wrapped-bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false

// Q. Convert following string "id=bitcoin&name=test&coin=crypto" into below output
// { id: bitcoin, name: test, coin: crypto  }

const fetchCoinDetails = async () => {
  //   const queryString = location.search.replace("?", "");
  //   const kvPair = queryString.split("&");
  //   const queryParams = {};
  //   kvPair.forEach((pair) => {
  //     const [k, v] = pair.split("=");
  //     queryParams[k] = v;
  //   });

  //   const coinId = queryParams.id;
  //   console.log(coinId);

  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams);
  const coinId = queryParams.get("id");
  console.log(coinId);

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  const data = await res.json();
  console.log(data);

  const coinLogo = data.image.large;
  const { name, symbol } = data;
  const description = data.description.en;
  const { inr, usd, eur, gbp } = data.market_data.ath;

  const nameElement = document.getElementById("name");
  nameElement.innerText = `${name} (${symbol})`;

  const logoElement = document.getElementById("logo");
  logoElement.src = coinLogo;

  const inrElement = document.getElementById("inr");
  inrElement.innerText = `₹ ${inr}`;

  const usdElement = document.getElementById("usd");
  usdElement.innerText = `$ ${usd}`;

  const eurElement = document.getElementById("eur");
  eurElement.innerText = `€ ${eur}`;

  const gbpElement = document.getElementById("gbp");
  gbpElement.innerText = `£ ${gbp}`;

  const descriptionElement = document.getElementById("description");
  descriptionElement.innerText = description;
};

fetchCoinDetails();
