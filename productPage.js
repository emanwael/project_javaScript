export  function showProduct (item)
{
    try {
        // let result = await fetch("https://fakestoreapi.com/products/2" );
        // let response = await result.json();

        // console.log(response);
        let img = document.querySelector(".img");
        let name = document.querySelector(".name");
        let desc = document.querySelector(".desc");
        let price = document.querySelector(".price");
        let rate = document.querySelector(".rating");

        img.src = item.image;
        name.innerHTML = item.title;
        desc.innerHTML = item.description;
        price.innerHTML = item.price +"$";
        rate.innerHTML ="Rating : "+item.rating.rate;

        return response;

    } catch (error) {

        console.log(error);

    }
}

