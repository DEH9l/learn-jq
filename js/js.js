$(document) .ready(function () {
 $(".pane .delete").click(function () {
     $(this).parents(".pane").animate({bottom:"-=400",opacity:"hide"},
         "");

 })
})
