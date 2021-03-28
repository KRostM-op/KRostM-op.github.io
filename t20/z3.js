const saved_user = JSON.parse( localStorage.getItem("user") );

document.getElementById("hello").innerText = `Вітаю ${saved_user.name}`;

document.getElementById("message").innerText =

`На вашу поштову скриньку - ${saved_user.email} надіслано лист із підтвердженням вашої адреси.`