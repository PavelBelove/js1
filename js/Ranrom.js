/*Генератор случайных цифр из задачи про быков и коров никак не давал покоя,
решил прогнать его, скажем, 10000 раз. А за одно разобраться с алгоритмом быстрой сортировки
и в результате проверить - сколько раз генерировалась каждое значение.
В идеале - цифры от 0 до 9 генерятся по 1000 раз каждая.
Но, подсказывает "интуиция" крайние значения будут генериться вдвое реже прочих */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivotIndex = Math.floor(arr.length / 2);
        let pivot = arr[pivotIndex];
        let less = [];
        let greater = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) continue;
            if (arr[i] <= pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }
        let result = [];
        return result.concat(quickSort(less), pivot, quickSort(greater));
    }
}

let arr = [];
var min = 0; 
var max = 9; 
for (let i = 0; i < 10000; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min); // Генератор из задачи Math.round лучше стараться не использовать.
    //arr[i] = Math.floor(Math.random() * 10); // один из вариантов для равномерного распределения значений.
}
arr = quickSort(arr);
//console.log(arr);
let res = {},
    c = 0;
for (i = 0; i < arr.length; i++) {
    //console.log(arr[i+1])
    if (arr[i] != arr[i + 1]) {
        res[arr[i]] = c;
        c = 0;
    }
    c++
}
console.log(res)
/*
Весь сыр бор скорее из-за алгоритма сортировки затеял, который не вполне понял после просмотра видео на ютубе, 
и решил написать. Тем не менее для игры, вроде быков и коров, неравномерное распределение очень существенно. 
Например, играя с компьютером и зная, что 0 и 9 появляются вдвое реже остальных, игрок получит существенное преимущество
и сможет обыгрывать компьютер в большинстве случаев.
*/ 