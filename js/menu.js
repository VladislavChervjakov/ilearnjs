const $dropdown = document.querySelector( '.dropdown' );
const $navMenu = document.querySelector( '.menu' );
const menuItems = document.querySelectorAll( '.menu-item' );


menuItems.forEach( menuItem => {
    menuItem.addEventListener( 'mouseenter', (e) => {
        setTimeout( () => {           
            const windowWidth = window.innerWidth;
            const navOffsetLeft = $navMenu.getBoundingClientRect().left;
            const dropdownPosition = $dropdown.getBoundingClientRect();
            const navWidth = $navMenu.getBoundingClientRect().width;
            console.log(window.innerWidth);
            console.log($dropdown.getBoundingClientRect().right);
            console.log( navWidth );
            console.log( menuItem.getBoundingClientRect().right );
            const right = e.target.getBoundingClientRect().left + $dropdown.getBoundingClientRect().width;
            const offset = $dropdown.getBoundingClientRect().right - windowWidth;
            console.log(offset);
            
                if ( dropdownPosition.right > windowWidth ) {
                    $dropdown.style.left = ( $dropdown.offsetLeft - offset )  + 'px';
                }
            }, 0 );
    } );
} );