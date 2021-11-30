const targetElement = document.querySelector( '.viewport-target' );

window.addEventListener( 'scroll', event => {

    const value = 1 + window.scrollY / 10;
    targetElement.style.transform = `translateY(${value}px)`;

    // if ( targetElement.getBoundingClientRect().top < window.innerHeight ) {
    //
    // } else {
    //     targetElement.style.background = 'blue';
    // }
} );