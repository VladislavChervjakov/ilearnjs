// function Carousel(setting) {

// 	/* Scope privates methods and properties */
// 	let privates = {};

// 	/* Privates properties */
// 	privates.setting = setting;

// 	privates.sel = {
// 		"main": document.querySelector(privates.setting.main),
// 		"wrap": document.querySelector(privates.setting.wrap),
// 		"children": document.querySelector(privates.setting.wrap).children,
// 		"prev": document.querySelector(privates.setting.prev),
// 		"next": document.querySelector(privates.setting.next)
// 	};

// 	privates.opt = {
// 		"position": 0,
// 		"max_position": document.querySelector(privates.setting.wrap).children.length
// 	};

// 	// Control
// 	if(privates.sel.prev !== null) {
// 		privates.sel.prev.addEventListener('click', () => {
// 			this.prev_slide();
// 		});
// 	}

// 	if(privates.sel.next !== null) {
// 		privates.sel.next.addEventListener('click', () => {
// 			this.next_slide();
// 		});
//     }
    
//     /* Public methods */
// // Prev slide
// this.prev_slide = () => {
// 	--privates.opt.position;

// 	let offset = (privates.opt.position - 0.1) * 10;

// 	if(privates.opt.position < 0) {
// 		privates.sel.wrap.classList.add('s-notransition');
// 		privates.opt.position = privates.opt.max_position - 1;
// 	}

// 	privates.sel.wrap.style["transform"] = `translateX(-${offset}%)`;
// };


// // Next slide
// this.next_slide = () => {
// 	++privates.opt.position;
// 	let offset = privates.opt.position;

// 	if(privates.opt.position >= privates.opt.max_position) {
// 		privates.opt.position = 0;
// 	}
// 	console.log(offset);
	

// 	privates.sel.wrap.style["transform"] = `translateX(-${offset}00%)`;
// };

// }


// new Carousel({
// 	"main": ".js-carousel",
// 	"wrap": ".js-carousel__wrap",
// 	"prev": ".js-carousel__prev",
// 	"next": ".js-carousel__next"
// });

const slider = document.querySelector( '.slider' );
const innerSlider = document.querySelector( '.slider-inner' );

let pressed = false;
let startx;
let x;

slider.addEventListener( 'mousedown', e => {
	pressed = true;
	startx = e.offsetX - innerSlider.offsetLeft;
	slider.style.cursor = 'grabbing';
	console.log(startx);
	
} );

slider.addEventListener( 'mouseenter', () => {
	slider.style.cursor = 'grab';
} );

slider.addEventListener( 'mouseup', () => {
	slider.style.cursor = 'grab';
} );

window.addEventListener( 'mouseup', () => {
	pressed = false;
} );

slider.addEventListener( 'mousemove', e => {
	if ( !pressed ) return;
	e.preventDefault();

	x = e.offsetX;

	innerSlider.style.left = `${x - startx}px`;
	checkBoundary();
} );

function checkBoundary() {
	const outer = slider.getBoundingClientRect();
	let inner = innerSlider.getBoundingClientRect();
	console.log(inner);
	console.log(outer);
	
	

	if ( parseInt( innerSlider.style.left ) > 0 ) {
		innerSlider.style.left = '0px';
	} else if ( inner.right < outer.right ) {
		innerSlider.style.left = `-${inner.width - outer.width}px`;
	}
	
}