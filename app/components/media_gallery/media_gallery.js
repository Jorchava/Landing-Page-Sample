'use strict';

var APP = window.APP = window.APP || {};

APP.mediaGallery = (function() {

    var bindEventsToUI = function() {
        var $articleTabs = $('.article-tab');
        var $articleContent = $('.article-content');
        var $articleVideo = $('.featured-video__modal-trigger');

        $.each($articleTabs, function() {
            var file = $(this).attr('data-file');
            $(this).click(function(e) {
                e.preventDefault();
                $.ajax({
                    type: 'GET',
                    url: '../assets/data/' + file + '.json',
                    dataType: 'json',
                    success: function(data) {
                        $articleContent.html('<p>' + data.article.articleText + '</p>');
                        $articleVideo.attr('href', data.article.articleVideo);
                    }
                });
            });
        });

    };

    var init = function() {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.mediaGallery');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
