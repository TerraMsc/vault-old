newFunction();

function newFunction() {
    var page = document.getElementById('page'), ua = navigator.userAgent, iphone = ~ua.indexOf('iPhone') || ~ua.indexOf('iPod');

    var setupScroll = window.onload = function () {

        if (ios) {
            var height = document.documentElement.clientHeight;
            if (iphone && !fullscreen)
                height += 60;
            page.style.height = height + 'px';
        }
        setTimeout(scrollTo, 0, 0, 1);
    };
}
