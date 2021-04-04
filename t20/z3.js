const user = JSON.parse( localStorage.getItem("user") );

document.getElementById("hello").innerText = `Вітаю ${user.name}`;

document.getElementById("message").innerText =

`На вашу поштову скриньку - ${user.email} надіслано лист із підтвердженням вашої адреси.`