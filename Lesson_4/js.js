// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение '+ options[key]);
// }

// console.log(Object.keys(options).length);
////////////////////////////////////////

// let arr = ["first", 2, 3, "four", 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){ //item - каждый элемент массива, i - номер элемента, mass - сам массив
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')' );
// });  




/*
arr.pop(); //удалить последний элемент из массива
arr.push("5"); // добавление элемента в конец массива 
arr.shift(); //удаляет первый элемент массива
arr.unshift("1"); //добавляет в начало массива элемент 
*/
// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key in mass) { // in - вывод элементов массива
//     console.log(key);
// }

// for (let key of mass) { // of - вывод значения элементов массива
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", "zzz", 'pp', 'sdf'],
// i = arr.join(', ');

// console.log(i);


// let arr = ["aawe", "zzz", 'pp', 'sdf'],
// i = arr.sort();

// console.log(arr);

let arr = [1, 15, 4, 12],
i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);