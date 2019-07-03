$("#hom").click(function(){
    $("#mel").slideDown("slow");
});
$(document).ready(function(){
    $("#home a").css("color","blue");
});
$("#mp").click(function(){
    $("#none1").fadeIn(5000);
    $("#mp").fadeOut(20000);
    $("#none1").css("display","flex");
});
$("#none1").dblclick(function(){
    $("#mp").slideDown("slow");
});