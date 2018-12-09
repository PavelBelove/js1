let basket = [];


for (let i of document.querySelectorAll(".btn")) {
    i.addEventListener("click", addToBasket);
}


/*=============================*/
function addToBasket(e) {
    let btnId = e.target.id;
    let selectId = "#quantity-" + e.target.id.split("-")[1];
    let select = document.querySelector(selectId);
    let quantity = +select.value.split(" ")[1]
    let price = +document.querySelector("#price-" + e.target.id.split("-")[1]).innerText.split(" ")[1]


    console.log(price*quantity);    

}