//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let outnum = ''
    for (i = 0; i <= 50; i = i + 2) {
        if (i == 8) continue; // исключает из списка это число
        if (i == 46) break; // останавливает цикл, 
        // здесь нюанс - если поставить 45, то цикл не прервется
       
        // этот блок условтя добавляет 2-ую звездочку круглому числу
       ///////////////////////////////////////////////////////////////
        let dec  
       if (i%10 == 0){
        dec = '*'
       }
       else {
        dec = ""
       }
       ///////////////////////////////////////////////////////////
        outnum += i + (dec + "* ");
       
    }
    document.querySelector(".out-1").innerHTML = outnum //это вариант через переменную, но можно сразу, но будет менее красиво
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2() {

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

function t3() {

}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с
//  помощью цикла.


function t4() {

}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка 
// (если число нечетное, и две звездочки если четное). Задача решается с 
// помощью цикла.

function t5() {

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек
//  без пробелов. Перенос строки - br. Количество строк (итераций, повторений) 
//  цикла вводит пользователь в i-6.
//

function t6() {

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок 
// не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в 
// out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.

function t7() {

}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля 
// (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в 
// out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

inp1 = document.querySelector(".i-81")
inp2 = document.querySelector(".i-82")
let inp3 = ''
function t8() {
for (let i = +inp1.value; i <= +inp2.value; i++){ //без плюса не стабильно и не всегда работает
    inp3 += i + " ";
    document.querySelector(".out-8").innerHTML = inp3
}

}

document.querySelector('.b-8').onclick = t8;


// Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в 
// out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, 
// а потом запускаем цикл.
// цикл - один

var inp91 = document.querySelector(".i-91")
var inp92 = document.querySelector(".i-92")


// var max91 = '';
// var min91 = '';
let inp94 = '';
function t9() {

    if (+inp91.value > +inp92.value)
    {
        max91 = inp91;
        min91 = inp92;
  
    }
    else {
        max91 = inp92;
        min91 = inp91;
    }
    // else if (+inp91.value < +inp92.value)
    // {
    //     max91 = inp92;
    //     min91 = inp91;
  
    // }
    // else {
    //     console.log("задайте разные числа");
    // }
    console.log(max91.value)
    console.log(min91.value)
    for (let i = +min91.value; i <= +max91.value; i++){ //без плюса не стабильно и не всегда работает
        inp94 += i + " ";
        document.querySelector(".out-9").innerHTML = inp94
    }
}


document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные 
// годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг
//  (равный 2).

function t10() {

}

document.querySelector('.b-10').onclick = t10;



//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
let div11 = document.querySelectorAll(".div-11")
console.log(div11)
let dv = ""
for (let i = 0; i < div11.length; i++) {
div11[i].style.background = "red";
    console.log(div11[i].textContent)
    
    dv += div11[i].textContent + " "
                // div11[i].onclick = two
}
                // function two() {
                //     console.log("тык тык")


// [i].toString()

document.querySelector(".out-11").innerHTML = dv
}
document.querySelector('.b-11').onclick = t11; // в начале или в нлнце кода находится
//  кнопка не имеет значения]


//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

function t12() {
}
document.querySelector('.b-12').onclick = t12;



//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1,
//  второго - 2, третьего - 3...

function t13() {
let inp13 = document.querySelectorAll('.i-13')
// inpval = 
// console.log(inp13)
for (i = 0; i < inp13.length; i++)
console.log([i+1] + " - " + inp13[i].value)

}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с 
// помощью elem[i].checked.

document.querySelector('.b-14').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            document.querySelector(".out-14").innerHTML =  r[i].value;
        }
    }
}




// document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую 
// последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

function t15() {

}

document.querySelector('.b-15').onclick = t15;
