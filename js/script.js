$(document).ready(function() {
  $(".define").hide();    
  $(".language").click(function(){
    $(this).siblings().show();
  });
  $(".define").click(function(){
    $(this).hide();
  });
});
 