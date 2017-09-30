//javascript for dashboard
$(document).ready(function() {

    //stick footer to the bootom of the page
    var $header_height = $("#header").height();
    var $footer_height = $("#footer").height();
    var $main = $("#main");
    var $window_height = $(window).height();
    //set the #main to have a minimun height
    //minimun_height = window_height - footer_height - header_height - 10px of comfort
    $main.css({
        "min-height": ($window_height - $footer_height - $header_height - 30) + "px"
    });

});
