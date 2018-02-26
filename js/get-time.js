$(document).ready(function () {
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// make single object
    var newDate = new Date();
// make current time
    newDate.setDate(newDate.getDate());
// setting date and time
    $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {
// Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
// Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);

    setInterval( function() {
// Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
// Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

    setInterval( function() {
// Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
// Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
});