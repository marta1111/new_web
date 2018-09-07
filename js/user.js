   $(document).ready(function(){
   $(window).on('load', function() {
$('h1').show(2000);
});
    
});

$(document).ready(function(){
    $(".apple").mouseenter(function(){
        $("#news").css("background-color", "lightblue");
    });
    $(".apple").mouseleave(function(){
        $("#news").css("background-color", "lightpink");
    });
});

$(document).ready(function(){
    $(".more_info").click(function(){
        $(".more_text").show(1000);
        $(".less_text").show(1000);
        $(".more_info").hide(1000);
        $(".apple").hide(1000);
    });
    $(".less_text").click(function(){
        $(".more_text").hide(1000);
        $(".less_text").hide(1000);
        $(".more_info").show(1000);
        $(".apple").show(1000);
    });
});