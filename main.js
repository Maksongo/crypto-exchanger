// SignIn открытие формы

const SigninButton = document.querySelector("#NavbarSigninID");
const SignInCloseButton = document.querySelector(".SignIn_wrapper_form_close")
const SignInWrapper = document.querySelector(".SignIn_wrapper");

SigninButton.addEventListener('click', () => {
    SignInWrapper.style.display = "block";
});


SignInCloseButton.addEventListener('click', () => {
    SignInWrapper.style.display = "none";
});

// SignUp открытие формы

const SignUpButton = document.querySelector(".nav_signup");
const SignUpCloseButton = document.querySelector(".SignUp_wrapper_form_close")
const SignUpWrapper = document.querySelector(".SignUp_wrapper");

SignUpButton.addEventListener('click', () => {
    SignUpWrapper.style.display = "block";
});

SignUpCloseButton.addEventListener('click', () => {
    SignUpWrapper.style.display = "none";
});

// Exchanger первый input список монет

const ExchangerFirstCoinList = document.querySelector(".exchanger_form_main_firstcoin")
const ExchangerFirstCoinButton = document.querySelector("#Exchanger_firstinputID")
  
  ExchangerFirstCoinButton.addEventListener('click', () =>{
    if(ExchangerFirstCoinList.style.display === 'none' || ExchangerFirstCoinList.style.display === ''){
        ExchangerFirstCoinList.style.display = 'block';
    }
    else{
        ExchangerFirstCoinList.style.display = 'none';
    }
  })

// Exchanger второй input список монет

const ExchangerSecondCoinList = document.querySelector(".exchanger_form_main_secondcoin")
const ExchangerSecondCoinButton = document.querySelector("#Exchanger_secondinputID")

ExchangerSecondCoinButton.addEventListener('click', () =>{
    if(ExchangerSecondCoinList.style.display === 'none' || ExchangerSecondCoinList.style.display === ''){
        ExchangerSecondCoinList.style.display = 'block';
    }
    else{
        ExchangerSecondCoinList.style.display = 'none';
    }
  })

// Получаем информацию о монетах по API 

const exchangerFirstCoinDiv = document.querySelector(".exchanger_form_main_firstcoin_wrapper")
const exchangerSecondCoinDiv = document.querySelector(".exchanger_form_main_secondcoin_wrapper")

let getBitcoinPrice = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en`
    );
  
    const data = await response.json();
    return data;
};

getBitcoinPrice()
  .then((data) => {
    updateUI(data);
  })
  .catch((err) => console.log(err));

let updateUI = (data) => {

const rows = data.slice(0, 10).map((coin) => `
    <div class="exchanger_firstcoin_coin">
    <img src="${coin.image}" alt="${coin.name}" width="36" height="36">
    <p>${coin.name} ${coin.symbol.toUpperCase()}</p>
    </div>  
`).join('');

exchangerFirstCoinDiv.innerHTML = `${rows}`
exchangerSecondCoinDiv.innerHTML = `${data.slice(0, 10).reverse().map((coin) => `
        <div class="exchanger_firstcoin_coin">
        <img src="${coin.image}" alt="${coin.name}" width="36" height="36">
        <p>${coin.name} ${coin.symbol.toUpperCase()}</p>
        </div>  
    `).join('')}`;

};