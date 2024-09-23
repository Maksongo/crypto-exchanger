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