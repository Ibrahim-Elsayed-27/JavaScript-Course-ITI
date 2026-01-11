var inp = document.querySelector("#Answer");
function EnterNumber(num){
    inp.value += num;

}

function EnterOperator(op){
    inp.value += op;
}


function EnterClear(){
    inp.value = "";
}

function EnterEqual(){
    inp.value = eval(inp.value);
}

//prevent text iput, buttons only
inp.readOnly = true;