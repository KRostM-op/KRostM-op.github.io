function sayHi() {
alert("Привіт!")


}
function greeting(name){
    if (typeof name === 'string'){
alert (`Привіт ${name}`)}
else {alert('Невірне імя')}
    }

function showGreeting(name){
    const test = document.getElementById('test')

    if (typeof name === 'string' && name.length > 2){
test.innerText = `Привіт ${name}`}
else {test.innerText = 'Невірне імя'}
}