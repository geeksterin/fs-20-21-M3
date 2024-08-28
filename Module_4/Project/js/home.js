const getTrendingCoins = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await response.json();
    console.log(data);

    // for (let i = 0; i < data.length; i++) {
    //     const coinData = data[i]
    // }

    const coinsCointainer = document.getElementById("coinsContainer");
    data.coins.forEach(coinData => {
        const coinLogo = coinData.item.small;
        const coinName = coinData.item.name;
        const coniSymbol = coinData.item.symbol;
        const priceInINR = coinData.item.data.price;

        const currencyCard = `
            <img src="${coinLogo}" alt="Crypto currency logo">
            <div class="info-container">
                <h3>${coinName} (${coniSymbol})</h3>
                <span>₹ ${priceInINR.toFixed(4)}</span>
            </div>
        `;

        const currencyCardNode = document.createElement("div");
        currencyCardNode.classList.add("crypto-card");
        currencyCardNode.innerHTML = currencyCard;

        coinsCointainer.appendChild(currencyCardNode);
    });
        
    // new Splide('#coinsContainer').mount(window.splide.Extensions);
    // new Splide('#coinsContainer', {
    //     autoScroll: {
    //         speed: 2,
    //     },
    // });

};



getTrendingCoins();