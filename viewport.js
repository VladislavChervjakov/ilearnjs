const targetElement = document.querySelector( '.viewport-target' );

window.addEventListener( 'scroll', () => {
    if ( targetElement.getBoundingClientRect().top < window.innerHeight ) {
        targetElement.style.background = 'red';
    } else {
        targetElement.style.background = 'blue';
    }
} );