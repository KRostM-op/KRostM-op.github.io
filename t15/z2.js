const user = {
    name:"Ростислав",
    lastname:"Кухтяк",
    age:"12",
    email:"rostyslav.kouhtiak@gmail.com",
    city:"Львів"
}
console.log(user)

function showUser() {
    const user_data = document.getElementById ('user_data');

    user_data.innerHTML=
`
    <tr>
        <th>${user.name}</th>
        <th>${user.lastname}</th>
        <th>${user.age}</th>
        <th>${user.email}</th>
        <th>${user.city}</th>
    </tr>
`
}
function changeName(new_name) {
    user.name = new_name
    showUser();
}
function changeLastname(new_lastname) {
    user.lastname = new_lastname
    showUser();
}
function changeAge(new_age) {
    user.age = new_age
    showUser();
}
function changeEmail(new_email) {
    user.email = new_email
    showUser();
}
function changeCity(new_city) {
    user.city = new_city
    showUser();
}
function changeCity(new_name, new_lastname, new_age, new_email, new_city) {
    new_name = new_name;
    new_lastname = new_lastname;
    new_age = new_age;
    new_email = new_email;
    new_city = new_city;
    showUser();
}





//showUser()