$(function() {
    $('.teb_title').click(function(){
        $('.teb_title').removeClass('on')
        $(this).addClass('on')
    })
    
    $('.title1').click(function(){
        $('.noti>div').removeClass('on')
        $('.noti_list_1').addClass('on')
    })
    
    $('.title2').click(function(){
        $('.noti>div').removeClass('on')
        $('.noti_list_2').addClass('on')
    })
    $('.title3').click(function(){
        $('.noti>div').removeClass('on')
        $('.noti_list_3').addClass('on')
    })

    $('.ham').click(function(){
        $(this).hide()
        $('.close').show()
        $('.gnb').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.ham').show()
        $('.gnb').fadeOut()
    })

});

$(function () {
    $('.bu_r').click(function () {
        nextTxt()
    })
    $('.bu_l').click(function () {
        prevTxt()
    })

    function nextTxt() {
        $('.slide_txt').animate({
        }, 700, function () {
            $('.slide_txt>li').eq(0).appendTo('.slide_txt')

        })
    }
    function prevTxt() {
        $('.slide_txt>li').eq(-1).prependTo('.slide_txt')
    }

})


$(function () {
    $('.bu2_r').click(function () {
        nextTxt2()
    })
    $('.bu2_l').click(function () {
        prevTxt2()
    })

    function nextTxt2() {
        $('.slide_txt2').animate({
        }, 700, function () {
            $('.slide_txt2>li').eq(0).appendTo('.slide_txt2')

        })
    }
    function prevTxt2() {
        $('.slide_txt2>li').eq(-1).prependTo('.slide_txt2')
    }

})

$(function () {
    $('.bu3_r').click(function () {
        nextTxt3()
    })
    $('.bu3_l').click(function () {
        prevTxt3()
    })

    function nextTxt3() {
        $('.slide_txt3').animate({
        }, 700, function () {
            $('.slide_txt3>li').eq(0).appendTo('.slide_txt3')

        })
    }
    function prevTxt3() {
        $('.slide_txt3>li').eq(-1).prependTo('.slide_txt3')
    }

})


