var header = document.getElementById('header');
header.style.textAlign = 'right';
var image = document.querySelector('.center #header img');
console.log(image);


var duplicateImage = image.cloneNode(true);
var footer = document.createElement('div');
footer.id = 'footer';
footer.appendChild(duplicateImage);
footer.style.textAlign = 'left';
document.body.appendChild(footer);


var nav_list = document.getElementById('navigation').firstElementChild;
nav_list.style.listStylePosition = 'inside';

