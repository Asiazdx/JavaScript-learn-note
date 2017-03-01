$(function(){
   for(var i=0;i<3;i++){
      $(".navList")[i].onclick=function(){
         $(".conList").hide();
        var j=this.id.substr(4,1);
         $(".conList").eq(j-1).show();
      }
   }
})