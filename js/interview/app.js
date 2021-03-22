// console.log(false == ''); //true
// console.log(false == []); //true
// console.log(false == {}); //false
// console.log('' == 0); //true
// console.log('' == []); //true
// console.log('' == {}); //false
// console.log(0 == 0); //true
// console.log(0 == []); //true
// console.log(0 == {}); //false
// console.log(0 == null) //false

// function sayHelloTo(name) {
//     let message = 'Hello ' + name;

//     return function() {
//         console.log(message);
//     }
// }

// let helloToElena = sayHelloTo('Elena');
// console.log(helloToElena);
// helloToElena();

// function createFrameworkManager() {
//     let fw = ['Angular', 'React'];

//     return {
//         print: function() {
//             console.log(fw.join(' '));
//         },
//         add: function(framework) {
//             fw.push(framework);
//         }
//     }
// }

// let manager = createFrameworkManager();

// console.log(manager);
// manager.print();
// manager.add('VueJS');

// manager.print();

// let fib = [1, 2, 3, 5, 8, 13];

// for(var i = 0; i < fib.length; i++) {
//     (function(j){
//         setTimeout(() => {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 1500);
//     }
//     )(i)   
// }
// Imidiate Invoked Function Expression
// let result = [];
// for(var i = 0; i < 5; i++) {
//     result.push(function() {
//         console.log(i);
//     });
// }

// for(var i = 0; i < 5; i++) {
//     (function(){
//         var j = i;
//         result.push(function() {console.log(j)});
//     })()
// }

// result[2]();
// result[4]();

// let person = {
//     surname: 'Clark',
//     knows: function(what, name) {
//         console.log(`You ${what} know, ${name} ${this.surname}`);
//     }
// }

// let john = {surname: 'Snow'}

// person.knows('all', 'Bran');
// person.knows.call(john, 'anything', 'John');

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log(this);
// }

// let elena = new Person('elena', 20);

// ============
// function logThis() {
//     console.log(this);
// }

// let obj = {num: 42}

// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// // =======
// let animal = {
//     legs: 4, 
//     logThis: function() {
//         console.log(this);
//     }
// }

// animal.logThis();

// function Cat(color, name) {
//     this.color = color;
//     this.name = name;
// }

// function myNew(constructor, ...args) {
//     let obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     console.log(constructor.prototype);
//     return constructor.apply(obj, args) || obj;
// }


// let cat = myNew(Cat, 'black', 'cat');
// console.log(cat);

// function Cat(name, color) {
//     this.color = color;
//     this.name = name;
// }

// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says meow`);
// }

// let cat = new Cat('Cat', 'white');

// cat.voice();

// function Person() {}

// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// let person = new Person();
// person.name = 'Vlad';

// console.log(person.hasOwnProperty('name')); // true
// console.log(person.hasOwnProperty('skin')); // false

// let proto = {year: 2020}
// let myYear = Object.create(proto);

// proto.year = 2200;

// console.log(myYear.year);

// console.log(myYear.year);
// console.log(myYear.hasOwnProperty('year')); // false
// console.log(myYear.__proto__ === proto); // true

let first = () => console.log('First');
let second = () => console.log('Second');
let third = () => console.log('Third');


let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item');
    let tabContent = document.querySelectorAll('.tab');
    let tabs = document.querySelector('.tabs');
    let tabsNav = document.querySelector('.tabs__nav');
    let tabName;

    function changeTab(i) {
        tabContent.forEach(item => {
            item.classList.remove('is-active')
            if(!item.classList.contains('is-active')) {
                item.classList.add('hidden');
            }
        });
         tabContent[i].classList.add('is-active');
         if(tabContent[i].classList.contains('is-active')) {
             tabContent[i].classList.remove('hidden');
         }
    }

    for(let i = 0; i < tabNav.length; i++) {
        tabNav[i].addEventListener('click', () => {
            tabNav.forEach(item => { item.classList.remove('is-active') });
            tabNav[i].classList.add('is-active');
            changeTab(i);
        });
    }

    if(tabNav.offsetWidth > tabs.offsetWidth) console.log('show arrows')
    console.log(tabsNav.offsetWidth + ':' + tabs.offsetWidth);
    
};

tab();

function likes(names) {
  
    if(names.length < 1) return 'no one likes this';
    let result = '';
    for(let i = 0; i < names.length; i++) {
       result += names[i] + ' , ';
    }
    return result;
    
  }
console.log(likes(['Peter']));

const $targets = document.querySelectorAll('.target');

let clicksInLoop = targets => {
    targets.forEach( target => {
        target.addEventListener( 'click', () => {
            console.log('Click');
            alert('Click');
        } );
    } );
};

clicksInLoop($targets);

let $menuItems = document.querySelectorAll( '.list-item' );

let mouseOverMenu = items => {
    items.forEach( item => {
        item.addEventListener( 'mouseover', e => {
            let dropdown = item.querySelector('.test-dropdown');
            dropdown.style.display = "flex";
        } );
    } );
};

mouseOverMenu( $menuItems );