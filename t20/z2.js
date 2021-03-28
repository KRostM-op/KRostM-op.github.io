function enter(){
const user = {
email: document.getElementById('email').value,
password: document.getElementById('password').value,

}
const saved_user = JSON.parse(localStorage.getItem("user"));
if(user.email != saved_user.email){
showError("Користувача з таким email не існує");
return;
}
if(user.password != saved_user.password){
    showError("Не правильний пароль");
    return;
    }
    if(user.email === saved_user.email && user.password === saved_user.password){
        saved_user.loged = true;
        localStorage.setItem("user", JSON.stringify(saved_user))
        showSuccess("Вхід виконано")

    }
}
function showError(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
        setTimeout(clear,3000)
}
function clear(){
    document.getElementById('message').innerHTML = '';}
function showSuccess(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
    setTimeout(redirect,3000)
}
function redirect(){
    window.location=`z3.html`;
}
