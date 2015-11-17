jQuery(function($){
    var pageInitialized = false;
    $(function()
    {
        if(pageInitialized) return;
        pageInitialized = true;
        $("document").ready(function() {
        /*sidebar styles*/
            $(".hide-side").css("visibility","hidden");
            $(".hide-side2").css("visibility","hidden");
            $("a:contains('Search the library catalog')").addClass("btn searchCat-action");
            $("a:contains('Request via Interlibrary Loan')").addClass("btn ill-action");
            $("<h3 class=\"custom-links-header\">Not available online or through the catalog?</h3>").insertBefore(".xill");
            $("<h3>Questions?</h3>").insertBefore(".ask_us");
            $(".ask_us a").addClass("btn ask-action");
            $(".ask-action").css("margin-bottom", "10px");


           

        /*sidebar actions*/   
            $(".sidebar-title").on("mousemove", onSideMouseOver);
            $(".sidebar-title").on("mouseleave", onSideMouseLeave);
            $(".xill").on("mousemove", onSide2MouseOver);
            $(".xill").on("mouseleave", onSide2MouseLeave);


            /*non-sidebar links*/

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

                //now update the CSS
                $("#by_title").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $("#by_issn").css({"display":"block","margin-left":"10px", "margin-top":"5px"});

            /*for ILL*/
                //extract the OpenURL elements from the whole URL
                var elements = itemURL.replace(/.*serialssolutions.com\/?/i, "");

                //concatenate the OpenURL elements to the base
                var open1 = base1 + elements;
                var open2 = base2 + elements;

                //update the link in html
                $("#illiad_link").html("<a href=\x22" + open1 + "\x22>Interlibrary Loan Form</a>");
                $("#hsl_link").html("<a href=\x22" + open2 + "\x22>Health Sciences Library Interlibrary Loan Form</a>");

                //now update the CSS
                $("#illiad_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $("#hsl_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});

            });
            

            function onMouseOver(evt) {
                $("#col2_content").css("visibility", "visible");   
            }
            
            function onMouseLeave(evt) {
                $("#col2_content").css("visibility", "hidden");
            }

            function onCatMouseOver(evt) {
                $("#col1_content").css("visibility", "visible");
            }
            
            function onCatMouseLeave(evt) {
                $("#col1_content").css("visibility", "hidden");
            }

            function onSideMouseOver(evt) {
                $(".hide-side").css("visibility", "visible");
            }
            
            function onSideMouseLeave(evt) {
                $(".hide-side").css("visibility", "hidden");
            }

            function onSide2MouseOver(evt) {
                $(".hide-side2").css("visibility", "visible");
            }
            
            function onSide2MouseLeave(evt) {
                $(".hide-side2").css("visibility", "hidden");
            }
    });


});