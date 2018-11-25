let a = 10, b = 2, result, message = 'Введены не числа';
if (a>=0 && b >=0){
result = Math.abs(a - b);
} else if (a < 0 && b , 0){
    result = a * b;
} else if ((a<0 && b>=0)||(a>=0 && b<0)){
    result = a + b;
}
if (result) {
    message = "ответ " +result;
}
alert(message);