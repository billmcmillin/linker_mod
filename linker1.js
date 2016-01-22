var $i = jQuery.noConflict();

jQuery(function($i){
    var pageInitialized = false;
    $i(function()
    {
        if(pageInitialized) return;
        pageInitialized = true;
        $i("document").ready(function() {

        /*container styles*/
       
            $i("a:contains('Search the catalog for print version')").addClass("btn searchCat-action");
            $i("a:contains('Request via Interlibrary Loan')").addClass("btn ill-action");
            $i("<h3 class=\"custom-links-header\">2. Not available at UC?</h3>").insertBefore(".xill");
            $i("<h3>3. Need help?</h3>").insertBefore(".ask_us");
            $i(".ask_us a").addClass("btn ask-action");
            $i(".ask-action").css("margin-bottom", "10px");

        /*sidebar actions*/   
                var edition = edition || {};
                //get the current URL
                var itemURL = window.location.href;

                //base URLs for different ILL forms
                var base1 = "http://illiad.uc.edu/illiad/CIN/illiad.dll/OpenURL?pid=";
                var base2 = "http://illiad.uc.edu/illiad/MXC/illiad.dll/OpenURL?pid=";
                var base3 = "http://uclid.uc.edu/search~S14/t=";
                var base4 = "http://uclid.uc.edu/search/i=";

                var authorlast = new String();
                var authorfirst = new String();
                var authorinit = new String();
                var title = new String();
                var atitle = new String();
                var issn = new String();
                var edition = new String();
                var isbn = new String();
                var db = new String();
                var itemdate = new String();
                var pub = new String();
                var vol = new String();
                var issue = new String();
                var genre = new String();
                var pages = new String();

                if($i("input[name='title'")){
                    title = $i("input[name='title'").attr('value');
                    if(typeof title != 'undefined'){
                        title = title.replace(/ /g, "+");
                    }
                }
                else{
                    title = "NULL";
                }
                if($i("input[name='atitle'")){
                    atitle = $i("input[name='atitle'").attr('value');
                    if(typeof atitle != 'undefined'){
                        atitle = atitle.replace(/ /g, "+");
                    }                }
                else{
                    atitle = "NULL";
                }
                if($i("input[name='aulast'")){
                    authorlast = $i("input[name='aulast'").attr('value');
                    if(typeof aulast != 'undefined'){
                        authorlast = authorlast.replace(/ /g, "+");
                    }                
                }
                else{
                    authorlast = "NULL";
                }
                if($i("input[name='aufirst'")){
                    authorfirst = $i("input[name='aufirst'").attr('value');
                    if(typeof aufirst != 'undefined'){
                        authorfirst = authorfirst.replace(/ /g, "+");
                    }                 
                }
                else{
                    authorfirst = "NULL";
                }
                if($i("input[name='auinit'")){
                    authorinit = $i("input[name='auinit'").attr('value');
                    if(typeof authorinit != 'undefined'){
                        authorinit = authorinit.replace(/ /g, "+");
                    } 
                }
                else{
                    authorinit = "NULL";
                }
                if($i("input[name='issn'")){
                    issn = $i("input[name='issn'").attr('value');
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    } 
                }
                else if($i("input[name='isbn'")){
                    issn = $i("input[name='isbn'").attr('value');
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    }                 
                }
                else{
                    issn = "NULL";
                }
                if($i("input[name='date'")){
                    itemdate = $i("input[name='date'").attr('value');
                    if(typeof itemdate != 'undefined'){
                        itemdate = itemdate.replace(/ /g, "+");
                    } 
                }
                else{
                    itemdate = "NULL";
                }
                if($i("input[name='edition'")){
                    edition = $i("input[name='edition'").attr('value');
                    if(typeof(edition) != 'undefined'){
                        edition.replace(/ /g, "+");
                    }
                }
                else{
                    edition = "NULL";
                }
                if($i("input[name='pub'")){
                    pub = $i("input[name='pub'").attr('value');
                    if(typeof pub != 'undefined'){
                        pub = pub.replace(/ /g, "+");
                    } 
                }
                else{
                    pub = "NULL";
                }
                if($i("input[name='volume'")){
                    vol = $i("input[name='volume'").attr('value');
                    if(typeof vol != 'undefined'){
                        vol = vol.replace(/ /g, "+");
                    }                 
                }
                else{
                    vol = "NULL";
                }
                if($i("input[name='issue'")){
                    issue = $i("input[name='issue'").attr('value');
                    if(typeof issue != 'undefined'){
                        issue = issue.replace(/ /g, "+");
                    }                 
                }
                else{
                    issue = "NULL";
                }
                if($i("input[name='genre'")){
                    genre = $i("input[name='genre'").attr('value');
                    if(typeof genre != 'undefined'){
                        genre = genre.replace(/ /g, "+");
                    }                 
                }
                else{
                    genre = "NULL";
                }
                if($i("input[name='pages'")){
                    pages = $i("input[name='pages'").attr('value');
                    if(typeof pages != 'undefined'){
                        pages = pages.replace(/ /g, "+");
                    }                 
                }
                else{
                    pages = "NULL";
                }


                if(itemURL.indexOf("sid") > -1){
                    var begin = itemURL.indexOf("sid");
                    db = itemURL.substring(begin + 4);
                    var end = db.indexOf("&");
                    db = db.substring(0, end);
                }
                else{
                    db = "360_Link";
                }

                //append it to the base URL 
                var search1 = base3 + title;
                search1 = search1.replace(/ /g, "+");
                var search2 = base4 + issn;
                search2 = search2.replace(/ /g, "+");

                //update the link in html
                $i(".searchCat-action").html("<a href=\x22" + search1 + "\x22 target=\"_blank\" style=\"color:#333\">Search the catalog for print version</a>");
                $i("#by_title").html("<a href=\x22" + search1 + "\x22 target=\"_blank\">By Title</a>");
                $i("#by_issn").html("<a href=\x22" + search2 + "\x22 target=\"_blank\">By ISSN</a>");

                //now update the CSS
                $i("#by_title").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $i("#by_issn").css({"display":"block","margin-left":"10px", "margin-top":"5px"});

            /*for ILL*/
                //extract the OpenURL elements from the whole URL
                var elements = itemURL.replace(/.*serialssolutions.com\/?/i, "");
                console.log(elements);
                //concatenate the OpenURL elements to the base
                var open1 = base1 + db + "&title=" + title + "&atitle=" + atitle + "&issn=" + issn + "&aulast=" + authorlast + "&aufirst=" + authorfirst + "&auinitm=" + authorinit + "&date=" + itemdate + "&edition=" + edition + "&LoanPublisher=" + pub + "&volume=" + vol + "&issue=" + issue + "&pages=" + pages + "&genre=" + genre;
                var open2 = base2 + db + "&title=" + title + "&atitle=" + atitle + "&issn=" + issn + "&aulast=" + authorlast + "&aufirst=" + authorfirst + "&auinitm=" + authorinit + "&date=" + itemdate + "&edition=" + edition + "&LoanPublisher=" + pub + "&volume=" + vol + "&issue=" + issue + "&pages=" + pages + "&genre=" + genre;

                //update the link in html
                $i(".ill-action").html("<a href=\x22" + open1 + "\x22 target=\"_blank\" style=\"color:#333\">Request via Interlibrary Loan</a>");
                $i("#illiad_link").html("<a href=\x22" + open1 + "\x22target=\"_blank\">Interlibrary Loan Form</a>");
                $i("#hsl_link").html("<a href=\x22" + open2 + "\x22target=\"_blank\">Interlibrary Loan Form - HSL Users</a>");
                //now update the CSS
                $i("#illiad_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $i("#hsl_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});
                $i("#law_link").css({"display":"block","margin-left":"10px", "margin-top":"5px"});


            });
            
    });


});