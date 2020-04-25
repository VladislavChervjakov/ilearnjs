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

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {
//     let sum = 0;
//     for(salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// alert(sumSalaries(salaries));

// let user = {
//     name: 'John',
//     age: 30
//   };

// function count(obj) {
//     return Object.keys(obj).length;
// }

//alert(count(user));

let user = {name: "John", years: 30};

let {name, years: age, isAdmin = false} = user

let salaries = {
    "John": 100, 
    "Pete": 300,
    "Mary": 250
}

function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    if(Object.keys(salaries).length === 0) return null;

    for([key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            maxName = key;
        }
    }

    return `${maxName} ${max}`;
}

//alert(topSalary(salaries));

//let date = new Date(2020, 3, 19);

// function getWeekDay(date) {
//     let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

//     return days[date.getDay()];
// }

// function getLocalDay(date) {
//     let day = date.getDay();
//     if(day == 0) day = 7;
//     return day;
// }

// alert(getLocalDay(date));

//alert(getWeekDay(date));

//alert(date);

// let date = new Date();

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// alert(getDateAgo(date, 1));

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date; 
// }

// alert(getLastDayOfMonth(2012, 2));

// function getSecondsToday() {
//    let now = new Date();

//    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//    let diff = now - today;

//    return Math.round(diff / 100);
// }

// alert(getSecondsToday());

// function getSecondsToTomorrow() {
//     let now = new Date();

//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     return Math.round((tomorrow - now) / 1000);
  
// }

// alert(getSecondsToTomorrow());

// function formatDate(date) {
//     let diff = new Date - date;

//     if (diff < 1000) {
//         return "right now";
//     }

//     if (diff < 60000) {
//         return Math.round(diff / 1000) + " sec. ago";
//     }


//     if (diff / 60000 < 60) {
//         return Math.round(diff / 60000) + " min. ago";
//     }
    
//     let d = date;

//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2));

//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


// let userV = {
//     name: "Василий Иванович",
//     age: 35
// }

// let jsonUser = JSON.stringify(userV);

// //alert(jsonUser);

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room

// }

// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert(JSON.stringify(meetup, function replacer(key, value) {
//     return (key !== "" && value === meetup) ? undefined : value;
// }));


// with loop
// function sumTo(n) {
//     let sum = 0;
//     for(i = 1; i <= n; i++) {
//         sum += i
//     }
    
//     return sum;
// }


// with rcursion
// function sumTo(n) {
//     if (n === 1) return n;
    
//     return n + sumTo(n - 1);
// }

// alert(sumTo(5));

// function factorial(n) {
//     if (n === 1) return n;

//     return n * factorial(n - 1);
// }

// alert(factorial(5));

// function fib(n) {
//     if (n <= 1) return n;
    
//     return fib(n - 1) + fib(n - 2);
// }

//alert(fib(5));

// with loop fibonacci

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for(let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// alert( fib(3) );
// alert( fib(7) );
// alert( fib(77) )

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  
//   function printList(list) {

//         alert(list.value);
//         if(list.next) printList(list.next);
//   }


// with loop

// function printList(list) {
//     let tmp = list;

//     while(tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
// }

//   printList(list);

// with loop

// function printReverseList(list) {
//     let arr = [];
//     let tmp = list;

//     while(tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     alert(arr);

//     arr = arr.reverse();
//     for(i = 0; i < arr.length; i++) {
//         alert(arr[i]);
//     }
// }

// printReverseList(list);

// function printReverseList(list) {

//     if (list.next) {
//       printReverseList(list.next);
//     }
  
//     alert(list.value);
//   }
  
//   printReverseList(list);

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// alert(sum(1)(2));

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b
//     }
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     }
// }

// function byField(name) {
//     return function(a, b) {
//         if(a[name] > b[name]) return 1;
//         return -1;
//     }
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// let arr = [1, 2, 3, 4, 5, 6, 7];

// //alert( arr.filter(inArray([3, 6, 12])) ); 

// let sortedUsers = users.sort(byField('age'));

// for(let value of sortedUsers) {
//     alert(value.name);
// }

// function makeCounter() {

//     makeCounter.counter = 0;
    

//     makeCounter.set = function(value) {
//         makeCounter.counter = value;
//     }
    
//     makeCounter.decrease = function() {
//         makeCounter.counter--;
//     };


//     return function() {
//         return makeCounter.counter++;
//     }
// }

function makeCounter() {
    let count = 0;

    function counter () {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;

}

let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15