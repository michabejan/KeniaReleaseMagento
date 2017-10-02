/**
 * Created by bejan on 07.11.2016.
 */
var lala = true;
var tempHeight;
jQuery.noConflict();


window.setInterval(function(){
    if(jQuery('.header.panel').height() < 5){
        jQuery(".header.panel > .header.links > li > a").css("color", "white");
    } else {
        jQuery(".header.panel > .header.links > li > a").css("color", "black");
    }

}, 100);


jQuery(window).scroll(function() {


    var height = jQuery(window).scrollTop();

    if(lala){
        tempHeight = jQuery('.header.panel').css('height');
        lala = false;
    }

    if(height  > 50) {


        jQuery('.header.panel').css("height", "0");



    }else{

        jQuery('.header.panel').css("height", tempHeight);

    }
});


window.onload = function() {
    var tempWidth = window.innerWidth;;
    if(tempWidth > 1300){
        var offset1 =   jQuery('.page-header').height();
        var offset2 =   jQuery(' .header.content').height();
        var offset3 = offset1 - offset2;
        jQuery("#wrapper").css({"margin-top": offset3});
    }

};


window.onresize = function(event) {
    var tempWidth = window.innerWidth;;
    if(tempWidth > 1300){
        var offset1 =   jQuery('.page-header').height();
        var offset2 =   jQuery(' .header.content').height();
        var offset3 = offset1 - offset2;
        jQuery("#wrapper").css({"margin-top": offset3});
    }

};

