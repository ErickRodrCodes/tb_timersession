// metroui-mini.js
/*
this js file will allow to manage some events on screen allowing the gui to be the most close to the
behavior of metroui...
*/
$(function(){
	$(window).resize(function(){
		//fix dialogs allowing them to fix their position on resize
		resizeDialog();
		resizeContentDialog(".wizard");			
	});
	resizeContentDialog(".wizard");
});


function resizeDialog(){
	if($(".ui-dialog").length > 0){
		$(".ui-dialog").css({"width":"100%"});
		$(".ui-dialog").css({"top": ($(window).height() - $(".ui-dialog").height()) / 2, "left":"0px","position":"fixed"});
		$(".ui-dialog .ui-dialog-content").css({"padding":"0 15%"});
	}
}

function resizeContentDialog(element){
		if ($(element).length > 0){
			//only allow the resize of elements if the window size is above of the 70% of the screen size
			var screenwidth = screen.width
			var maxAllowedWidth = (screenwidth*70)/100
			
			var elementWidth = 0;
			
			if ($(window).width() < maxAllowedWidth){
				elementWidth = $(window).width();
			} else {
				elementWidth = maxAllowedWidth;
			}
			
		$(element).css({
			"max-width":elementWidth,
			"margin":"0 auto"
		});
	}
	
}
//plugin for the wizard element next here