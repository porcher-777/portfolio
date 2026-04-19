'use strict';

// number count for stats, using jQuery animate
/*
$(document).ready(function() {

    $('.counting').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

});  */

$(window).scroll(function() {
    var hT = $('#counter-stats').offset().top,
        hH = $('#counter-stats').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (hT + hH - wH)) {
        $('.counting').each(function () {
            var $this = $(this);
            if (!$this.data('counted')) {
                $this.data('counted', true).prop('Counting', 0).animate({
                    Counting: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    },
                });
            }
        });
    }
});
