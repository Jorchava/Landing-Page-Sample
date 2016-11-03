'use strict';

var APP = window.APP = window.APP || {};

APP.banner = (function () {

    var bindEventsToUI = function () {

    };

    var init = function () {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.banner');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
