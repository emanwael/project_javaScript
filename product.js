import * as all from "./productPage.js";


let n = 0;

function cardNumber() {
    let productNumber = localStorage.getItem("cardnumber")
     console.log(productNumber)
    productNumber = parseInt(productNumber);
    if (productNumber) {
        localStorage.setItem("cardnumber", productNumber + 1);
        document.getElementById("num").textContent = productNumber + 1;

    } else {
        localStorage.setItem("cardnumber", 1)
        document.getElementById("num").textContent = 1;
    }
}
function onLoadCardNumber() {

    let productNumber = localStorage.getItem("cardnumber");
    if (productNumber) {

        document.getElementById("num").textContent = productNumber;
    }
}
onLoadCardNumber();

localStorage.clear();

async function getCategories() {
    try {
        let result = await fetch("https://fakestoreapi.com/products/categories");
        let response = await result.json();
        console.log(response);
    } catch (error) {

    }
}

async function getProuducts(num) {
    try {
        let result = await fetch("https://fakestoreapi.com/products");
        let response = await result.json();

        //  console.log(response);
        // displayCards(response);
        return response;

    } catch (error) {

        console.log(error);

    }

}


function creatCard(item) {
    // console.log(pet);

    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "col-md-5", "col-sm-9", "m-3", "p-0");

    let img = document.createElement("img");
    img.classList.add("card-img-top", "image-size");
    img.src = item.image;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let name = document.createElement("h5");
    name.classList.add("card-title");
    name.innerHTML = item.title;

    let price = document.createElement("p");
    price.classList.add("card-text");
    price.innerHTML = item.price + "$";

    let add = document.createElement("button");
    add.classList.add("btn","bg-nav");
    add.innerHTML = "Add to car";
    add.addEventListener("click", function () {
        cardNumber();
    })

    cardBody.append(name);
    cardBody.append(price);
    cardBody.append(add);

    card.append(img);
    card.append(cardBody);

    // card.addEventListener("click",function(){
    //     all.showProduct(item);
    //     console.log(item);
    //     open("./productPage.html");
    // })
    // console.log(card);
    return card;


}


function displayCards(items) {

    let card_product = document.querySelector(".card-product");
    card_product.innerHTML = " ";
    items.forEach((i) => {
        let card = creatCard(i);
        card_product.append(card);
    })


}

async function displayAllProduct() {
    let products = await getProuducts();
    displayCards(products)
    return products;
}

async function displayProductByCategories(categories) {
    try {
        let items = await getProuducts();
        let newProduct = items.filter((item) => item.category == categories);
        console.log("dfdf", newProduct);
        displayCards(newProduct);
    }
    catch (error) {
        console.log(error);
    }

}

function selectCatogorie() {
    let select = document.getElementById("select");
    let optionCatogorie = document.querySelectorAll(".option");

    optionCatogorie.forEach((option) => {
        if (option.selected)
            console.log("option", option.value);

        select.addEventListener("change", function () {
            console.log("sdsd");
            if (option.selected) {
                if (option.value == "All")
                    displayAllProduct();
                else
                    displayProductByCategories(option.value);


            }
        })
    })

}





displayAllProduct();

selectCatogorie();




