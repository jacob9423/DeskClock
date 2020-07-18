const electron = require('electron');


setInterval(realTime,1000);

var AMorPM;

function realTime(){
    var time = new Date();

    var h = convertTime(time.getHours());
    var m = time.getMinutes();

    if(m < 10){
        m = "0" + m;
    }
    
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('AM-PM').innerHTML = AMorPM; 
}


function convertTime(hour24Time){
    let hour12Time;
    if (hour24Time == 24){
		hour12Time = 12;
		AMorPM = "AM";
		return hour12Time;
	}else if (hour24Time >= 13 && hour24Time < 24){
		hour12Time = hour24Time - 12;
        AMorPM = "PM";
		return hour12Time;
	}else if (hour24Time == 12){
		hour12Time = 12;
		AMorPM = "PM";
		return hour12Time;
	}else if (hour24Time == 0){
		hour12Time = 12;
		AMorPM = "AM";
		return hour12Time;
	}else if (hour24Time > 0 || hour24Time <= 11){
		hour12Time = hour24Time;
		AMorPM = "AM";
		return hour12Time;
	}
}