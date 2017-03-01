$(function(){
    /*小屏导航*/
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".left-son").css({
        width:clientW,
        height:clientH,
    })
    $(".left").click(function(){
        $(".left-son").slideToggle(500);
        $(".wheel").toggleClass("dis");
        $(".resume").toggleClass("dis");
    })
    /*小屏导航 end*/
    /*大屏导航*/
    $(".menue-list").hover(function(){
        $(this).find(".menue_son").fadeToggle(500);
    },function(){
        $(this).find(".menue_son").fadeToggle(500);
        $(this).find(".menue_son").finish();
    })
    /*大屏导航end*/
    /*banner*/
        $(".slid").animate({left:clientW-307},2000,function(){
            $(".log").fadeIn(500);
        });
    /*banner end*/
/*my works*/
    $(".row li").hover(function(){
        $(this).css({
            transform:"scale(1.1)"
        })
        $(this).find("div").show();
    },function(){
        $(this).css({
            transform:"scale(1)"
        })
        $(this).find("div").hide();
    })
/*my works end*/
})