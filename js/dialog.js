
(function($){
    window.wxc = window.wxc || {};
    window.wxc.showMask = function() {
        var $top = $("<div>").addClass("dialog");
        var $mask = $("<div>").addClass("mask");
        
        $top.attr("id", "bg").append($mask);
        $top.css("z-index",99);
        $top.css("background","#666666");
        $top.css("width","100%");
        $top.css("height","100%");
        $top.css("position","fixed");
        $top.css("left",0);
        $top.css("top",0);
        $top.css("opacity",0.5);
        $top.css("filter","alpha(opacity=50)");
        $top.css("-moz-opacity",0.5);

        $("body").append($top);
    };
    
    
})(jQuery);