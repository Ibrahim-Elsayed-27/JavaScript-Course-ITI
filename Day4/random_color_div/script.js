function generateColoredDiv() {

    var div = document.createElement("div");
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    var span = document.createElement("span");
    span.innerText = bgColor;
    div.appendChild(span);
    div.style.backgroundColor = bgColor;
    document.body.appendChild(div);
}