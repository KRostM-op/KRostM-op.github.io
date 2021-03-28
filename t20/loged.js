const saved_user = JSON.parse( localStorage.getItem("user") );

if( saved_user.loged == true ){
document.getElementById('nav_left').innerHTML =
`
<li class="nav-item">
<a class="nav-link" href="z3.html">Головна</a>
</li>
`;

document.getElementById('nav_right').innerHTML =
`
<ul class="navbar-nav ml-auto">
<li class="nav-item">
<a class="nav-link" href="" onclick="logout()">Вийти</a>
</li>
</ul>
`;
}
function logout(){
setTimeout(redirect,2000)
}
function redirect(){
    window.location=`z3.html`;
}
