//let num = 50;

if (num < 49) {
    console.log("Не верно");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Верно!");
};

(num == 50) ? console.log("Верно") : console.log("Не верно!"); 

switch (num) {
    case num < 49:
        console.log('Неверно!');
    break;
    case num < 100:
        console.log('Много!');
    break;
    case num < 80:
        console.log('Все еще много!');
    break;
    case 50:
        console.log('Верно!');
    break;
    default:
        console.log("Что-то пошло не так");
    break;
}

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
//
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55 );

for (let i = 0; i < 8; i++)
{
    if (i == 6) {
        continue;
    }
    console.log(i);
}


let x = 5; 
console.log( x++ );

let y = 1; 
let x = y = 2; 
console.log(x);

console.log( "1"[0] );

console.log( [ ] + 1 + 2 );

console.log( 2 && 1 && null && 0 && undefined );
 
console.log( null || 2 && 3 || 4 ); //3
 

console.log( +"Infinity" ); //Infinity

console.log( 0 || "" || 2 || undefined || true || falsе ); //2

let a = [1, 2, 3]; 
let b = [1, 2, 3];
console.log(a == b);
































'use strict';




let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);

let arr ['apple.png', 'orange.png', apple2.png];

console.log(arr[1]);

alert("Hellow World");

let answer = promt("Есть ли вам 18 лет?", "Да");
console.log(answer);