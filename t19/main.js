const stored_text = document.getElementById("stored_text")
function drawText(){
    const text = document.getElementById("text").value;
    stored_text.innerHTML = text;
    localStorage.setItem('text',text)
}
const text = localStorage.getItem('text')
stored_text.innerHTML = text;

function change(){
    const text = localStorage.getItem('text');
    document.getElementById('text').value = text;
}
function del(){
    localStorage.removeItem('text');
    document.getElementById('text').value = ``;
    stored_text.innerHTML = "";
    console.log(1);
}