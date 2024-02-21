// let a = 100;
// let b = 200;
// let sum = a+b;
// alert(sum);


document.getElementById("one").innerHTML = "Вперед!!!";
// document.querySelector(".h2").innerHTML = "Привет";
document.querySelector(".three").innerHTML = '<h3>это заголовок введен из js</h3>';
// можно воодить и через id и через "document.getElementById"

let dstr = document.querySelector(".three");
// dstr = 5;
console.log(dstr);
dstr.innerHTML += '<h4>Добавленный конкатенацией текст</h4>';

dstr.innerHTML += '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">'

sum1 = 26;
sum2 = 67;
document.querySelector('.alg').innerHTML = sum1 * sum2;
// document.querySelector("body").innerHTML = '';