var $i = jQuery.noConflict();

 
jQuery(function($i){
    var pageInitialized = false;
    $i(function()
    {
       if(pageInitialized) return;
        pageInitialized = true;
        
				$i('head').append('<link href=\"http://libapps.libraries.uc.edu/summon/link/linker.css\" rel=\"stylesheet\" type=\"text/css\" />');


        $i("document").ready(function() {
           
				 		 
            //If it's the sidebar container, get frame source by Id
            if (document.getElementById('website')){
                var frame_src = document.getElementById('website').src;
                //format the url as a live link w/out 360 link container
                var frame_code = frame_src.replace(/.*Link\&U\=\/?/i, "");
                var dest_new = decodeURIComponent(frame_code);


								//for clinical key
								var ckey = "clinicalkey.com";
								var inT = frame_src.indexOf(ckey);
								if(frame_src.indexOf(ckey)!= -1){
									$i("<div id=\"ckey_warn\" />").insertAfter("#source-control");
               	  $i("#ckey_warn").html("<a href=\x22" + "https:\/\/www.libraries.uc.edu\/off-campus-access.html" + "\x22 target=\"_blank\">Off-campus access to ClinicalKey is available only through the VPN.</a></div>");
								}
								

								//for GetItNow
								var gin = "copyright.com";
								var ginT = frame_src.indexOf(gin);
								if(frame_src.indexOf("copyright.com")!= -1){
									$i("<div id=\"new_win\" />").insertAfter(".header");
                	$i("#new_win").html("<a href=\x22" + dest_new + "\x22 target=\"_blank\">Get It Now is a trial service. It may be available for a limited time.</a></div>");
								}	
								else{
                $i("<div id=\"new_win\" />").insertAfter(".header");
                $i("#new_win").html("<a href=\x22" + dest_new + "\x22 target=\"_blank\">Article not loading? Click here to open in a new window.</a></div>");
								}

            }
            

        
        /*container styles*/
            //$i("<span style=\"display: block; margin-left: 20px;\"><h3>*Note -</h3>Please use an updated version of Firefox or Chrome and use the <a href=\"http://www.libraries.uc.edu/off-campus-access.html\">UC VPN</a> from off campus to ensure all content loads correctly.</span><hr />").insertAfter(".header");
            $i("a:contains('Search the catalog for print version')").addClass("btn searchCat-action");
            $i("a:contains('Request via Interlibrary Loan')").addClass("btn ill-action");
            $i("<h3 class=\"custom-links-header\">2. Not available at UC?</h3>").insertAfter(".sidebar-title");
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
								//for periodicals
								var base3 = "http://uclid.uc.edu/search~S13/t=";
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
										else{
                    	title = "";
                		}
                }
                else{
                    title = "NULL";
                }
                if($i("input[name='issn'")){
                    issn = $i("input[name='issn'").attr('value');
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    } 
										else{
                    	issn = "";
                		}
                }
                else if($i("input[name='isbn'")){
                    issn = $i("input[name='isbn'").attr('value');
                    if(typeof issn != 'undefined'){
                        issn = issn.replace(/ /g, "+");
                    } 
										else{
                    	issn = "";
                		}                
                }
                else{
                    issn = "NULL";
                }
								//catalog searching links
                //append it to the base URL 
                var search1 = base3 + title;
                search1 = search1.replace(/ /g, "+");
                var search2 = base4 + issn;
                search2 = search2.replace(/ /g, "+");

                //update the link in html
                $i(".searchCat-action").html("<a href=\x22" + search1 + "\x22 target=\"_blank\" style=\"color:#333\">Search the catalog for print version</a>");
                $i("#by_title").html("<a href=\x22" + search1 + "\x22 target=\"_blank\">By Title</a>");
                $i("#by_issn").html("<a href=\x22" + search2 + "\x22 target=\"_blank\">By ISSN</a>");
                $i("#by_isnum").html("<a href=\x22" + search2 + "\x22 target=\"_blank\">By ISSN</a>");
								//var ucl_ill = $i(".full-xill-UCL");
								var ucl_ill = $i("div.full-xill-UCL a")
								var hsl_ill = $i("div.full-xill-HSL a")
								$i("#illiad_link").html(ucl_ill);	
								$i("#hsl_link").html(hsl_ill);
                 
                     
            });
            
    });

});
