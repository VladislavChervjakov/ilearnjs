let slider = document.getElementById( 'slider' ),
    sliderItems = document.getElementById( 'slides' ),
    prev = document.getElementById( 'prev' ),
    next = document.getElementById( 'next' );

slide ( slider, sliderItems, prev, next );

function slide ( wrapper, items, prev, next ) {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.querySelectorAll( '.slide' ),
        slidesLength = slides.length,
        slideSize = slides[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        firstClone = firstSlide.cloneNode( true ),
        lastClone = lastSlide.cloneNode( true ),
        index = 0,
        slidesToScroll = 1,
        allowShift = true,
        infiniteLoop = false

        // cloning first and last element
        items.appendChild( firstClone );
        items.insertBefore( lastClone, firstSlide );

        wrapper.classList.add( 'loaded' );

        // Mouse events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener( 'touchstart', dragStart );
        items.addEventListener( 'touchend', dragEnd );
        items.addEventListener( 'touchmove', dragAction );

        // Click events
        prev.addEventListener( 'click', function () { shiftSlide( -1 ) } );
        next.addEventListener( 'click', function () { shiftSlide( 1 ) } );

         // Transition events
        items.addEventListener( 'transitionend', checkIndex );

        function dragStart ( e ) {
            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;

            if ( e.type === 'touchstart' ) {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }

        function dragAction ( e ) {
            e = e || window.event;

            if ( e.type === 'touchmove' ) {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + 'px';
        }

        function dragEnd ( e ) {
            posFinal = items.offsetLeft;
            if ( posFinal- posInitial < -threshold ) {
                shiftSlide( 1, 'drag' );
            } else if ( posFinal - posInitial > threshold ) {
                shiftSlide( -1, 'drag' );
            } else {
                items.style.left = ( posInitial ) + 'px';
            }

            document.onmouseup = null;
            document.onmousemove = null;
        }

        function shiftSlide ( dir, action ) {
            items.classList.add( 'shifting' );

            if ( allowShift ) {
                if ( !action ) { posInitial = items.offsetLeft; }

                if ( dir === 1 ) {
                    items.style.left = ( posInitial - slideSize * slidesToScroll ) + 'px';
                    index += slidesToScroll;
                } else if ( dir === -1 ) {
                    items.style.left = ( posInitial + slideSize * slidesToScroll ) + 'px';
                    index -= slidesToScroll;    
                }

            }

            allowShift = false;
        }

        function checkIndex () {
            items.classList.remove('shifting');
            allowShift = true;

            if ( index === -1 ) {
                items.style.left = -( slidesLength * slideSize * slidesToScroll ) + 'px';
                index = slidesLength - 1;
                ///allowShift = false;
            }

            console.log(index);
            console.log(slidesLength);
            
            

            if( infiniteLoop ) {
                if ( index === slidesLength) {
                    items.style.left = - ( 1 * slideSize * slidesToScroll ) + 'px';
                    index = 0;
                }
            } else {
                if ( index === slidesLength - 3 ) {
                    allowShift = false;
                    // items.style.left = - ( 1 * slideSize * slidesToScroll ) + 'px';
                    // index = 0;
                    // allowShift = false;
                }
            }
            

        }

}