let i = 0, message;
do {
    if (i==0) {
        message = " - Это ноль";
    }
    else if (i%2) {
        message = " - Это нечетное число";
    }
    else {
        message = " - Это четное число";
    }
    console.log(i+message);
    i++
} while (i<=10);