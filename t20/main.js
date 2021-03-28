function register(){
    const user = {
        name:     document.getElementById('name').value,
        email:    document.getElementById('email').value,
        password: document.getElementById('password').value,
        loged:    false
    }
if(user.name.length < 2){
    showError("Не вірне ім'я користувача");
        return
}

    if(user.email.length < 8 || !user.email.includes('@') ){
        showError("Не вірний email користувача");
            return;
}
if(user.password.length < 6){
    showError("Занадто коротикий пароль");
        return
}
localStorage.setItem("user", JSON.stringify(user))
showSuccess("Користувач успішно зареєстрований");
}
function showError(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-danger col-6">${text}</div>`
        setTimeout(clear,3000)
}
function clear(){
    document.getElementById('message').innerHTML = '';

}

function showSuccess(text){
    document.getElementById('message').innerHTML = `<div class="alert alert-success col-6">Успіх</div>`;
    setTimeout(redirect, 3000)
}
function redirect(){
window.location = `z2.html`

}