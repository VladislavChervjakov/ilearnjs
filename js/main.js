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

// let user = {name: "John", years: 30};

// let {name, years: age, isAdmin = false} = user

// let salaries = {
//     "John": 100, 
//     "Pete": 300,
//     "Mary": 250
// }

// function topSalary(salaries) {
//     let max = 0;
//     let maxName = null;

//     if(Object.keys(salaries).length === 0) return null;

//     for([key, value] of Object.entries(salaries)) {
//         if (max < value) {
//             max = value;
//             maxName = key;
//         }
//     }

//     return `${maxName} ${max}`;
// }

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

// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function() {
//         return currentSum;
//     };

//     return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15

function printNumber(from, to) {
    let current = from;

    // let timerId = setInterval(function() {
    //     alert(current);
    //     if(current == to) clearInterval(timerId);
    //     current++;
    // }, 1000);

    let timerId = setTimeout(function increase() {
        alert(current);
        if(current < to) {
            setTimeout(increase, 1000);
        }
        current++;
    }, 1000);
}

//printNumber(1, 5);

// function work(a, b) {
//     alert(a + b);
// }

// function spy(func){
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, arguments);
//     }

//     wrapper.calls = [];

//     return wrapper;
// }

// function hash(args) {
//     return args[0] + "," + args[1];
// }

// work = spy(work, hash);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }

function f(x) {
    alert(x);
}

function delay(f, ms) {

    return function(...args) {
        setTimeout(function() {
            f.call(this, args);
        }, ms);
    }
}

// alternative solution

// function delay(f, ms) {

//     return function() {
//       setTimeout(() => f.apply(this, arguments), ms);
//     };
  
//   }
  



// let f1000 = delay(f, 1000);

// f1000("test"); // показывает "test" после 1000 мс

// function debounce(f, ms) {
    
//     let isRefreshing = false;

//     return function() {
//         if(isRefreshing) return;

//         f.apply(this, arguments);
//         isRefreshing = true;

//         setTimeout(() => isRefreshing = false, ms);
//     };
// }

// function f(a) {
//     console.log(a);
// }

// function throttle(func, ms) {
//     let isThrottled = false,
//     savedArgs, 
//     saveThis;

//     function wrapper() {
//         if(isThrottled) {
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//         func.apply(this, arguments);

//         isThrottled = true;

//         setTimeout(function() {
//             isThrottled = false;
//             if(savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
// }

// let head = {
//     glasses: 1
// }

// let table = {
//     pen: 3,
//     __proto__: head 

// }

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:  table
// }

// let pockets = {
//     money: 2000,
//     __proto__: bed
// }

// alert(pockets.pen);

// function f() {
//     alert("Hello");
// }

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };

// f.defer(1000);

function f(a, b) {
    alert(a + b);
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        // setTimeout(function() {f.apply(this, args)}, ms);
        setTimeout(() => f.apply(this, args), ms);

    };
};

//f.defer(1000)(1, 2);

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

//  Object.defineProperty(dictionary, "toString", {
//     enumerable: false
//   });

// // for(let key in dictionary) {
// //     alert(key);
// // }

// alert(dictionary);

// mixin handler 

// let eventMixin = {
//     /**
//      * Подписаться на событие, использование:
//      * menu.on('select', function(item) { ... }
//      */
//     on(eventName, handler) {
//       if (!this._eventHandlers) this._eventHandlers = {};
//       if (!this._eventHandlers[eventName]) {
//         this._eventHandlers[eventName] = [];
//       }
//       this._eventHandlers[eventName].push(handler);
//     },
  
//     /**
//      * Отменить подписку, использование:
//      * menu.off('select', handler)
//      */
//     off(eventName, handler) {
//       let handlers = this._eventHandlers && this._eventHandlers[eventName];
//       if (!handlers) return;
//       for (let i = 0; i < handlers.length; i++) {
//         if (handlers[i] === handler) {
//           handlers.splice(i--, 1);
//         }
//       }
//     },
  
//     /**
//      * Сгенерировать событие с указанным именем и данными
//      * this.trigger('select', data1, data2);
//      */
//     trigger(eventName, ...args) {
//       if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//         return; // обработчиков для этого события нет
//       }
  
//       // вызовем обработчики
//       this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//     }
//   };

//   class Menu {
//       choose(value) {
//         this.trigger("select", value);
//     }
//   }
//   // Добавим примесь с методами для событий
//   Object.assign(Menu.prototype, eventMixin);
  
//   let menu = new Menu();
  
//   // Добавить обработчик, который будет вызван при событии "select":
//   menu.on("select", value => alert(`Выбранное значение: ${value}`));
  
  // Генерирует событие => обработчик выше запускается и выводит:
//   menu.choose("123"); // Выбранное значение: 123

// let err = new FormatError("ошибка форматирования");

// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError );

// function delay(ms) {
//     return new Promise(function(resolve, reject){
//         setTimeout(resolve, ms);
//     });
// }

// alternative solution

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // delay(3000).then(() => alert('выполнилось через 3 секунды'));

// async function loadJson(url) {
//     let response = await fetch(url);

//     if(response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }

// async function demoGithubUser() {
//     let user;

//     while(true) {
//         let name = prompt("Input login?", "iliakan");

//         try{
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break;
//         } 
//         catch(err) {
//             if(err instanceof HttpError && err.response.status == 404) {
//                 alert("Can not find user, please try again");
//             } else {
//                 throw err;
//             }
//         }
        
//     }

//     alert(`Full name: ${user.name}`);
//     return user;
// }
// //  demoGithubUser();

// function* pseudoRandom(seed) {
//     let value = seed;
//     while(true) {
//         value =  value * 16807 % 2147483647;
//         yield value;
//     }
// }

// let generator = pseudoRandom(1);

// alert(generator.next().value);
// alert(generator.next().value);
// alert(generator.next().value);
// alert(generator.next().value);


// let user = {
//     name: "John"
// };

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, reciever) {
            if(prop in target) {
                return Reflect.get(target, prop, reciever);
            } else {
                throw new ReferenceError(`Error there is no property ${prop}`);
            }
        }
    })
}

// user = wrap(user);

// alert(user.name); // John
// alert(user.age); 

let array = [1, 2, 3];

// array = new Proxy(array, {
//     get(array, prop, reciever) {
//         if(prop < 0) {
//             return array[array.length - (prop * -1)]
//         } else {
//             return array[prop];
//         }
//     }
// });

array = new Proxy(array, {
    get(target, prop, reciever) {
        if(prop < 0) {
            prop = array.length - (prop * -1);
        }

        return Reflect.get(target, prop, reciever);
    }
});
// alert(array[-1]);
// alert(array[-2]);

// function makeObservable(target) {
//     target[handlers] = [];
//     target.observe = function(handler) {
//         this.handlers.push(handler);
//     }

//     return new Proxy(target, {
//         set(target, property, value, reciever) {
//             let success = Reflect.set(...arguments);
//             if(success) {
//                 target[handlers].forEach(handler => handler(property, value));
//             }

//             return success;
//         }
//     });
// }

// let user = {};

// user = makeObservable(user);

// user.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });

// user.name = "John";

// let expression = prompt("Input expression: ", '2*3+2');

// alert(eval(expression));

// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// var collator = new Intl.Collator(undefined, {
//     sensitivity: "accent"
// });
// animals.sort(function(a,b) {
//     return collator.compare(a, b);
// });

// alert(animals);

// let table = document.body.firstElementChild;

// function colorTable(table) {
//     let trs = table.rows;

//     for (let i = 0; i < trs.length; i++) {
//        trs[i].cells[i].style.background = "red";
//     }
    
// }

// colorTable(table);

// let lis = document.querySelectorAll("li");

// for(li of lis) {
//     let title = li.firstChild.data;

//     title = title.trim();

//     let count = li.getElementsByTagName('li').length;

//     alert(title + ": " + count);
// }

// let data = document.querySelector('[data-widget-name]').dataset.widgetName;

// alert(data);

// let links = document.querySelectorAll("li > a");

// for(link of links) {
//     let href = link.getAttribute('href');

//     if(!href) continue;

//     if(!href.includes('://')) continue;

//     if(href.startsWith('http://internal.com')) continue;

//     link.style.color = 'orange';
// }

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';

// document.body.append(div);

// setTimeout(() => div.remove(), 1000);

// let div2 = div.cloneNode(true);

// div2.querySelector('strong').innerHTML = "Всем пока!";

// div.after(div2);

// function clear(elem) {
//     while(elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }

// or

// function clear(elem) {
//     elem.innerHTML = '';
// }


// elem = document.querySelector('ol');

// clear(elem);

// let ul = document.querySelector('.user-list');

// while(true) {
//     let liContent = prompt("Input text: ", null);

//     if(liContent == null || liContent == '') break;

//     let li = document.createElement('li');
//     li.textContent = liContent;
//     alert(li.textContent);

//     ul.append(li);
// }

// let data = {
//     "Рыбы": {
//       "форель": {},
//       "лосось": {}
//     },
  
//     "Деревья": {
//       "Огромные": {
//         "секвойя": {},
//         "дуб": {}
//       },
//       "Цветковые": {
//         "яблоня": {},
//         "магнолия": {}
//       }
//     }
//   };

//   function createTree(container, data) {
//         container.append(createTreeObject(data));
//   }

//   function createTreeObject(obj) {
//       if(!Object.keys(obj).length) return;
//       let ul = document.createElement("ul");

//       for(let key in obj) {
//           let li = document.createElement("li");
//           li.innerHTML = key;
//           let childrenUl = createTreeObject(obj[key]);
//           if(childrenUl) li.append(childrenUl);
//           ul.append(li);
//       }

//       return ul;
//   }

//   let container = document.getElementById("container");

//   createTree(container, data);

// let lis = document.getElementsByTagName('li');

// for(let li of lis) {
//     let descendantsCount = li.getElementsByTagName('li').length;
//     if(!descendantsCount) continue;

//     li.firstChild.data += '[' + descendantsCount + ']';
// }

// alert(count);

// let calendar = document.querySelector('#calendar');

// function createCalendar(elem, year, month) {
//     let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
//       let d = new Date(year, mon);

//       let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//       // пробелы для первого ряда
//       // с понедельника до первого дня месяца
//       // * * * 1  2  3  4
//       for (let i = 0; i < getDay(d); i++) {
//         table += '<td></td>';
//       }

//       // <td> ячейки календаря с датами
//       while (d.getMonth() == mon) {
//         table += '<td>' + d.getDate() + '</td>';

//         if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
//           table += '</tr><tr>';
//         }

//         d.setDate(d.getDate() + 1);
//       }

//       // добить таблицу пустыми ячейками, если нужно
//       // 29 30 31 * * * *
//       if (getDay(d) != 0) {
//         for (let i = getDay(d); i < 7; i++) {
//           table += '<td></td>';
//         }
//       }

//       // закрыть таблицу
//       table += '</tr></table>';

//       elem.innerHTML = table;
// }

// createCalendar(calendar, 2012, 9);

// function getDay(date) {
//     let day = date.getDay();
//     if(day === 0) {
//         day = 7;
//     }
//     return day - 1; 
// }



// function createClock() {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let hours = document.querySelector('.hours');
//     hours.textContent = today.getHours(); 
//     let minutes = document.querySelector('.minutes');
//     minutes.textContent = today.getMinutes();
//     let seconds = document.querySelector('.seconds');
//     seconds.textContent = today.getSeconds();
// }

// setInterval(createClock, 1000);
// or 
// function update() {
//     let clock = document.getElementById('clock');
//     let date = new Date(); // (*)
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     clock.children[0].innerHTML = hours;
  
//     let minutes = date.getMinutes();
//     if (minutes < 10) minutes = '0' + minutes;
//     clock.children[1].innerHTML = minutes;
  
//     let seconds = date.getSeconds();
//     if (seconds < 10) seconds = '0' + seconds;
//     clock.children[2].innerHTML = seconds;
//   }

//   let timerId;

// function clockStart() { // запустить часы
//   timerId = setInterval(update, 1000);
//   update(); // (*)
// }

// function clockStop() {
//   clearInterval(timerId);
//   timerId = null;
// }

// let one = document.querySelector('#one');
// let two = document.querySelector('#two');

// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// let table = document.querySelector('#table');

// let sortedRows = Array.from(table.rows)
// .slice(1)
// .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
// table.tBodies[0].append(...sortedRows);

// function showNotification(obj) {
//     let div = document.createElement('div');
//     div.style.position = 'relative';
//     div.style.top = obj.top + 'px';
//     div.style.left = obj.right + 'px';
//     div.innerHTML = obj.html;
//     div.className = obj.className;
//     if(className) div.classList.add(obj.className);
//     document.body.append(div);
//     setTimeout(() => div.style.display = "none", 1500);
// }

// showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     left: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello!", // HTML-уведомление
//     className: "welcome" // дополнительный класс для div (необязательно)
//   });

// let element = document.querySelector('#elem');
// //  let scrollBottom = element.scrollHeight - element.scrollTop - element.clientHeight;

//  let scrollBarWidth = element.offsetWidth - element.clientWidth;
//  alert(scrollBarWidth);

//  let field = document.querySelector('#field');
//   let ball = document.querySelector('#ball');

//   ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
//   ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2)+ 'px';

/**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */

    // function getCoords(elem) {
    //     let box = elem.getBoundingClientRect();
  
    //     return {
    //       top: box.top + pageYOffset,
    //       left: box.left + pageXOffset
    //     };
    //   }
    // function positionAt(anchor, position, elem) {
    //     let coords = anchor.getBoundingClientRect();

    //     if(position === 'top') {

    //         elem.style.top = coords.top - elem.offsetHeight + 'px';
    //         elem.style.left = coords.left + 'px';
    //     }
    //     if(position === 'bottom') {
    //         elem.style.top = coords.top + anchor.offsetHeight + 'px';
    //         elem.style.left = coords.left + 'px';
    //     }
    //     if(position === 'right') {
    //         elem.style.top = coords.top + 'px';
    //         elem.style.left = coords.left + anchor.offsetWidth + 'px';
    //     }
    //     if(position === 'top-in') {
    //         elem.style.top = coords.top + 'px';
    //         elem.style.left = coords.left + 'px';
    //     }
    //     if(position === 'bottom-in'){
    //         elem.style.top = coords.top + anchor.offsetHeight - elem.offsetHeight + 'px';
    //         elem.style.left = coords.left + 'px';
    //     }
    //     if(position === 'right-in'){
    //         elem.style.top = coords.top + 'px';
    //         elem.style.left = coords.left + anchor.offsetWidth - elem.offsetWidth + 'px';
    //     }
    // }   

    // /**
    //  * Показывает заметку с заданным содержимым на заданной позиции
    //  * относительно элемента anchor.
    //  */
    // function showNote(anchor, position, html) {
    //   let note = document.createElement('div');
    //   note.className = "note";
    //   note.innerHTML = html;
    //   document.body.append(note);

    //   positionAt(anchor, position, note);
    // }

    // // test it
    // let blockquote = document.querySelector('blockquote');

    // showNote(blockquote, "top", "note above");
    // showNote(blockquote, "right", "note at the right");
    // showNote(blockquote, "bottom", "note below");
    // showNote(blockquote, "top-in", "note top in");
    // showNote(blockquote, "bottom-in", "note bottom in");
    // showNote(blockquote, "right-in", "note right in");

    // let button = document.querySelector('.hide-text-button');
    // let text = document.querySelector('.text');

    // button.addEventListener('click', () => text.style.display = 'none');

    // let button = document.querySelector('.hide-self-button');

    // button.addEventListener('click', () => button.style.display = 'none');

    // let field = document.querySelector('#field');
    // let ball = document.querySelector('#ball');

    // field.addEventListener('click', function(event) {
    //     // alert(event.clientY + " : " + event.clientX);
    //     let coordFields = this.getBoundingClientRect();
    //     let ballCoords = ball.getBoundingClientRect();
    //     if (ballCoords.top < 0) ballCoords.top = 0;
    //   // запрещаем пересекать левую границу поля
    //   if (ballCoords.left < 0) ballCoords.left = 0;
    //     ball.style.left = event.clientX - coordFields.left - field.clientLeft - ball.offsetWidth/2 + 'px';
    //     ball.style.top = event.clientY - coordFields.top - field.clientTop - ball.clientHeight/2 + 'px';
    //       // // запрещаем пересекать правую границу поля
    // if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    //     ballCoords.left = field.clientWidth - ball.clientWidth;
    //   }
    // });

    // let elem = document.querySelector('#elem');
    // let scrollBottom;
    // elem.addEventListener('click', function(){
    //     scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
    //     console.log(scrollBottom);
    // });

    // console.log(elem.offsetWidth - elem.clientWidth);

    // let field = document.querySelector('#field');
    // let ball = document.querySelector('#ball');
    // ball.style.left = field.clientWidth/2 - ball.clientWidth/2 + 'px';
    // ball.style.top = field.clientHeight/2 - ball.clientHeight/2 + 'px';
    // alert(ballCoordinates);

    // let field = document.querySelector('#field');
    // let coords = field.getBoundingClientRect();
    // let topLeft = [coords.left, coords.top];
    // let rightBottom = [coords.right, coords.bottom];
    // let innerTop = [coords.left + field.clientLeft, coords.top + field.clientTop]; 
    // let innerBottom = [coords.left + field.clientLeft + field.clientWidth,
    //      coords.top + field.clientTop + field.clientHeight];

    // console.log(topLeft[0] + ":"+ topLeft[1]);
    // console.log(rightBottom[0] + ":"+ rightBottom[1]);
    // console.log(innerTop[0] + ":"+ innerTop[1]);
    // console.log(innerBottom[0] + ":"+ innerBottom[1]);

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    // function positionAt(anchor, position, elem){
    //     let coords = anchor.getBoundingClientRect();
    //     switch(position) {
    //         case 'top':
    //         elem.style.top = coords.top - elem.clientHeight + 'px';
    //         elem.style.left = coords.left + 'px';
    //         break;
    //         case 'right': 
    //         elem.style.top = coords.top + 'px';
    //         elem.style.left = coords.left + anchor.offsetWidth + 'px';
    //         break;
    //         case 'bottom':
    //         elem.style.top = coords.bottom + 'px';
    //         elem.style.left = coords.left + 'px';
    //     }
    // }

    // function showNote(anchor, position, html) {
    //     let note = document.createElement('div');
    //     note.className = "note";
    //     note.innerHTML = html;
    //     document.body.append(note);
  
    //     positionAt(anchor, position, note);
    //   }
  
    //   // test it
    //   let blockquote = document.querySelector('blockquote');
  
    //   showNote(blockquote, "top", "note above");
    //   showNote(blockquote, "right", "note at the right");
    //   showNote(blockquote, "bottom", "note below");


    //   function positionAt(anchor, position, elem){
    //     let coords = getCoords(anchor);
    //     switch(position) {
    //         case 'top':
    //             elem.style.top = coords.top - elem.offsetHeight + 'px';
    //             elem.style.left = coords.left + 'px';
    //             break;
    //         case 'right': 
    //             elem.style.top = coords.top + 'px';
    //             elem.style.left = coords.left + anchor.offsetWidth + 'px';
    //             break;
    //         case 'bottom':
    //             elem.style.top = coords.top + anchor.offsetHeight + 'px';
    //             elem.style.left = coords.left + 'px';
    //             break;
    //         case 'top-in':
    //             elem.style.top = coords.top + 'px';
    //             elem.style.left = coords.left + 'px';
    //             break;
    //         case 'bottom-in': 
    //             elem.style.top = coords.top + anchor.offsetHeight - elem.offsetHeight + 'px';
    //             elem.style.left = coords.left + 'px';
    //             break;
    //         case 'right-in':
    //             elem.style.top = coords.top + 'px';
    //             elem.style.left = coords.left + anchor.offsetWidth - elem.offsetWidth + 'px';
    //     }
    // }

    // function showNote(anchor, position, html) {
    //     let note = document.createElement('div');
    //     note.className = "note";
    //     note.innerHTML = html;
    //     document.body.append(note);
  
    //     positionAt(anchor, position, note);
    //   }
  
    //   // test it
    //   let blockquote = document.querySelector('blockquote');
  
    //   showNote(blockquote, "top", "note above");
    //   showNote(blockquote, "right", "note at the right");
    //   showNote(blockquote, "bottom", "note below");
    //   showNote(blockquote, "top-in", "note top-in");
    //   showNote(blockquote, "bottom-in", "note bottom-in");
    //   showNote(blockquote, "right-in", "note right-in");

    // let hideText = document.querySelector('.hide-text-button');
    // let hideSelf = document.querySelector('.hide-self-button');
    // let text = document.querySelector('.text');
    // hideText.addEventListener('click', function(){
    //     text.style.display = 'none';
    // });
    // hideSelf.addEventListener('click', function(){
    //     hideSelf.style.display = 'none';
    // });

    // let field = document.querySelector('#field');
    // let ball = document.querySelector('#ball');
    
    // field.addEventListener('click', function(event){
    //     let coordField = field.getBoundingClientRect();
  
    //     let left = event.clientX - coordField.left - field.clientLeft - ball.offsetWidth/2;
    //     let top = event.clientY - coordField.top - field.clientTop - ball.offsetHeight/2;

    //     if(top + ball.clientHeight > field.clientHeight) {
    //         top = field.clientHeight - ball.clientHeight;
    //     }

    //     if(left + ball.clientWidth > field.clientWidth){
    //         left = field.clientWidth - ball.clientWidth;
    //     }

    //     if(top < 0){
    //         top = 0;
    //     }

    //     if(left < 0){
    //         left = 0    ;
    //     }

    //     ball.style.left = left + 'px';
       // ball.style.top = top + 'px';
        // ball.style.top =  event.clientY - ball.offsetHeight + 'px';
        // ball.style.left = event.clientX - ball.offsetWidth + 'px';
        // if(ball.offsetTop < 0) ball.offsetTop = 0; 

  //  });

//   let toggler = document.querySelector('.toggler');
//   let dropdown = document.querySelector('.dropdown');

//   toggler.addEventListener('click', function(){
        
//         dropdown.classList.toggle('show');
//         if(dropdown.classList.contains('show')){
//             toggler.innerHTML = '▼';
//         } else {
//             toggler.innerHTML = '▶';
//          }
//   });

// let panes = document.querySelectorAll('.pane');
// panes.forEach(function(pane){
//     pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
//     pane.firstChild.onclick = function(){
//         pane.style.display = 'none';
//     };
// });
    
// let removeBtns = document.querySelectorAll('.remove-button');


// removeBtns.forEach(function(removeBtn){
//     removeBtn.addEventListener('click', function(){
//         let parent = removeBtn.parentElement;
//         console.log(parent);
//         parent.style.display = 'none';
//     });
// });

// let width = 130;
// let count = 3;

// let listC = document.querySelector('ul');
// let listElems = document.querySelectorAll('li');
// let prev = document.querySelector('.arrow-left');
// let next = document.querySelector('.arrow-right');

// let position = 0;

// prev.onclick = function() {
//     position += width * count;

//     position = Math.min(position,0);
//     listC.style.marginLeft = position + 'px';
// }

// next.onclick = function() {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     listC.style.marginLeft = position + 'px';
// }

// let pane = document.querySelector('.pane');
// let container = document.querySelector('#container');
// container.onclick = function(event){
//     let target = event.target;

//     if(target.className == 'remove-button'){
//         event.target.closest('.pane').remove();
//     }
// };
 


// let tree = document.querySelector('.tree');

// tree.addEventListener('click', function(event){
//     let span = event.target;
//     if(span.tagName !== "SPAN") return;
//     for(let node of Array.from(span.parentElement.childNodes).slice(1)){
//         node.hidden = !node.hidden;
//     }
// });

      //  ловим клики на всём дереве
    //   tree.onclick = function(event) {
  
    //     if (event.target.tagName != 'SPAN') {
    //       return;
    //     }
  
    //     let childrenContainer = event.target.parentNode.querySelector('ul');
    //     console.log(childrenContainer);
    //     if (!childrenContainer) return; // нет детей
  
    //     childrenContainer.hidden = !childrenContainer.hidden;
    //   }


// let table = document.querySelector("#grid");

// table.onclick = function(e){
//     if (e.target.tagName != 'TH') return;

//     let th = e.target;

//     sortTable(th.cellIndex, th.dataset.type);
        
//     }

// function sortTable(colPos, type){
//     let tbody = table.querySelector('tbody');
//     let rowsArray = Array.from(tbody.rows);
//     let compare;

//     switch (type) {
//         case 'number':
//             compare = function(rowA, rowB){
//                 return rowA.cells[colPos].innerHTML - rowB.cells[colPos].innerHTML;
//             };
//         break;
//         case 'string':
//             compare = function(rowA, rowB){
//                 return rowA.cells[colPos].innerHTML > rowB.cells[colPos].innerHTML ? 1 : -1;
//             };
//         break;
//     }

//     rowsArray.sort(compare);
//     tbody.append(...rowsArray);

// }


// function createTooltip(text){
//     let tooltip = document.createElement('div');
//     tooltip.classList.add('tooltip');
//     tooltip.innerHTML = text;
//     return tooltip;
// }

// let button = document.querySelector('button');

// document.onmouseover = function(event){
//     let target = event.target;
//     if(target.tagName != 'BUTTON') return;
//     let tooltip = createTooltip(event.target.dataset.tooltip);
//     let buttonCoord = target.getBoundingClientRect();
//     document.body.append(tooltip);
//     tooltip.style.top = buttonCoord.top - tooltip.offsetHeight - 5 + 'px';
//     tooltip.style.left = buttonCoord.left + 'px';
//     let top = buttonCoord.top - tooltip.offsetHeight - 5;
//     if(top < 0){
//         tooltip.style.top = buttonCoord.top + event.target.offsetHeight + 5 + 'px';
//     }
//     target.onmouseout = function(){
//         tooltip.hidden = true;
//     }
// }

// task 1
// let text = 'Hi, we are learning Javascript!'
// let reverseText = text.split('').reverse().join('');
// console.log(reverseText);

// task 2

let people = [
    {name: 'Michael', budget: 4500},
    {name: 'Max', budget: 4300},
    {name: 'Mark', budget: 4100},
];

let cars = ['Mercedes', 'Lexus', 'Lamborghini'];

let fib = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(cars.includes('Lexus'));

// let upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// });

let pow2 = num => num ** 2;
// let sqrt = num => Math.sqrt(num);

// let pow2Fib = fib.map(pow2).map(Math.sqrt);
let pow2Fib = fib.map(pow2);
let filteredNumbers =  pow2Fib.filter(num => num > 20);

let allBudget = people
    .filter(person => person.budget > 4100)
    .reduce((acc, person) => {
        acc += person.budget;
        return acc;
}, 0);

let arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
let sum = arr.reduce((acc, num) => {
    acc += num;
    return acc;
});
let mult = arr.reduce((acc, num) => {
    acc *= num;
    return acc;
});

console.log('Summ: ' + sum + ' , ' + 'Multiple: ' + mult);

let falseArray = [NaN, 0, 77, false, -17, '',undefined, 99, null];
let filtered = falseArray.filter(value => value !== false);

let litmir = [ 
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];

let sorted = litmir.sort((a, b) => {
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1;
    return 0;

});

var num = 5;
var arrNum = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
let emptyPair;
function findCouple(array, number){
    let pairs = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            // console.log(array[i] + ':' + array[j]);
            if(array[i] + array[j] === number){
                pairs.push('Your pair of numbers is: ' + array[i] + ' + ' + array[j]);
            } 
        }
    }
    pairs.forEach(pair => console.log(pair));
}

function propertyValue(array, key){
    array.forEach(element => console.log(element[key]));
}

propertyValue(litmir, 'author');

findCouple(arrNum, 5);  

// console.log(sorted);
// console.log(falseArray);
// console.log(filtered);
// console.log(allBudget);

// console.log(fib);
// console.log(pow2Fib);
// console.log(filteredNumbers);
// console.log(cars);
// console.log(upperCaseCars);

// method find
// let person = people.find(function(person) {
//     return person.budget == 4300;
// });
//let person = people.find(person => person.budget === 4300);
// loop
// let searchedPerson;
// for(let person of people){
//     if(person.budget === 4300){
//         searchedPerson = person;
//     }
// }
// console.log(searchedPerson);

//console.log(person);


let person = {
    name: 'Vlad',
    age: 22,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    ['key_' + (1 + 3)]: 'Complex Key', // key_4
    greet() {
        console.log('greet from person');
    },
    info() {
        console.info('Name of the person: ' + this.name);
    }
};

let {name, age: personAge = 10, languages} = person;

console.log(name + ' : ' + personAge + ' : ' + languages);

let logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this));
    },
    keysAndValues() {
        // let self = this;
        Object.keys(this).forEach(key => {
            console.log(key + ' : '  + this[key]);
        });
        // Object.keys(this).forEach(function(key){
        //     console.log(key + ' : '  + this[key]);
        // }.bind(this));
    },
    withParams(top = false, between = false, bottom = false){
        if(top) {
            console.log('-------- Start ---------');
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(key + ' : '  + this[key]);
            if(between && index !== array.length - 1) {
                console.log('-------------------');
            }
        });
        if(bottom) {
            console.log('--------- End ---------');
        }
        
    }
}

let timeout = setTimeout(() => {
    console.log('After 2.5 seconds');
}, 2500);

let interval = setInterval(() => {
    console.log('After 1 second');
}, 1000);

// let delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait);
// };

// delay(() => {
//     console.log('After 2 seconds');
// }, 2000);

let delays = (wait = 1000) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject('Something went wrong. Try again');
        }, wait);
    });
   return promise;
};

// delays(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('finally'))

clearInterval(interval);

let getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]));

getData().then(data => console.log(data));

async function asyncExample() {
    try{
        await delays(3000);
        let data = await getData();
        console.log('Data', data);
    } catch (e){
        console.log(e);
    } finally{
        console.log('Finally');
    }
}

asyncExample();

// let bound = logger.keys.bind(person);
// bound();

// logger.keys.call(person);
// logger.keysAndValues.call(person);
// logger.keysAndValues.call({a: 1, c: 2});

// logger.withParams.call(person, true, true, true);
// logger.withParams.apply(person, [true, true, true]);


// console.log(person);
// delete person['key_4'];
// console.log(person);