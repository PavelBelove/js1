function summ(a = 0, b = 0) {
    if (isNaN(a) && isNaN(b)) {
        return null;
    }
    return a + b;
};

function differense(a = 0, b = 0) {
    if (isNaN(a) && isNaN(b)) {
        return null;
    }
    return a - b;
};

function multiplication(a = 0, b = 0) {
    if (isNaN(a) && isNaN(b)) {
        return null;
    }
    return a * b;
};

function devision(a=0, b=0){
    if (isNaN(a) && isNaN(b)){
    return null;
    }
    return a / b;
    };
