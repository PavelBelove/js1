// По-хорошему, вопросы во внутренних массивах должны соответствовать уровню сложности. 
// В первом - все вопросы на 100 рублей, в последнем - на миллион.
// Каждый запуск алгоритма выдергивает случайные вопросы, и при достаточном их количестве 
// игра от игры будут отличаться. в quesions должно быть 15 вложенных массивов.
let questions = [
    [{
            q: "На вопрос \"null === undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        },
        {
            q: "На вопрос \"null == undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "b"
        },
        {
            q: "На вопрос \"false == 'false'\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        }
    ],
    [{
            q: "На вопрос \"null === undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        },
        {
            q: "На вопрос \"null == undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "b"
        },
        {
            q: "На вопрос \"false == 'false'\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        }
    ],
    [{
            q: "На вопрос \"null === undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        },
        {
            q: "На вопрос \"null == undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "b"
        },
        {
            q: "На вопрос \"false == 'false'\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        }
    ],
    [{
            q: "На вопрос \"null === undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        },
        {
            q: "На вопрос \"null == undefined\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "b"
        },
        {
            q: "На вопрос \"false == 'false'\" интерпритатор javascript ответит:",
            a: "a) undefined",
            b: "b) true",
            c: "c) null",
            d: "d) false",
            answer: "d"
        }
    ],

];
let bet = [100, 200, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
step = 0;
vin = 0;

function randomQuestion(arr) {
    let i = parseInt(Math.random() * arr.length);
    return arr[i];
}
//console.log(randomQuestion(questions[0]));

for (let i of questions) {
    let question = randomQuestion(i);
    let answer = prompt('Вопрос на ' + bet[step] + ' рублей \n \n' + question.q + '\n' + question.a + '    ' 
            + question.b + '\n' + question.c + '    ' + question.d + '\n Введите 0 если хотите забрать деньги').toLowerCase()
    if (answer == "0") {
        alert("Вы закончили игру досрочно. Выигрыш составил " + vin)
        break;
    }
   
    if (answer != question.answer) {
        if (vin >= 32000) {
            vin = 32000
        } else if (vin >= 1000) {
            vin = 1000
        } else {
            vin = 0
        };
        alert('Это неверный ответ. Ваш выигрыш составил ' + vin)
        break;
    }
    vin = bet[step++];
    
}
if (vin == 1000000) {
    alert("Поздравляем, вы выиграли миллион!");
}
if (confirm('Хотите сыграть еще раз?')) {
    location.reload();
}