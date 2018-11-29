let basket = [{
    id: 1,
    title: "milk",
    unit: "l",
    quantity: 2,
    prise: 41
},{
    id: 2,
    title: "sugar",
    unit: "kg",
    quantity: 0.5,
    prise: 54 
},{
    id: 3,
    title: "bread",
    unit: "pieces",
    quantity: 3,
    prise: 27
}]

function countBasketPrice(basket){
    let summ = 0;
    for (let i of basket){
        summ += i.quantity * i.prise;
    }
    return summ;
}

console.log(countBasketPrice(basket));