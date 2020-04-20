// let calculator = {
//     a: 0,
//     b: 0,

//     read () {
//         this.a = prompt('a?');
//         this.b = prompt('b?');
//     },
//     sum () {
//        res = +this.a + +this.b;
//        return res; 
//     },
//     mul () {
//         resul = this.a * this.b;
//         return resul;
//     }   
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// ---------------------------------------------------

function Calculator() {

    this.read = function() {
       //this.a = prompt('a?');
       //this.b = prompt('b?');
    }

    this.sum = function() {
        return +this.a + +this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
};

calculator = new Calculator();

calculator.read();

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        //this.value += +prompt("Enter number that you want to add", 0);
    } 
}

let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());

function readNumber() { 
    let number;
    do {
        number = prompt("Enter number");
    }
    while (!isFinite(number));
    if (number === null || number === '') return alert("null");
    return +number;
}

//alert(`Number is: ${readNumber()}`);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

//alert(random(2, 5));

function ucFirtst(str) {
    if(!str) return str;
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

let string = 'dog';

// alert(ucFirtst(string));

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes("viagra") || str.includes("xxx")) return true;
    return false;
}

//alert(checkSpam('buy xxx now'));

function truncate(str, maxlength) {
    if (str.length > maxlength)
         str = str.substr(0, maxlength - 1) + "...";
    return str;
}

// alert(truncate("Вот, что мне", 20));

function extractCurrencyValue(str) {
    str = +str.slice(1);
    return str;
}

//alert(extractCurrencyValue("$120"));


function musicArray() {
    let styles = ["Джаз", "Блюз"];
    alert(styles);
    styles.push("Рок-н-ролл")
    alert(styles);
    styles[(styles.length - 1) / 2] = "Классика";
    alert(styles);
    alert (styles.shift());
    styles.unshift("Рэп", "Регги");
    alert(styles);
}

// musicArray();

function sumInput() {
    let numbers = [];
    let sum = 0;
    while (true) {
        let number = prompt("Input number");
        if(number === "" || number === null || isFinite(number)) break;
        numbers.push(number); 
    }

    for(number of numbers) {
        sum += +number;
    }

    return sum;
}

//alert(sumInput());

function getMaxSubSum(arr) {
    let sum = 0;
    let partialSum = 0;
    let maxSum = 0;

    for(let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0


function camelize(str) {
    return str.split('-')
        .map((element,index) => 
        index === 0 ? element : element[0].toUpperCase() + element.slice(1))
        .join('');
  }

//alert(camelize("-background-color"));
//  let array = [5, 3, 8, 1];

//  function filterRange(arr, a, b) {
//     return arr.filter(item => item >= a && item <= b);
//  }

//  array = filterRange(array, 1, 4);
// alert(array);

// function filterRangeInPlace(array, a, b) {
//    for (let i = 0; i < array.length; i++) {
//         let val = array[i];

//         if (val < a || val > b) {
//             array.splice(i, 1);
//             i--;
//         }
//    }
// }
// let array = [5, 3, 8, 1];

// filterRangeInPlace(array, 1, 4);
// alert(array);

// let arr = [5, 2, 1, -10, 8];

function compareReverse(a,b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

// arr.sort(compareReverse);

// alert(arr);

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// function Calc() {
//     this.methods = {
//         "+": (a,b) => a + b,
//         "-": (a,b) => a - b
//     }
    
//     this.addMethod = function (methodName, method) {
//         this.methods[methodName] = method;
//     }

//     this.calculate = function (str) {
//         let arr = str.split(" ");
//         a = +arr[0];
//         op = arr[1];
//         b = +arr[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;


//         return this.methods[op](a, b);
//     };
// }

// let calc = new Calc;

// calc.addMethod("*", (a,b) => a*b);
// alert(calc.calculate("5 - 2"));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// let names = users.map(item => item = item.name);

// alert(names);


// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id 
// }));

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

// let arr = [1, 2, 3];

// function shuffle(arr) {
//     arr.sort(() => Math.random - 0.5);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr) {
//     return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
// }

// alert(getAverageAge(arr));

// function unique(arr) {
//     let results = [];
//     arr.forEach(element => {
//         if (!results.includes(element)) results.push(element);
//     });

//     return results;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) );

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", 
// "Krishna", "Hare", "Hare", ":-O" ];

// alert(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();
//     for (word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         map.set(sorted, word)
//     }

//     return Array.from(map.values());
// }

// alert(aclean(arr));

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// function sumSalaries(salaries) {
//     let sum = 0;
//     for(salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// alert(sumSalaries(salaries));

let user = {
    name: 'John',
    age: 30
  };

function count(obj) {
    return Object.keys(obj).length;
}

alert(count(user));