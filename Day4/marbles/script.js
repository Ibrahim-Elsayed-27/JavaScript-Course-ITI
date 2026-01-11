var marblesCounter = 1;
var numberOfMarbles = 5;
var MarbleOFFSourcePath = "imgs/marble1.jpg";
var MarbleONSourcePath = "imgs/marble2.jpg";
var gameInterval = null;

var marblesElements = document.getElementById("MarblesContainer").children;
for (var i = 0; i <= marblesElements.length - 1; i++) {
    marblesElements[i].onmouseover = function() {
        clearInterval(gameInterval);
    }
    marblesElements[i].onmouseout = function() {
        gameInterval = setInterval(startMarbles, 1000);
    }
}
function startMarbles() {  
    marblesElements[marblesCounter - 1].src = MarbleONSourcePath;
    if(marblesCounter == 1){
        marblesElements[numberOfMarbles - 1].src = MarbleOFFSourcePath;
    }else{
        marblesElements[marblesCounter - 2].src = MarbleOFFSourcePath;
    }
    marblesCounter++;   
    if (marblesCounter > numberOfMarbles) {
        marblesCounter = 1;
    }

}

gameInterval = setInterval(startMarbles, 1000);