function numToObject(num){
    let obj = {};

    if (Math.trunc(num/1000)){
        return num;
    }
    function addPrperty(prop, devider){
        if (Math.trunc(num/devider)){
            obj[prop] = Math.trunc(num/devider);
            num %= devider;
        }
       // console.log(obj);
    }

    addPrperty('сотни',100);
    addPrperty('десятки',10);
    addPrperty('единицы',1);

    return obj
}

//let c = numToObject(123);