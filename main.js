// const SigninButton = document.querySelector("#NavbarSigninID");
// SigninButton.addEventListener('click', () => {
//     // popup.style.display = 'block';
//     console.log("hahaha")
// });


const SigninButton = document.querySelector("#NavbarSigninID");
const SignInCloseButton = document.querySelector(".SignIn_wrapper_form_close")
const SignInWrapper = document.querySelector(".SignIn_wrapper");

SigninButton.addEventListener('click', () => {
    SignInWrapper.style.display = "block";
});


SignInCloseButton.addEventListener('click', () => {
    SignInWrapper.style.display = "none";
});

const SignUpButton = document.querySelector(".nav_signup");
const SignUpCloseButton = document.querySelector(".SignUp_wrapper_form_close")
const SignUpWrapper = document.querySelector(".SignUp_wrapper");

SignUpButton.addEventListener('click', () => {
    SignUpWrapper.style.display = "block";
});

SignUpCloseButton.addEventListener('click', () => {
    SignUpWrapper.style.display = "none";
});