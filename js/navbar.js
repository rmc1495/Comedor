$(function(){
	$( window ).scroll(function() {
  	var scrollTop = $(window).scrollTop();  	
    var navbarHeight = $("nav.navbar").height();
    var body = $("body");
    
    if(scrollTop > navbarHeight){    
    	body.addClass("scrolled");
    }else{
    	body.removeClass("scrolled");
    }
	});
});