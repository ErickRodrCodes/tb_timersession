//some GUI Implementation
$(function(){
    $("#metroui-sidebar a").each(function(index,element){
        $(element).click(function(){
            if($($("#metroui-sidebar a")[0]).hasClass("selected")){
            $("#metroui-sidebar a span.metroui-icon")
                .addClass("metroui-icon-black");
            }
            $("#metroui-sidebar a").removeClass('selected');
            $("#metroui-sidebar a span.metroui-icon")
                .removeClass("metroui-icon-white");
            $("#metroui-sidebar a span.metroui-icon")
                .addClass("metroui-icon-black");
                
            $(element).addClass('selected');
            $($("#metroui-sidebar a")[index])
                .find("span.metroui-icon")
                .addClass("metroui-icon-white");    
            tab = $(element).attr("rel");
            $(".page").hide();
            $("#"+tab).show();
                        
        });
        $(element).hover(
            function(){
                if( !$($("#metroui-sidebar a")[index]).hasClass("selected")){
                    $($("#metroui-sidebar a")[index])
                    .find("span.metroui-icon")
                    .removeClass("metroui-icon-dark")
                    .addClass("metroui-icon-white");
                }                
            },
            function(){
                if( !$($("#metroui-sidebar a")[index]).hasClass("selected")){
                    $($("#metroui-sidebar a")[index])
                    .find("span.metroui-icon")
                    .removeClass("metroui-icon-white")
                    .addClass("metroui-icon-dark");
                }
            }
        );
        
    }); 
	$('.dialog_link').hover(
		function(){
			$(this).find('span')
			.removeClass('metroui-icon-blue')
			.addClass('metroui-icon-white');
		},
		function(){
			$(this).find('span')
			.removeClass('metroui-icon-white')
			.addClass('metroui-icon-blue');
		}
	);
    $(".tabs").tabs();
	$(".accordion").accordion();
});