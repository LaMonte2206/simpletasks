function rightHere() {
    alert("Here we go!");
}

document.getElementById('message').onclick = changeColor;

function message() {
    document.body.style.color = "red";
    return false;
}