var arrImages = ["./1.jpg","./2.jpg","./4.jpg"];
var counter = 0 ;

var img = document.getElementById("img");
function next()
{
    counter++;
    if (counter>arrImages.length-1)
        counter = 0 ;

    console.log(counter);
    img.src = arrImages[counter];
}
function previous()
{
    counter--;
    if (counter<0)
        counter = arrImages.length-1 ;

    console.log(counter);
    img.src = arrImages[counter];
}

var invest ;
function play()
{
    invest = setInterval(
        function (){
            next();
        },3000);
}
function stop()
{
    clearInterval(invest);
}

// play();