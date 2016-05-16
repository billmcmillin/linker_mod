var $i = jQuery.noConflict();

 
jQuery(function($i){
    var pageInitialized = false;
    $i(function()
    {
        if(pageInitialized) return;
        pageInitialized = true;

        
        $i('head').append('<link href=\"http://homepages.uc.edu/~mcmillwh/linker.css\" rel=\"stylesheet\" type=\"text/css\" />');

        $i("document").ready(function() {
            
            //If it's the sidebar container, get frame source by Id
            if (document.getElementById('website')){
                var frame_src = document.getElementById('website').src;
                //format the url as a live link w/out 360 link container
                var frame_code = frame_src.replace(/.*Link\&U\=\/?/i, "");
                var dest_new = decodeURIComponent(frame_code);

                
                var psc = "apa.org";
                if(frame_src.indexOf(psc) != -1){
                  var psyc_code = frame_src.replace(/.*Link\&U\=\/?/i, "");
                  var psyc_new = decodeURIComponent(psyc_code);
                  var cont = window.confirm("Psycarticles is currently causing errors in Article Linker. Please disable pop-up blockers and click 'OK' to be redirected to the journal requested or 'Cancel' to stay on this page. You may also paste this url into a new browser window: " + psyc_new);
                    if (cont == true) {
                        window.open(psyc_new);
                        } 
                }

                $i("<div id=\"new_win\" />").insertAfter(".header");
                $i("#new_win").html("<a href=\x22" + dest_new + "\x22 target=\"_blank\">Article not loading? Click here to open in a new window.</a></div>");

            }
            

        
        /*container styles*/
            //$i("<span style=\"display: block; margin-left: 20px;\"><h3>*Note -</h3>Please use an updated version of Firefox or Chrome and use the <a href=\"http://www.libraries.uc.edu/off-campus-access.html\">UC VPN</a> from off campus to ensure all content loads correctly.</span><hr />").insertAfter(".header");
            $i("a:contains('Search the catalog for print version')").addClass("btn searchCat-action");
            $i("a:contains('Request via Interlibrary Loan')").addClass("btn ill-action");
            $i("<h3 class=\"custom-links-header\">2. Not available at UC?</h3>").insertBefore(".xill");
            $i("<h3>3. Need help?</h3>").insertBefore(".ask_us");
            $i(".ask_us a").addClass("btn ask-action");
            $i(".ask-action").css("margin-bottom", "10px");

        /*sidebar actions*/   
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
                var edit = new String();
                var isbn = new String();
                var db = new String();
                var itemdate = new String();
                var pub = new String();
                var vol = new String();
                var issue = new String();
                var genre = new String();
                var pages = new String();

                if($i("input[name='title'").length){
                    //title = $i("input[name='title'").attr('value');
                    title = document.getElementsByName('title')[0].value;
                    if(typeof title != 'undefined'){
                        title = title.replace(/ /g, "+");
                        title = title.replace(/\//g, "-");
                        title = title.replace(":", " ");
                        title = title.replace(/"/g, " ");

                    }
                }
                else{
                    title = "undefined";
                }
                if($i("input[name='atitle'").length){
                    atitle = document.getElementsByName('atitle')[0].value;
                    if(typeof atitle != 'undefined'){
                        atitle = atitle.replace(/ /g, "+");
                        atitle = atitle.replace(/\//g, "-");
                        atitle = atitle.replace(":", " ");
                        atitle = atitle.replace(/"/g, " ");
                    }
                }
                else{
                    atitle = "undefined";
                }
                if($i("input[name='aulast'").length){
                    authorlast = document.getElementsByName('aulast')[0].value;
                    if(typeof aulast != 'undefined'){
                        authorlast = authorlast.replace(/ /g, "+");
                        authorlast = authorlast.replace(/\//g, "-");
                    }                
                }
                else{
                    authorlast = "undefined";
                }
                if($i("input[name='aufirst'").length){
                    authorfirst = document.getElementsByName('aufirst')[0].value;
                    if(typeof aufirst != 'undefined'){
                        authorfirst = authorfirst.replace(/ /g, "+");
                        authorfirst = authorfirst.replace(/\//g, "-");
                    }                 
                }
                else{
                    authorfirst = "undefined";
                }
                if($i("input[name='auinit'").length){
                    authorinit = document.getElementsByName('auinit')[0].value;
                    if(typeof authorinit != 'undefined'){
                        authorinit = authorinit.replace(/ /g, "+");
                    } 
                }
                else{
                    authorinit = "undefined";
                }
                if($i("input[name='issn'").length){
                    issn = document.getElementsByName('issn')[0].value;
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    } 
                }
                else if($i("input[name='isbn'").length){
                    issn = document.getElementsByName('isbn')[0].value;
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    }                 
                }
                else{
                    issn = "undefined";
                }
                if($i("input[name='date'").length){
                    itemdate = document.getElementsByName('date')[0].value;
                    if(typeof itemdate != 'undefined'){
                        itemdate = itemdate.replace(/ /g, "+");
                        itemdate = itemdate.replace(/\//g, "-");
                    }
                }
                else{
                    itemdate = "undefined";
                }
                if($i("input[name='edition'").length){
                    edit = document.getElementsByName('edition')[0].value;
                    if(typeof(edit) != 'undefined'){
                        edit.replace(/ /g, "+");
                    }
                }
                else{
                    edit = "undefined";
                }
                if($i("input[name='pub'").length){
                    pub = document.getElementsByName('pub')[0].value;
                    if(typeof pub != 'undefined'){
                        pub = pub.replace(/ /g, "+");
                        pub = pub.replace(/\//g, "-");
                    } 
                }
                else{
                    pub = "undefined";
                }
                if($i("input[name='volume'").length){
                    vol = document.getElementsByName('volume')[0].value;
                    if(typeof vol != 'undefined'){
                        vol = vol.replace(/ /g, "+");
                    }                 
                }
                else{
                    vol = "undefined";
                }
                if($i("input[name='issue'").length){
                    issue = document.getElementsByName('issue')[0].value;
                    if(typeof issue != 'undefined'){
                        issue = issue.replace(/ /g, "+");
                    }                 
                }
                else{
                    issue = "undefined";
                }
                if($i("input[name='genre'").length){
                    genre = document.getElementsByName('genre')[0].value;
                    if(typeof genre != 'undefined'){
                        genre = genre.replace(/ /g, "+");
                    }                 
                }
                else{
                    genre = "undefined";
                }
                if($i("input[name='pages'").length){
                    pages = document.getElementsByName('pages')[0].value;
                    if(typeof pages != 'undefined'){
                        pages = pages.replace(/ /g, "+");
                    }                 
                }
                else{
                    pages = "undefined";
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
                var open1 = base1 + db + "&title=" + title + "&atitle=" + atitle + "&issn=" + issn + "&aulast=" + authorlast + "&aufirst=" + authorfirst + "&auinitm=" + authorinit + "&date=" + itemdate + "&edition=" + edit + "&LoanPublisher=" + pub + "&volume=" + vol + "&issue=" + issue + "&pages=" + pages + "&genre=" + genre;
                var open2 = base2 + db + "&title=" + title + "&atitle=" + atitle + "&issn=" + issn + "&aulast=" + authorlast + "&aufirst=" + authorfirst + "&auinitm=" + authorinit + "&date=" + itemdate + "&edition=" + edit + "&LoanPublisher=" + pub + "&volume=" + vol + "&issue=" + issue + "&pages=" + pages + "&genre=" + genre;

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