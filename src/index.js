var timer = document.getElementById("stopwatch");
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

var hr = 0,
  min = 0,
  sec = 0,
  isStop = false,
  timerId;

function startTimer() {
  console.log("start");
  isStop = false;
  clearInterval(timerId);
  timerId = setInterval(() => timerChange(), 1000);
}

function timerChange() {
  if (!isStop) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      sec = 0;
      min = 0;
    }
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hr < 10) hr = "0" + hr;
    timer.innerHTML = hr + ":" + min + ":" + sec;
  }
}
function stopTimer() {
  console.log("stop");
  isStop = true;
}

function resetTimer() {
  console.log("reset");
  clearInterval(timerId);
  hr = 0;
  sec = 0;
  min = 0;
  timer.innerHTML = "00:00:00";
}
