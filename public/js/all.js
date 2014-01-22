/**
 * So this isn't exactly pretty. We're actually just going through, checking
 * if the URL of the page matches the nav bar item, and then adding the 
 * 'selected' class if it does. This isn't very good style, and it was only
 * done because a clean solution using Handlebars server-side wasn't readily
 * apparent.
 */

$(document).ready(function() {
    $(".navbar a").each(function() {
        var tokens = window.location.href.split("/");
        var pageName = tokens[tokens.length - 1];
        if (pageName.length === 0) pageName = "programming club";
        if ($(this).text().trim().toLowerCase() === pageName) {
            $(this).addClass("selected");
        }
    });
});