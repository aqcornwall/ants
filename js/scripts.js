(function () {

		function setCookie(key, value) {
	    var expires = new Date();
	    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	}

	function getCookie(key) {
	    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
	    return keyValue ? keyValue[2] : null;
	}

	function handleCookieConsentGiven(key) {
	    setCookie("consentgiven2513834176315", true);

	    // load adsense script
	    var script = document.createElement('script');
	    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
	    document.head.appendChild(script);
	    (adsbygoogle = window.adsbygoogle || []).push({
	      google_ad_client: "ca-pub-9441750949528332",
	      enable_page_level_ads: true
	    });
	}

	$(document).ready( function() {
	    if (!getCookie("consentgiven2513834176315")) {
	        $('#consentModal').modal('show');
	    }
	    else {
	        handleCookieConsentGiven();
	    }
	    document.getElementById("giveCookieConsentButton").addEventListener("click", handleCookieConsentGiven);
	});

})();