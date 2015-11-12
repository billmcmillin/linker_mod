var pageInitialized = false;
$(function()
{
    if(pageInitialized) return;
    pageInitialized = true;
    $("document").ready(function() {
            $("#col2_button").on("mousemove", onMouseOver);
            $("#col2_button").on("mouseleave", onMouseLeave);

            $("#col1_button").on("mousemove", onCatMouseOver);
            $("#col1_button").on("mouseleave", onCatMouseLeave);
            //get the current URL
            var itemURL = window.location.href;
            //base URLs for different ILL forms
            var base1 = "http://illiad.uc.edu/illiad/CIN/illiad.dll/OpenURL?CitedIn=360+Link:+sersol%3AuniqueIDQuery&";
            var base2 = "http://illiad.uc.edu/illiad/MXC/illiad.dll/OpenURL?CitedIn=360+Link:+sersol%3AuniqueIDQuery&";
            var base3 = "http://uclid.uc.edu/search~S14/t=";
            var base4 = "http://uclid.uc.edu/search/i=";

        /*for catalog searches*/
            //grab the title from the URL
            var title = itemURL.replace(/.*&title=/i, "");
            var title = title.replace(/&.*/i, "");

            //grab issn from the URL
            var issn = itemURL.replace(/.*issn=/i, "");
            var issn = issn.replace(/&.*/i, "");

            //append it to the base URL
            var search1 = base3 + title;
            var search2 = base4 + issn;

            //update the link in html
            $("#by_title").html("<a href=\x22" + search1 + "\x22>By Title</a>");
            $("#by_issn").html("<a href=\x22" + search2 + "\x22>By ISSN</a>");

        /*for ILL*/
            //extract the OpenURL elements from the whole URL
            var elements = itemURL.replace(/.*serialssolutions.com\/?/i, "");

            //concatenate the OpenURL elements to the base
            var open1 = base1 + elements;
            var open2 = base2 + elements;

            //update the link in html
            $("#illiad_link").html("<a href=\x22" + open1 + "\x22>Interlibrary Loan Form</a>");
            $("#hsl_link").html("<a href=\x22" + open2 + "\x22>Health Sciences Library Users: Submit an interlibrary loan request</a>");

        });
        

        function onMouseOver(evt) {
            $("#col2_content").css("visibility", "visible");
            $
        }
        
        function onMouseLeave(evt) {
            $("#col2_content").css("visibility", "hidden");
        }

        function onCatMouseOver(evt) {
            $("#col1_content").css("visibility", "visible");
            $
        }
        
        function onCatMouseLeave(evt) {
            $("#col1_content").css("visibility", "hidden");
        }
});
