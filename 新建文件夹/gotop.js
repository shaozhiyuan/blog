define(["jquery"],function ($) {
   function GoTop() {
       $gotop = $('.gotop');
       $(window).on('scroll',function () {
           $wTop = $(window).scrollTop();
           if( $wTop > 0 ){
               $gotop.css({
                   display: "block"
               })
           }else {
               $gotop.css({
                   display: "none"
               })
           }
       })
   }
   return GoTop
})