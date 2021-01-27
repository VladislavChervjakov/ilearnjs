let heading = document.getElementById('hello');
let heading2 = document.querySelector('h2');

console.dir(heading2);

let heading3 = heading2.nextElementSibling;
console.log(heading3);

setTimeout(() => {
    addStylesTo(heading, 'JavaScript');
}, 1500);

setTimeout(() => {
    addStylesTo(heading3, 'Practice', 'yellow');
}, 3000);

setTimeout(() => {
    addStylesTo(heading2, 'And all will be ok', 'blue', '2rem');
}, 4000);

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'green';
    node.style.padding = '2rem';
    if(fontSize) {
        node.style.fontSize = fontSize;
    }
}

heading.onclick = () => {
    if(heading.style.color === 'red') {
        heading.style.color = '#000';
        heading.style.backgroundColor = '#fff';
    } else {
        heading.style.color = 'red';
        heading.style.backgroundColor = 'green';
    }
};

heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'blue') {
        heading2.style.color = '#000';
        heading2.style.backgroundColor = '#fff';
    } else {
        heading2.style.color = 'blue';
        heading2.style.backgroundColor = 'green';
    }
});