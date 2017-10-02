/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
    'mage/tabs',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            (function () {

                /**
                 * Created by bejan on 07.11.2016.
                 */


                if ($('.header.panel').height() < 5) {
                    console.log("lala");
                    $(".header.panel > .header.links > li > a").css("color", "white");
                } else {
                    $(".header.panel > .header.links > li > a").css("color", "black");
                }

            }, 100),


                jQuery(window).scroll(function () {


                    var height = jQuery(window).scrollTop();

                    if (lala) {
                        tempHeight = jQuery('.header.panel').css('height');
                        lala = false;
                    }

                    if (height > 50) {


                        jQuery('.header.panel').css("height", "0");


                    } else {

                        jQuery('.header.panel').css("height", tempHeight);

                    }
                })


        },
        // Switch to Mobile Version
        exit: function () {

        }
    });
});
