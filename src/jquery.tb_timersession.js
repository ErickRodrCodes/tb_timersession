/*
######
# tb_timersession development version
# This work is licensed under the Creative Commons Attribution-Share Alike 3.0 
# United States License. To view a copy of this license, 
# visit http://creativecommons.org/licenses/by-sa/3.0/us/ or send a letter 
# to Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA.
######
*/
if (typeof Object.create !== 'function' ){
	Object.create = function(obj) {
		function F(){};
		F.prototype = obj;
		return new F();
	}
}

(function ($){
	$.fn.tb_timersession = function(options){
		return $(this).each(function(){
			var objectactions = Object.create(objectActions);
			objectactions.init(options, this);
		});
		
	};
	$.fn.tb_timersession.options = {
		timers : [
			{
				time : 10,
				action : function(){
					console.log('execution!')
				}
			}
		],
		keepAliveSessionUrl : "http://google.com",
		logoutUrl 			: "http://google.com",
		humanThreshold 	    : 10,
		keepSessionAction	: function(){},
		showConsole			: false,
		visualConsole		: false
	};
	
	var objectActions = {
		//time in seconds, no milisecconds
		currentTimer : 0, 
		timerobj : null,
		actionUser : false,
		consoleLog : function (str){
			if(this.options.showConsole){
				//fallback console for old browsers...
				if (typeof console === "undefined" || typeof console.log === "undefined" || this.options.visualConsole==true) {
					var tpl = "<div id='consolelog'></div>";
					if($("#consolelog").length == 0){
						$(tpl).appendTo('body');
						$("#consolelog").css({
							"position":"fixed",
							"width":"100%",
							"height":"100px",
							"font-size":"11px",
							"bottom":"0px",
							"left":"0px",
							"overflow":"auto",
							"z-index":"100",
							"background-color":"#fff",
							"padding":"0px",
							"border-top":"2px solid #ccc"
						});
						$('html,body').css({'margin-bottom':'100px','height':"auto"});
					}
					$("<span>"+str+"</span></br>").appendTo("#consolelog");
					$("#consolelog").scrollTop($("#consolelog").prop('scrollHeight'));
				}else{
					console.log(str);
				}
			}
		},
		startCounter : function(){
			var self = this;
			self.consoleLog('startCounter Called');
			self.timerobj = setInterval(function(){self.timer()},1000);
		},
		timer : function(){
			var self = this;
			this.actionUser = false;
			self.consoleLog('Current timer : ' +this.currentTimer);
			self.checkTimer(this.currentTimer);
			self.currentTimer++;
		},
		init : function (options,elem){
			var self = this;
			options = options;
			self.elem = elem;
			self.options = $.extend(true,$.fn.tb_timersession.options,options);
			var str="";
			for (var key in self.options){
				str+= "<li>"+key +":"+ eval("self.options."+key)+"</li>"
				
			}
			self.consoleLog('Init executed with the following parameters :<ul> '+str+'</ul>');
			self.startCounter();
			$(document).bind('keypress click',function(){
				self.detectHuman();
			});

		},
		detectHuman : function(){
			this.consoleLog('detectHuman Called');
			var self = this;
			clearInterval(this.timerobj);
			if(self.actionUser == false){
				if(this.currentTimer > this.options.humanThreshold){
					self.consoleLog('Human Activity detected with a threshold of '+this.options.humanThreshold+' seconds, calling url in keepAliveSessionUrl');
					$.get(self.options.keepAliveSessionUrl);
					self.actionUser = true;
					self.currentTimer = 0;
					self.options.keepSessionAction();
				}
				
			}
			this.startCounter();
		},
		checkTimer : function(){
			var self = this;
			return $.grep(self.options.timers,function(n,i){
				if(n.time == self.currentTimer){
					self.consoleLog('Found idle Timer Execution after '+n.time+' seconds');
					if((self.options.timers.length-1) == i){
						self.consoleLog('Calling logout url... bye bye :D');
						window.location.href = self.options.logoutUrl;
					}
					if (typeof n.action === 'function'){
						self.consoleLog('Running idle timer function after '+n.time+' seconds');
						return n.action();
					}
				}

				
			});

		}
		
	}
	
})(jQuery,window.document);