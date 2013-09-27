$(document).ready(function() {
    $('.body').each(function() {
        $(this).html($(this).text());
    });

    $('.time').each(function() {
        $(this).text(formatTime($(this).text()));
    });

    $('.date').each(function() {
        $(this).text(formatDate($(this).text()));
    });

    function formatDate(dateString) {
        var date = new Date(dateString);
        var dotw = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var dotwString = dotw[date.getDay()];
        var monthString = months[date.getMonth()];
        var dateString = date.getDate();
        var yearString = date.getFullYear();

        return dotwString + ', ' + monthString + ' ' + dateString + ', ' + yearString; 
    }

    function formatTime(dateString) {
        var date = new Date(dateString);
        var isAM = true;
        var hours = date.getHours();
        if (hours > 12) {
            isAM = false;
            hours -= 12;
        }
        var minutes = date.getMinutes();
        if (minutes.toString().length < 2)
            minutes = '0' + minutes;

        if (isAM)
            return hours + ":" + minutes + " AM";
        else
            return hours + ":" + minutes + " PM";
    }

});