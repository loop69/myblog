$(function () {

    $('.show_big').on('click', function (event) {
        let big_img = $(this).attr('href');
        event.preventDefault();
        $('.back_colorbox').css({"background":"rgba(0, 0, 0, .5)"}).fadeIn(500);
        $('.big_img_colorbox img').attr('src', big_img).css({ "position":"fixed", "top":"0", "left":"0", "right":"0", "bottom":"0", "margin":"auto", "border":"10px solid #fff", "border-radius":"10px"});
        $('.big_img_colorbox').fadeIn(500);

    });

    $('.big_img_colorbox').on('click', function (event) {
        $(this).fadeOut(500);
        $(".back_colorbox").fadeOut(500);
    });
});
