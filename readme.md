### tb_timersession Plugin for jQuery

### What is this?

tb_timersession is a jQuery plugin that allows you to control idle timeouts of absent users. Tb_timersession allows you to generate as many control timers as you need to trigger actions as the time pass by in seconds. The difference with other plugins is that tb_timersession allow you to control as many events you want, not just one or two! Feel free to generate timers depending on the moment you need it!

### Starting up

tb_timersession is very easy to use and implement. At the same time, tb_timersession offers to the developer great flexibility in order to generate time events in the adequate time.

#### installation
After you download the most recent copy from GitHub, get the zip file and decompress their contents, then copy the tb_timersession flavor you want (non-compressed version and minified version). The files are inside of the directory /src of the compressed file. Once you are ready, place your tb_timersession file in your script folder in your production page.

#### setup

The simplest way to set up your tb_timersession is to include the javascript file in the ``<head>`` of your web page, generate your parameters inside of the ```<script>``` tag and initialize the code once the page is loaded, like this: 
```html 
<script type="text/javascript" src="/js/jquery.tb_timersession.js"></script>
<script>
var mytimers = {
    timers : [
        {
            time:10,
            action:function(){...}
        },
        {
            time:20,
            action:function(){...}
        },
        {
            time:30,
            action:function(){...}
        },
    ],
    keepAliveSessionUrl : "http://mysite/keepsessionurl",
    logoutUrl           : "./index.html",
    humanThreshold      : 5,
    keepSessionAction   : function(){...}
}
</script>
```
#### Initialization
once you have done the setup of your timer event(s), you must add the following code before of the ```</script>``` tag where we wrote the timer events:
```javascript
$(function(){
    $(document).tb_timersession(mytimers);
});
```
With this, the timer events will be executed once the idle time matches one of the timers.
#### Warning
Note : DO NOT RUN MORE THAN ONE tb_timersession on your page!!! This plugin is intended to be executed once in your application.

#### Demos
Please Reference the index.html document. It contains all the information about Settings, Live Examples and complete Sourcecode.

### Bug Reporting
Please write to tbogard@streamoverlaypro.com if you want to report a malfunction with the plugin.
