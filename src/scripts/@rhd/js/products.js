function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function setCookie(name, value, expireDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkRecentDownload() {
    // Set storage expiration time to 10 minutes
    var storageExpiration = 600000;
    if(window.location.href.indexOf('download-manager')>0 && window.location.pathname.match(/.*\/products\/.*\/hello-world\/?/g)){
        if(window.localStorage.getItem('recent-download-url')){
            var recentDownload,timeOfRefer, currentTime;
            recentDownload = JSON.parse(window.localStorage.getItem('recent-download-url'));
            timeOfRefer = recentDownload.hasOwnProperty('timestamp') ? recentDownload['timestamp'] : 0;
            currentTime = new Date().getTime();

            if(currentTime-timeOfRefer > storageExpiration){
                window.localStorage.removeItem('recent-download-url');
            }
        }else{
            var referrerDownload = {value: window.location.href, timestamp: new Date().getTime()};
            localStorage.setItem("recent-download-url", JSON.stringify(referrerDownload));
        }

    }
}

(function () {
    var productApp = angular.module('productApp', []);

    var pathRegex = window.location.pathname.match(/.*\/products\/.*\/hello-world\/?/g);
    if(pathRegex){
        if(window.location.pathname != getCookie('product_path')){
            setCookie('product_page_cookie', null, 1);
        }

        var tabList = document.querySelectorAll('[role="presentation"]');
        setCookie('product_path', window.location.pathname);
        for (var i = 0; i < tabList.length; i++) {
            var tabItem = tabList[i];
            tabItem.onclick = function (event) {
                var target = getEventTarget(event);
                setCookie('product_page_cookie',target.hash, 1);
            }
        };
        var productCookie = getCookie('product_page_cookie');
        if(productCookie && productCookie != 'null'){
            window.location.hash = productCookie;
        }

    }

    checkRecentDownload();

}());

