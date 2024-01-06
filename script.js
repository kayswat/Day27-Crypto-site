
const btc = document.getElementById('bitcoin');
const eth = document.getElementById('ethereum');
const doge = document.getElementById('dogecoin');


const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=USD",
    method: "GET",
    headers: {}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});

