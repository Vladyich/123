// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция
// перебирает массив a1  c помощью цикла for (let i.
//     Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5, 7, 9, 11, 13, 15];

function f1() {}

document.querySelector(".b-1").addEventListener("click", f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2
//   c помощью цикла for (let i. Выведите на страницу в .out-2 формате
//      индекс+пробел+значение+пробел.

let a2 = [5, 7, 9, 11, 13, 15];

function f2() {}

document.querySelector(".b-2").addEventListener("click", f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со
// страницы с помощью getElementsByClassName и в каждый записывает число 3,
//  перезаписывая содержимое div.

function f3() {
  out3 = document.getElementsByClassName("out-3");
  console.log(out3);
  for (let div3 of out3) {
    div3.innerHTML = 333;
  }
}

document.querySelector(".b-3").addEventListener("click", f3);

// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со
//  страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
  out4 = document.getElementsByClassName("out-4");
  console.log(out4);
  for (let div4 of out4) {
    div4.innerHTML = 444;
  }
}

document.querySelector(".b-4").addEventListener("click", f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of
// перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];
let a55 = [];
function f5() {
  for (let item of a5) {
    if (item > 7) {
      a55.push(item);
    }
  }
  return a55;
}

document.querySelector(".b-5").addEventListener("click", () => {
  document.querySelector(".out-5").innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив
// a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [
  [1, 12],
  [3, 24],
  [5, 36],
];
let a66 = [];
//------ for стандартный ----------это работает-------------------
// function f6() {
//   for (let i = 0; i < a6.length; i++) {
//     console.log(i);
//     for (let k = 0; k <= [i].length; k++) {
//       console.log(a6[i][k]);
//       let num6 = k;
//       a66.push(a6[i][k]);
//     }
//     console.log(a66);
//   }}
// -------------------------------------------------

// ---for of-----работает но выводт в out выводит если он в пределах функции-
// function f6() {
//   for (let i of a6) {
//     console.log(i + " это i");
//     for (let k of i) {
//       console.log(k + " это к");

//       a66.push(k);
//     }
//     console.log(a66 + " это новый массив");
//   }
//   //   return a66;
//   document.querySelector(".out-6").innerHTML = a66; //в for of выводит находясь в пределах f6
// }

function f6() {
  for (let i in a6) {
    console.log(a6[i] + " это a6[i]");
    for (let k in a6[i]) {
      console.log(a6[i][k] + " это a6[i][к]");

      a66.push(a6[i][k]);
    }
    console.log(a66 + " это новый массив");
  }
  //   return a66;
  document.querySelector(".out-6").innerHTML = a66; //в for in выводит находясь в пределах f6
}

document.querySelector(".b-6").addEventListener("click", f6);

// Task 7
// При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать
// массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит
//  вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения
//  id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}.
//     Функция должна возвращать результирующий массив.

let a7 = [
  { id: 23, name: "Ivan" },
  { id: 45, name: "Petr" },
];

function f7() {
  let obj7 = {};
  for (let item in a7) {
    console.log(a7[item].name);
    console.log(a7[item].id);
    console.log(item);

    let n7 = a7[item].name;
    let b7 = a7[item].id;
    obj7[n7] = b7; // ВНИМАНИЕ если свойство добавляется ввиде переменной, то в она в [a]
    // obj7.push(n7);
  }
  console.log(obj7);
}

document.querySelector(".b-7").addEventListener("click", () => {
  console.log(f7());
});

// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать
//  массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который
//  содержит вложенные объекты. Вам необходимо сделать из a8 массив,
//  который будет содержать только числовые id. Т.е. [23, 45]. Функция
//  должна возвращать результирующий массив.

let a8 = [
  { id: 23, name: "Ivan" },
  { id: 45, name: "Petr" },
];
let b8 = [];
function f8() {
  for (let item8 in a8) {
    console.log(a8[item8].id);
    el8 = a8[item8].id;
    b8.push(el8);
    // console.log(b8);
  }
  return b8;
}

document.querySelector(".b-8").addEventListener("click", () => {
  console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в
// out-9 самый большой индекс из вложенных в a9 массивов. В данном случае
// это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем
// самый большой индекс 4.

let a9 = [
  [4, 3, 2],
  [2, 5],
  [0, 0, 0, 0, 0],
];

function f9() {}

document.querySelector(".b-9").addEventListener("click", () => {
  document.querySelector(".out-9").innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать
//  массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"}
//  и возвращать полученный массив.

let a10 = [4, 6, 9, "Hello"];

function f10() {
  let obj10 = {};
  let item10 = 6;
  obj10[item10] = 6; // так с перебранным массивом
  console.log(obj10);
}

document.querySelector(".b-10").addEventListener("click", () => {
  console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in
// перебрать объект a11 и вывести в out-11 только те значения, которые больше
//  10. Вывод - через пробел.

let a11 = {
  one: 11,
  two: 7,
  three: 13,
  four: 0,
};

function f11() {}

document.querySelector(".b-11").addEventListener("click", f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of
// перебрать a12 и вывести в out-12 через пробел.

let a12 = [4, 5, 6, 7];
let sum12 = "";
function f12() {
  for (let i12 of a12) {
    sum12 += i12 + " ";
  }
  document.querySelector(".out-12").innerHTML = sum12;
}
document.querySelector(".b-12").addEventListener("click", f12);

// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of
// перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = "testone";
let sum13 = "";
function f13() {
  for (let i13 of a13) {
    sum13 += i13 + " - ";
  }
  document.querySelector(".out-13").innerHTML = sum13;
}

document.querySelector(".b-13").addEventListener("click", f13);

// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of
//  перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4, 5, 6]);

let sum14 = "";
function f14() {
  for (let i14 of a14) {
    sum14 += i14 + " - ";
  }
  document.querySelector(".out-14").innerHTML = sum14;
}

document.querySelector(".b-14").addEventListener("click", f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList
//  элементов .out-15 c помощью document.querySelectorAll, затем c помощью
//   for of перебрать полученную коллекцию элементов .out-15 записать внутрь
//   них число 15 ( затерев содержимое).

function f15() {
  let a15 = document.querySelectorAll(".out-15");
  console.log(a15);
  for (let item15 of a15) {
    item15.innerHTML += 15; //переделал задание - проверил сложение
  }
}

document.querySelector(".b-15").addEventListener("click", f15);
