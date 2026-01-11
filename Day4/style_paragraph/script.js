var para = document.getElementById("PAR");
function ChangeFont(x){
    para.style.fontFamily = x;

}
function ChangeAlign(y){
        para.style.textAlign = y;
}

function ChangeHeight(z){   
    para.style.lineHeight = z;
}

function ChangeLSpace(a){
    para.style.letterSpacing = a;
}

function ChangeIndent(b){
    para.style.textIndent = b;
}

function ChangeTransform(c){
    para.style.textTransform = c;
}

function ChangeDecorate(d){
    para.style.textDecoration = d;
}

function ChangeBorder(e){
    var borderColor = para.style.borderColor;
    para.style.border = e;
    para.style.borderColor = borderColor;
}

function ChangeBorderColor(f){
    para.style.borderColor = f;
}