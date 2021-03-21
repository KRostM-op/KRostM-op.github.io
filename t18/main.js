const users = [
	{
		name: "Олег",
		email: "olegivanov@gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@gmail.com"
	}
];

function showError(text){
    const message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-danger col-6">${text}</div>`;
            setTimeout(clearMessage,3000)
}
function clearMessage(){
    const message = document.getElementById("message")
    message.innerHTML = ``;
}

function showSuccess(text){
    const message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-success col-6">${text}</div>`;
            setTimeout(clearMessage,3000)
}

function checkName(){
    const name = document.getElementById('name').value
    const filtered = users.filter(function(user){
        return user.name === name
    })
if(filtered.length > 0){
    showError("Користувач з таким ім'ям вже існує")

}
console.log(name);
}

function checkEmail(){
    const email = document.getElementById('email').value;

    const filtered = users.filter( function(user){
    return user.email.toLowerCase() === email.toLowerCase();
} )

if( filtered.length > 0 ){
showError("Користувач з таким email вже існує!");
return false;
} else {
return true;
}
}



function register(){
const email = document.getElementById('email').value
const name = document.getElementById('name').value
const password = document.getElementById('password').value

let error_text = ``;
if(name.length < 2){
error_text += `<br>`
}
if(email.length < 6){
    error_text += `Email надто короткий<br>`
    }
if(password.length < 6){
    error_text += `Пароль надто короткий<br>`
    }
if(!email.includes('@')){
error_text += `Email повинен містити символ '@'`
}

if(email.length >= 6 && name.length >= 2 && password.length >= 6 && checkEmail() && checkName()){
showSuccess('Користувач успішно зареєстрований')
}
else{
    showError(`Помилка при реєстрації<br>${error_text}`)
}
}
