const blogDateDay = "23";
const blogDateMonth = "Sep";
const blogDateMonthPL = "Wrz.";
const blogDateYear = "2026";

const lastBlogDateDay = "23";
const lastBlogDateMonth = "Sep";
const lastBlogDateMonthPL = "Wrz.";
const lastBlogDateYear = "2026";

var lang = document.getElementById('change_language').innerHTML;
var page = document.getElementById('whatpage').innerHTML;

if (lang == "Polski" && page == "Patryk Filipiak") {
    document.getElementById('date1').innerHTML = 
    "As of " + blogDateMonth + " " + blogDateYear;
    document.getElementById('date2').innerHTML = 
    "See short/updated blog (" + lastBlogDateDay +
    " " + lastBlogDateMonth + " " + lastBlogDateYear + ")";
} else if (page == "Patryk Filipiak") {
    document.getElementById('date1').innerHTML = 
    "Jako " + blogDateMonthPL + " " + blogDateYear;
    document.getElementById('date2').innerHTML = 
    "Zobacz krótki / zaktualizowany blog (" + lastBlogDateDay +
    " " + lastBlogDateMonthPL + " " + lastBlogDateYear + ")";
} else if (page == "Currently") {
        document.getElementById('date3').innerHTML = 
        lastBlogDateDay + " " + lastBlogDateMonth +
         " " + lastBlogDateYear;
} else if (page == "Teraz") {
        document.getElementById('date3').innerHTML = 
        lastBlogDateDay + " " + lastBlogDateMonthPL +
         " " + lastBlogDateYear;
}