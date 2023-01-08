function onLoadCardNumber() {

    let productNumber = localStorage.getItem("cardnumber");
    if (productNumber) {

        document.getElementById("num").textContent = productNumber;
    }
}
onLoadCardNumber();



var submitButton =document.getElementById("submit");

submitButton.addEventListener("click",function(e){
    e.preventDefault();
   
})


function Submit()
{


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var massgae =document.getElementById("massgae");
    var errorMassage =document.getElementsByClassName("errorMassage");

    if (name.value == "")
        errorMassage[0].style.display = 'block';
    else
        errorMassage[0].style.display = 'none';
   
    if (email.value == "")
        errorMassage[1].style.display = 'block';
    else
        errorMassage[1].style.display = 'none';

    if (massgae.value == "")
        errorMassage[2].style.display = 'block';
    else
        errorMassage[2].style.display = 'none';

}