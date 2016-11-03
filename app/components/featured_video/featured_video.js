'use strict';

var APP = window.APP = window.APP || {};

APP.featuredVideo = (function() {

    var bindEventsToUI = function() {

        var $video = $('.featured-video__modal-trigger');

        $video.fancybox({
            'content': '<iframe width="560" height="315" src=' + $video.attr('data-video') + ' frameborder="0" allowfullscreen></iframe>'
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
