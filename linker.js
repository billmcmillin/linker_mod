jQuery(function($){
    var pageInitialized = false;
    $(function()
    {
        if(pageInitialized) return;
        pageInitialized = true;
        $("document").ready(function() {

        /*container styles*/
        /*$(".contentindex").html("<span>Article Linker</span>");
        $(".contentindex").css({"font-style":"italic", "font-size": "1.2em","margin-left":"60px"});
        */
        /*sidebar styles*/
           // $(".hide-side").css("visibility","hidden");
           // $(".hide-side2").css("visibility","hidden");
            $("a:contains('Search the catalog for print version')").addClass("btn searchCat-action");
            $("a:contains('Request via Interlibrary Loan')").addClass("btn ill-action");
            $("<h3 class=\"custom-links-header\">2. Not available at UC?</h3>").insertBefore(".xill");
            $("<h3>3. Need help?</h3>").insertBefore(".ask_us");
            $(".ask_us a").addClass("btn ask-action");
            $(".ask-action").css("margin-bottom", "10px");

        /*sidebar actions*/   
      
                //get the current URL
                var itemURL = window.location.href;
                //base URLs for different ILL forms
                var base1 = "http://illiad.uc.edu/illiad/CIN/illiad.dll/OpenURL?CitedIn=360+Link:+sersol%3AuniqueIDQuery&";
                var base2 = "http://illiad.uc.edu/illiad/MXC/illiad.dll/OpenURL?CitedIn=360+Link:+sersol%3AuniqueIDQuery&";
                var base3 = "http://uclid.uc.edu/search~S14/t=";
                var base4 = "http://uclid.uc.edu/search/i=";

            /*for catalog searches*/
                //grab the title from the URL
                if(itemURL.indexOf('title') != -1){
                    var title = itemURL.replace(/.*title=/i, "");
                    var title = title.replace(/&.*/i, "");
                }
                else{
                    var title = "NULL";
                }
                

                //grab issn from the URL
                if(itemURL.indexOf('issn') != -1){
                    var issn = itemURL.replace(/.*issn=/i, "");
                    var issn = issn.replace(/&.*/i, "");
                }
                else{
                    var issn = "NULL";
                }
                

                //append it to the base URL
                var search1 = base3 + title;
                var search2 = base4 + issn;

                //update the link in html
                $(".searchCat-action").html("<a href=\x22" + search1 + "\x22 target=\"_blank\" style=\"color:#333\">Search the catalog for print version</a>");
                $("#by_title").html("<a href=\x22" + search1 + "\x22 target=\"_blank\">By Title</a>");
                $("#by_issn").html("<a href=\x22" + search2 + "\x22 target=\"_blank\">By ISSN</a>");

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
                $(".ill-action").html("<a href=\x22" + open1 + "\x22 target=\"_blank\" style=\"color:#333\">Request via Interlibrary Loan</a>");
                $("#illiad_link").html("<a href=\x22" + open1 + "\x22target=\"_blank\">Interlibrary Loan Form</a>");
                $("#hsl_link").html("<a href=\x22" + open2 + "\x22target=\"_blank\">Health Sciences Library Interlibrary Loan Form</a>");
                //now update the CSS
                $("#illiad_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $("#hsl_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});

            });
            
    });


});