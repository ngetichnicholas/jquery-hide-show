$(document).ready(function() {
  $(".define").hide();    
  $(".language").click(function(){
    $(this).siblings().show();
    $(this).hide();

  });
  $(".define").click(function(){
    $(this).hide();
    $(this).siblings().show();
  });
});
 
