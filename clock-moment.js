let hours = moment().format( "HH" );
let minutes = moment().format( "mm" );
let seconds = moment().format( "ss" );

document.querySelector( "#hours" ).innerHTML = "<span class='show'>"+hours+"</span>";
document.querySelector( "#minutes" ).innerHTML = "<span class='show'>"+minutes+"</span>";
document.querySelector( "#seconds" ).innerHTML = "<span class='show'>"+seconds+"</span>";

function changeTime() {
    if ( seconds !== moment().format( "ss" ) ) {
        seconds = moment().format( "ss" );
        changeHtml("#seconds", seconds);
    }

    if ( minutes !== moment().format( "mm" ) ) {
        minutes = moment().format( "mm" );
        changeHtml("#minutes", minutes);
    }

    if ( hours !== moment().format( "HH" ) ) {
        hours = moment().format( "HH" );
        changeHtml("#hours", hours);
    }

    setTimeout( changeTime, 1000 );
}

function changeHtml(id, value) {
    let contElem = document.querySelector( id );

    contElem.querySelector( ".show" ).className = "hide";

    let span = document.createElement( "span" );
    span.className = "show";
    span.innerText = value;
    contElem.appendChild(span);
    // issue with removing dom object
    //contElem.querySelector( ".hide" ).remove();
    contElem.querySelector( ".hide" ).addEventListener( 'animationend', () => {
        contElem.querySelector( ".hide" ).remove();
    } );
    
}

changeTime();