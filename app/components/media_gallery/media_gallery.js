'use strict';

var APP = window.APP = window.APP || {};

APP.mediaGallery = (function() {

    var bindEventsToUI = function() {
        var $articleTabs = $('.article-tab');
        var $articleContent = $('.article-content');
        var $articleVideo = $('.featured-video__modal-trigger');

        /*$articleTabs.click(function(e){
            e.preventDefault();
            var id = $(this).attr('data-id');
            console.log(id);
            $.get('../assets/data/articles.json', function(data){
                console.log(data.articles[id].article);
            });
        });*/

        /*$.each($articleTabs, function() {
            var id = $(this).attr('data-id');
            $(this).click(function(e) {
                e.preventDefault();
                $.ajax({
                    type: 'GET',
                    url: '../assets/data/articles.json',
                    dataType: 'json',
                    success: function(data) {
                        $articleContent.html('<p>' + data.articles[id].article + '</p>');
                    }
                });
            });
        });*/

        $articleTabs.click(function(e){
            e.preventDefault();
            var file = $(this).attr('data-file');
            //console.log(file);
            $.get('../assets/data/' + file + '.json', function(data){
                //console.log(data.article.articleText);
                $articleContent.html('<p>' + data.article.articleText + '</p>');
                $articleVideo.attr('data-video', data.article.articleVideo);
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
