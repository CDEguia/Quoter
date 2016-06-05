/**
 * Created by cdeguia on 6/5/16.
 */
getQuote();

$(document).ready(function() {
    var quoteText = "";
    $("#getQuote").on("click", getQuote);
});



function getQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(changetext);
}

function changetext(json) {

    var quoteText = JSON.stringify(json.quoteText).replace(/\"/g, '');
    var quoteAuthor = JSON.stringify(json.quoteAuthor).replace(/\"/g, '');

    $(".message").html(quoteText);
    $(".author").html(quoteAuthor);
    $('#twitshare').attr(
        'href',
        'https://twitter.com/intent/tweet?via=DC_Eguia&related=freecodecamp,codepen&hashtags=quotes&text=' + encodeURIComponent(quoteText + "  -" + quoteAuthor));
}