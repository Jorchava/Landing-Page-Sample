'use strict';

var APP = window.APP = window.APP || {};

APP.featuredVideo = (function() {

    var bindEventsToUI = function() {

            $('.featured-video__modal-trigger').fancybox({
                maxWidth    : 800,
                maxHeight   : 600,
                fitToView   : false,
                width       : '70%',
                height      : '70%',
                autoSize    : false,
                closeClick  : false,
                openEffect  : 'none',
                closeEffect : 'none'
            });

    };

    var init = function() {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.featuredVideo');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
