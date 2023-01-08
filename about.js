function onLoadCardNumber() {

    let productNumber = localStorage.getItem("cardnumber");
    if (productNumber) {

        document.getElementById("num").textContent = productNumber;
    }
}
onLoadCardNumber();