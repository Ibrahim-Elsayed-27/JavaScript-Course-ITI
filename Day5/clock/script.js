var start_clock = document.getElementById("start-btn");
var stop_clock = document.getElementById("stop-btn");

var time_display = document.getElementById("time-display");

var now  = new Date();
var local_time = now.toLocaleTimeString();

time_display.innerText = local_time;

start_clock.addEventListener("click", function(){
    alert("Clock Started");
    clock_interval = setInterval(function(){
        var now  = new Date();
        var local_time = now.toLocaleTimeString();
        time_display.innerText = local_time;
    }, 1000);
});

stop_clock.addEventListener("click", function(){
    alert("Clock Stopped");
    clearInterval(clock_interval);
});