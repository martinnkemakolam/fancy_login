let signup_btn = document.getElementById('signup_btn')
let login_btn = document.getElementById('login_btn')
let control = document.getElementById('control')
let signup_form = document.getElementById('signup_form')
let login_form = document.getElementById('login_form')
let input_login = document.getElementById("username_login")
let input_signup = document.getElementById("username_signup")
let password_signup = document.getElementById("password_signup")
let password_login = document.getElementById("password_login")
function click() {
        if(this == signup_btn){
            control.style.left = '55%'
            moveLogin()
        }else{
            control.style.left = '0'
            moveSignup()
        }
        function moveSignup() {
            signup_form.style.right = '400px'  
            login_form.style.right = '40px'
        }
        function moveLogin() {
            login_form.style.right = '-400px'
            signup_form.style.right = '40px'
        }
}
signup_btn.onclick = click
login_btn.onclick = click
