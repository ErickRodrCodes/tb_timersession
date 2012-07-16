//tb_timersession examples
// Demo: Filling the progressbar:
var example0 = {
	timers : [
		{
			time:0,
			action : function(){
				$("#progressbar1").progressbar({value:0});
			}
		},
		{
			time:1,
			action : function(){
				$("#progressbar1").progressbar({value:20});
			}
		},
		{
			time:2,
			action : function(){
				$("#progressbar1").progressbar({value:40});
			}
		},
		{
			time:3,
			action : function(){
				$("#progressbar1").progressbar({value:60});
			}
		},
		{
			time:4,
			action : function(){
				$("#progressbar1").progressbar({value:80});
			}
		},
		{
			time:5,
			action : function(){
				$("#progressbar1").progressbar({value:100});
			}
		},
	],
	keepAliveUrl		: "http://www.google.com/calendar/feeds/developer-calendar@google.com/public/full?alt=json",
	logoutUrl			: "./index.html",
	humanThreshold		: 3,
	keepSessionAction	: function(){
		$("#progressbar").progressbar({value:0});
	},
	showConsole			: true,
	visualConsole		: true
}

$(function(){
	$("#progressbar1").progressbar();
    $("#button-example0").click(function(){
	$(document).tb_timersession(example0);
	$(this).hide();
    });
});

// Example 1

var example1 = {
	timers : [{
		time: 30
	}],
	logoutUrl : "./index.html",
	showConsole : true,
	visualConsole : true
};

$(function(){
	$("#button-example1").click(function(){
		$(document).tb_timersession(example1);
		$(this).hide()
	});
});

// Example 2

var example2 = {
	timers : [{

		time:0,
		action : function(){
			$("#demo-example2 span").text('No messages from the system');
		}

	},{
		time:15,
		action:function(){
			$("#demo-example2 span").text('Seems you are inactive the last 15 seconds. Please do click or press any key to know you are online.')
		}
	},{
		time:60
	}],
	logoutUrl			: "./index.html",
	humanThreshold	    : 15,
	showConsole		: true,
	visualConsole		: true
};

$(function(){
	$("#button-example2").click(function(){
		$(document).tb_timersession(example2);
		$(this).hide();
	});	
});

// Example 3
var blinker;
var example3 = {
	timers : [
		{
			time : 0,
			action : function(){
				$("#sessionMarker").removeClass('markToggle');
				$("#sessionTimer").removeClass('markToggleIcon');
				$("#sessionTimer").removeClass("metroui-icon-signal0 metroui-icon-signal1 metroui-icon-signal2 metroui-icon-signal3").addClass("metroui-icon-signal3");
			}
		},
		{ 
			// trigger 75% of the action
			time : 10,
			action : function(){
				$("#sessionTimer").removeClass("metroui-icon-signal3").addClass("metroui-icon-signal2");
			}
		},
		{
			// trigger 50% of the action
			time : 20,
			action : function(){
				$("#sessionTimer").removeClass("metroui-icon-signal2").addClass("metroui-icon-signal1");
			}
		}, 
		{
			// trigger 25% of the action
			time : 30,
			action : function(){
				blinker = setInterval(function(){
					$("#sessionMarker").toggleClass('markToggle');
					$("#sessionTimer").toggleClass('markToggleIcon');

				},500);
				$("#sessionTimer").removeClass("metroui-icon-signal1").addClass("metroui-icon-signal0");
			}
		},
		{
			// trigger logout
			time : 40
		}
	],
	keepAliveUrl		: "http://google.com",
	logoutUrl			: "./index.html",
	keepSessionAction	: function(){
		clearInterval(blinker);
	},
	showConsole			: true,
	visualConsole		: true
}

$(function(){
	$("#button-example3").click(function(){
		$(document).tb_timersession(example3);
		$(this).hide();
	});	
});



// Example 4. Complete interaction using jQuery UI, and custom action per each event:
var blinker;
var forceCountDown = 59;
var countDownInterval;
var wintitle = document.title;
var winblink;
var example4 = {
	timers : [
		{
			time:0,
			action : function(){
				$(".sessionTimer").removeClass("metroui-icon-signal0 metroui-icon-signal1 metroui-icon-signal2 metroui-icon-signal3").addClass("metroui-icon-signal3");
				document.title = wintitle;

			}
		},
		{ 
			// trigger 75% of the action
			time : 10,
			action : function(){
				$(".sessionTimer").removeClass("metroui-icon-signal3").addClass("metroui-icon-signal2");
			}
		},
		{
			// trigger 50% of the action
			time : 20,
			action : function(){
				$(".sessionTimer").removeClass("metroui-icon-signal2").addClass("metroui-icon-signal1");
			}
		}, 
		{
			// trigger 25% of the action
			time : 30,
			action : function(){
				blinker = setInterval(function(){
					$(".sessionMarker").toggleClass('markToggle');
					$(".sessionTimer").toggleClass('markToggleIcon');

				},500);
				$(".sessionTimer").removeClass("metroui-icon-signal1").addClass("metroui-icon-signal0");
			}
		},
		{
			// trigger 0% of the action
			time : 40,
			action : function(){				
				template = "<div id='modal_pop'><p>For security purposes You will be signed out automatically in "
				+"<span id='timer'>60</span> seconds due to inactivity</p><p>Close this dialog or "
				+"press any key to keep your session alive.</p></div>";
				if($("#modal_pop").length == 0){
					$(template).dialog({
						buttons : {
							"Hey! I'm still here!":function(){
								$(this).dialog('close');
								forceCountDown = 59;
								clearInterval(countDownInterval);
								$("#modal_pop").dialog('close');
								$("#modal_pop").remove();
							}
						},
						title:'Your Session seems inactive!',
						modal:true,
						open:function(){
							resizeDialog();
							
						}
					});
					resizeDialog();
					countDownInterval = setInterval(function(){
						$("#timer").text(forceCountDown);
						if(document.title == wintitle){
							document.title = forceCountDown + " seconds to close your session";
						}else {
							document.title = wintitle;
						}
						forceCountDown--;
					},1000);
				}
			}
		},
		{
			// trigger logout action
			time : 100
		}
	],
	keepAliveUrl		: "http://google.com",
	logoutUrl			: "./index.html",
	keepSessionAction	: function(){
		clearInterval(blinker);
		clearInterval(winblink);
		$(".sessionMarker").removeClass('markToggle');
		$(".sessionTimer").removeClass('markToggleIcon');
		
	},
	showConsole			: true,
	visualConsole		: true
}

$(function(){
	$("#button-example4").click(function(){
		$(document).tb_timersession(example4);
		$(this).hide();
	});
});
