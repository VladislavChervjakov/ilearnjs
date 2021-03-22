document.addEventListener( 'DOMContentLoaded', () => {

    const date = new Date( 'Jan 1 2022 00:00:00' );
    
    const $days = document.querySelector( '.time-count-item-days .time-count-val' );
    const $hours = document.querySelector( '.time-count-item-hours .time-count-val' );
    const $minutes = document.querySelector( '.time-count-item-minutes .time-count-val' );
    const $seconds = document.querySelector( '.time-count-item-seconds .time-count-val' );

    const timeCount = () => {
        let now = new Date();
        let timeleft = date - now;

        let days = Math.floor( timeleft / 1000 / 60 / 60 / 24 ); // get days

        let hours = Math.floor( timeleft / 1000 / 60 / 60 ) % 24; // get hours
        
        let minutes = Math.floor(timeleft / 1000 / 60 ) % 60; // get minutes

        let seconds = Math.floor(timeleft / 1000 ) % 60; // get seconds

        $days.textContent = days;
        $hours.textContent = hours;
        $minutes.textContent = minutes;
        $seconds.textContent = seconds;
        
    };

    timeCount();

    setInterval( timeCount, 1000 );

} );