document.addEventListener( 'DOMContentLoaded', () => {

    const date = new Date( 'May 1 2021 00:00:00' );
    
    const $years = document.querySelector( '.time-count-item-years .time-count-val'  );
    const $month = document.querySelector( '.time-count-item-month .time-count-val' );
    const $weeks = document.querySelector( '.time-count-item-weeks .time-count-val' );
    const $days = document.querySelector( '.time-count-item-days .time-count-val' );
    const $hours = document.querySelector( '.time-count-item-hours .time-count-val' );
    const $minutes = document.querySelector( '.time-count-item-minutes .time-count-val' );
    const $seconds = document.querySelector( '.time-count-item-seconds .time-count-val' );

      // clock circle
      const dashArrayLength = 282.6;
      const multValSec = 282.6 / 60;

      let $circle = document.querySelector('.circle-animation-circle-seconds');
      

    const timeCount = () => {
        let now = new Date();
        let timeleft = date - now;

        let years = Math.floor( timeleft / 1000 / 60 / 60 / 24 / 30 / 12 );

       // let month = Math.floor( timeleft / 1000 / 60 / 60 / 24 / 30 );

       month = ( date.getFullYear() - now.getFullYear() ) * 12;

       month -= date.getMonth();
       month += now.getMonth();

       month = month <= 0 ? 0 : month;

       console.log(month);
       
       

        if (month > 12) {
            month = month % 12;
        }

        let days = Math.floor( timeleft / 1000 / 60 / 60 / 24 ); // get days

        let hours = Math.floor( timeleft / 1000 / 60 / 60 ) % 24; // get hours
        
        let minutes = Math.floor(timeleft / 1000 / 60 ) % 60; // get minutes

        let seconds = Math.floor(timeleft / 1000 ) % 60; // get seconds

        $circle.style.strokeDashoffset = multValSec * seconds;


        $years.textContent = years;
        $month.textContent = month;
        $days.textContent = days;
        $hours.textContent = hours;
        $minutes.textContent = minutes;
        $seconds.textContent = seconds;
        
    };

    timeCount();

    setInterval( timeCount, 1000 );

    function descendingOrder(n){
        //...
        let arrayN = n.toString().split('').map( element => parseInt( element, 10 ) );
        arrayN.sort( ( a, b ) => {
           return b - a;
        } );
        console.log( arrayN );
        
        const result = arrayN.join('');
        return +result;
      }

      console.log( descendingOrder(2343242) );
      


} );

let string = 'string';

console.log(string.length);
