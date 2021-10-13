var time = 0;
var minutes = 0;
var seconds = 0;
var tempReset = 0;
var countdown = null;

document.getElementById("timer").innerHTML = '00:00' ;
const showTimer = document.getElementById("timer");


document.getElementById("start_pomodoro").onclick = 
    function(){
        tempReset = 25;
        time = 25 * 60;
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        showTimer.innerHTML = minutes+":"+seconds;
    }

document.getElementById("sbreak_countdown").onclick = 
    function(){
        tempReset = 5;
        time = 5 * 60;
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        showTimer.innerHTML = minutes+":"+seconds;
    }

document.getElementById("lbreak_countdown").onclick = 
    function(){
        tempReset = 15;
        time = 15 * 60;
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        showTimer.innerHTML = minutes+":"+seconds;
    }

document.getElementById("submit").onclick = 
    function(){
        let minutes = parseInt(document.getElementById("new_min_countdown").value);
        tempReset = minutes;
        if(minutes > 60){
            alert("Enter less than 59 minutes");
            document.getElementById("new_min_countdown").value = 'Enter Minutes';
        }else{
            time = minutes * 60;
            showTimer.innerHTML = minutes+':00';
            document.getElementById("new_min_countdown").value = 'Enter Minutes';   
        }
    }


    function countDown(){
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        showTimer.innerHTML = minutes+":"+seconds;
        if(time != 0){
            time--;
        }else{
            clearInterval(countdown);
            showTimer.innerHTML = '00:00';
        }
    }


document.getElementById("start-timer").onclick = 
    function(){
        function start_interval(){
            countdown = setInterval(countDown, 1000);
        }
        start_interval();

    }

document.getElementById("pause-timer").onclick =
    function(){
        clearInterval(countdown);
    }

document.getElementById("reset-timer").onclick =
    function(){
        clearInterval(countdown);
        tempReset = tempReset * 60;
        time = tempReset;
        minutes = Math.floor(tempReset / 60);
        seconds = tempReset % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        showTimer.innerHTML = minutes+":"+seconds;
    }

document.getElementById("clear-timer").onclick =
    function(){
        clearInterval(countdown);
        showTimer.innerHTML = '00:00';
    }