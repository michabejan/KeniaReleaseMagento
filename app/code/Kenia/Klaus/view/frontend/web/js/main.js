function yScroll(){
    pagetop = document.getElementById('pagetop');
    menu = document.getElementById('menu');
    yPos = window.pageYOffset;
    if(yPos > 150){
        pagetop.style.height = "0";

    } else {
        pagetop.style.height = "30px";

    }
}
window.addEventListener("scroll", yScroll);


$(window).bind("load", function() {

    var footerHeight = 0,
        footerTop = 0,
        $footer = $(".footer");

    positionFooter();

    function positionFooter() {

        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

        if ( ($(document.body).height()+footerHeight) < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }

    }

    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)

});

jQuery(function(){
    jQuery('.header').load('header.html #headerholder');

});

