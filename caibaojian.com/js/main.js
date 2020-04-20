$(function() {
    $('.widget-tab').each(function() {
        var $this = $(this);
        // console.log($(this));
        $this.find('.tab-content-items').hide().first().show();
        $this.find('.tab-nav h3').on('click', function(){
            // console.log($(this).index());
            var tabIndex = $(this).index();
            $(this).parents('.widget-tab')
                    .find('.tab-content-items').eq(tabIndex).show()
                    .siblings('.tab-content-items').hide()
                    .css({"color":"blue", "border":"1px dotted  red" });
        });
    });

    var $scrollTop = $('.scroll-top'),
    $wh = $('body').height();
    $scrollTop.children('span').first().on('click',function(){
        $('html,body').animate({scrollTop: 0},1000);
    });

    $scrollTop.children('span').last().on('click',function(){
        $('html,body').animate({scrollTop: $wh},1000);
    });
});