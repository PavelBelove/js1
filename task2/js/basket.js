let basket = [];


for (let i of document.querySelectorAll(".btn")) {
    i.addEventListener("click", addToBasket);
}


/*=============================*/
function addToBasket(e) {
    let btnId = e.target.id;
    let selectId = "#quantity-" + e.target.id.split("-")[1];
    let select = document.querySelector(selectId);
    let quantity = +select.value.split(" ")[1];
    let price = +document.querySelector("#price-" + e.target.id.split("-")[1]).innerText.split(" ")[1];

    basket.push({
        price: price,
        quantity: quantity
    });

    countBasket()
    //console.log(basket);

}

function countBasket() {
    let totalQuantity = 0;
    let totalPrice = 0;
    for (i of basket) {
        totalQuantity += i.quantity;
        totalPrice += (i.quantity * i.price);
    }
    document.querySelector("#totalQuantity").innerText = ("Раков в корзине  " + totalQuantity);
    document.querySelector("#totalPrice").innerText = ("К оплате " + totalPrice + " руб.");
}