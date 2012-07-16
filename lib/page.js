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

$(function() {
	$( "#slider" ).slider({
		value:50,
		min: 0,
		max: 500,
		step: 5,
		range: "min",
		slide: function( event, ui ) {
			$( "#slider-value" ).text( ui.value );
			$("#amount-input").val(ui.value+".00");
		}
	});
	$( "#slider-value" ).text( $( "#slider" ).slider( "value" ) );
	$("#amount-input").val($( "#slider" ).slider( "value" ) +".00");
});

//# of weeks that our baby has...
$(function(){
	var date1 = new Date();
	var date2 = new Date('04/13/2012');
    var weekcalc = 24 * 60 * 60 * 1000 * 7;
    var totalWeeks = Math.round((date1.valueOf()- date2.valueOf())/ weekcalc) + 1;	
	$(".nweeks").text((totalWeeks-1)+"-"+totalWeeks);
});