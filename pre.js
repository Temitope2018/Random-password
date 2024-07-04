const myPassword = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%^&*()?:\|/";
const char = upperCase+lowerCase+number+symbol;

function generate(){
    let password = "";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=char[Math.floor(Math.random()*char.length)];
        myPassword.value = password;
    }
}

function copypassword(){
    myPassword.select();
    document.execCommand("copy");
}
