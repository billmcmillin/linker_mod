//Summon customization script
//
//
window.onload = function() {
	
	if(document.referrer.indexOf("sslvpn") > -1){
		appendCSS()
		insertWarning()
	}
};


function appendCSS() {
		var head = document.getElementsByTagName('head')[0];
		var s = document.createElement('link');
		s.setAttribute('href','http://libapps.libraries.uc.edu/summon/summon.css');
		s.setAttribute('rel', 'stylesheet');
		s.setAttribute('type', 'text/css');
		head.appendChild(s);
}

function insertWarning() {
	var target = document.getElementsByClassName("siteHeader")[0];
	var w = document.createElement('span');
	w.setAttribute("id", "vpnWarn");
	w.innerHTML = "Warning: the browser-based VPN does not work with Summon. Please close this window and use the desktop VPN client or the \<a href=\"http://proxy.libraries.uc.edu/login?url=http://www.libraries.uc.edu/\"\>proxy\<\/a>.";
	if (target != 'undefined'){
		target.appendChild(w);
	}
	console.log(target);
}
