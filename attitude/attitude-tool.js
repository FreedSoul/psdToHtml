var x = 0;
var y = 0;
/*document.write("<button id='eventBtn' onClick='myFunction()' style='position: fixed; left:43%;'>Medir</button>");*/
document.write("<div id='eventBtn' style='position: fixed; left:50%; font-size:8px; background:white;'></div>");
function myFunction() {
    setInterval(function(){ 
        x = window.innerWidth;
        y = window.innerHeight;
        var btn=document.getElementById("eventBtn");
        btn.innerHTML = 'W = ' + x + '* H = '+ y;
        btn.style.left= "40%";
    }, 1000);
}

myFunction();