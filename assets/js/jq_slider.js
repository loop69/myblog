$(function(){
        let i = 0;
        let imgs =  $(".slider-jq img");
        let rate = 700;
        let canSlide = true;

            $('.button_forward').click(function () {

                        if(!canSlide) return;

                        canSlide = false;

                            imgs.eq(i).animate({left: '100%'}, rate);

                            i = (--i < 0) ? imgs.length -1 : i;

                            imgs.eq(i).css({left: '-100%', display: 'block'})
                                .animate({left: 0}, rate, function(){
                                canSlide = true;
                            });

                    });

            $('.button_back').click(function () {

                        if(!canSlide) return;

                        canSlide = false;

                            imgs.eq(i).animate({left: '-100%'}, rate);

                            i = (++i > imgs.length -1) ? 0 : i;

                            imgs.eq(i).css({left: '100%', display: 'block'})
                                .animate({left: 0}, rate, function(){
                                canSlide = true;
                            });

                    });
    });