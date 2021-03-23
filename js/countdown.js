document.addEventListener( 'DOMContentLoaded', () => {

    const date = new Date( 'Jan 1 2024 00:00:00' );
    
    const $years = document.querySelector( '.time-count-item-years .time-count-val'  );
    const $month = document.querySelector( '.time-count-item-month .time-count-val' );
    const $weeks = document.querySelector( '.time-count-item-weeks .time-count-val' );
    const $days = document.querySelector( '.time-count-item-days .time-count-val' );
    const $hours = document.querySelector( '.time-count-item-hours .time-count-val' );
    const $minutes = document.querySelector( '.time-count-item-minutes .time-count-val' );
    const $seconds = document.querySelector( '.time-count-item-seconds .time-count-val' );

    const timeCount = () => {
        let now = new Date();
        let timeleft = date - now;

        let years = Math.floor( timeleft / 1000 / 60 / 60 / 24 / 30 / 12 );

       // let month = Math.floor( timeleft / 1000 / 60 / 60 / 24 / 30 );

       month = ( date.getFullYear() - now.getFullYear() ) * 12;

       console.log(month);
       

        if (month > 12) {
            month = month % 12;
        }

        let days = Math.floor( timeleft / 1000 / 60 / 60 / 24 ); // get days

        let hours = Math.floor( timeleft / 1000 / 60 / 60 ) % 24; // get hours
        
        let minutes = Math.floor(timeleft / 1000 / 60 ) % 60; // get minutes

        let seconds = Math.floor(timeleft / 1000 ) % 60; // get seconds

        $years.textContent = years;
        $month.textContent = month;
        $days.textContent = days;
        $hours.textContent = hours;
        $minutes.textContent = minutes;
        $seconds.textContent = seconds;
        
    };

    timeCount();

    setInterval( timeCount, 1000 );

} );