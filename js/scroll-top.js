const offset = 100;
const scrollUp = document.querySelector( '.scroll-up' );
const scrollUpSvgPath = document.querySelector( '.scroll-up__svg-path' );
const pathLength = scrollUpSvgPath.getTotalLength();
const element = document.getElementById( 'element' );

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// udate dashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - ( getTop() * pathLength / height )
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// on scroll
window.addEventListener( 'scroll', () => {
    updateDashoffset();
    if ( getTop() > offset ) {
        scrollUp.classList.add( 'scroll-up--active' );
    } else {
        scrollUp.classList.remove( 'scroll-up--active' );
    }
} );


function smoothScroll( targetId, duration ) {
    let target = document.getElementById( targetId );
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation( currentTime ) {
        if ( startTime === null ) { startTime = currentTime }
        const timeElapsed = currentTime - startTime;
        const run = ease( timeElapsed, startPosition, distance, duration );
        window.scrollTo( 0, run );
        if ( timeElapsed < duration ) requestAnimationFrame( animation );
    }

    // slow down from start
    function acceleratingFromZeroVelocity (t, b, c, d) {
        t /= d;
        return c*t*t + b;
    };

    // slow down End
    function deceleratingToZeroVelocity (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    };

    //smooth
    function ease ( t, b, c, d ) {
        t /= d/2;
	    if (t < 1) return c/2*t*t + b;
	    t--;
	    return -c/2 * (t*(t-2) - 1) + b;
    };
    


    requestAnimationFrame( animation );
}



// click
scrollUp.addEventListener( 'click', () => {
    smoothScroll( 'element', 1000 );
} );