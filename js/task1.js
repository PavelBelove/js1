//Простые числа. 
//Единица не является простым числом.

function primes(limit=100){
let i = 2, arr=[2], prime;
while (i<=limit) {
prime=true;
    for (j of arr) {
        if (i%j == 0) {
           prime=false;
        };
         
    }
    if (prime) {
        arr.push(i);
    }
    i++;
}
return arr;
}

