$(function(){
    $("#resume").css({
        left:'3%'
    })
    $(".bg2").css({
        right:'15%'
    })
    setTimeout(function(){
        $("#skip").css({
            right:0
        })
    },1500)
    var flag=false;
    var setIn=function(){
        if(flag){
            $("#toux").css({
                opacity:0.1
            })
            flag=false;
        }else{
            $("#toux").css({
                opacity:0.8
            })
            flag=true
        }
    }
   setInterval(setIn,2000);
})
