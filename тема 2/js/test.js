let a = 5;
let c = 'hello';
let d = a * c;
// document.querySelector(".sum").innerHTML = d;


let usertext = document.querySelector('#it');
let usertextbut = document.querySelector('#itb');

// на пойму почему не работает (при введеном значении value в 7й строке)
usertext.onmouseover = function ()
{
    console.log (usertext.value = "hhh");
}

usertextbut.onclick = function () // объект - событие = функция
{
    let sum5 = +usertext.value //для сложения вводим переменную
    console.log(sum5 + 11);
    usertext.value = "";
}

// let colbut = document.querySelector('#itb2');
// colbut.style.border = '4px solid blue';

document.querySelector('#itb2').style.border = '4px solid blue';

let userPars = document.querySelector('#it2');
let userParsBut = document.querySelector('#itb2');


userParsBut.onclick = function (){
    var usp = userPars.value
var usp2 = parseFloat(usp);
    console.log(usp2);
    
}
// форма сложения
let num1 = document.querySelector('.calcus');
let num2 = document.querySelector('.calcus2');
let sumus = document.querySelector('.calbut');

    sumus.onclick = function()
    {
        let num3 = +num1.value ; //Если не вводить num3 и 4 
        //а работать с num1 2 то не обнуляются введенные данные
        let num4 = +num2.value ;
        console.log(num3 + num4);
        num1.value = "";
        num2.value = "";
    }
