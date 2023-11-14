/* 
Function to get current time. 
Using tutorial from: https://iq.opengenus.org/display-live-time-and-date-in-html/
*/

function updateTime(){
    const time = document.getElementById("time")
    const curDate = new Date().toLocaleTimeString()
    time.textContent = curDate
}

setInterval(updateTime, 1000)

/* 
Functions relating to the To-Do List
Using tutorial from: https://www.w3schools.com/howto/howto_js_todolist.asp
*/

// Add items to To-Do List

function addItem() {
    var li = document.createElement("li")
    var input = document.getElementById("itemInput").value
    var t = document.createTextNode(input)
    li.appendChild(t)
    li.className = "list-sec"
    if (input === '') {
      alert("No item to add")
    } else {
      document.getElementById("todoList").appendChild(li)
    }
    document.getElementById("itemInput").value = ""
    
    var span = document.createElement("span")
    var button = document.createElement("button")
    button.textContent = "\u00D7"
    span.className = "close"
    span.appendChild(button)
    li.appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            if(confirm("Do you want to delete this item? You cannot undo this action.") == true) {
                var div = this.parentElement
                div.style.display = "none"
            }
        }
      }
}

// Delete items from To-Do list

var close = document.getElementsByClassName("close")
var i
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement
    div.style.display = "none"
  }
}

  
var addListButton = document.getElementById("add-list-button")
addListButton.addEventListener("click", addItem)


/* 
Functions relating to the Timer
Using material from: https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
*/

// Set time in timer
function setTimer() {
    var input = document.getElementById("timerInput").value
    var timer = document.getElementById("timer")
    if (input === '') {
        alert("Set time")
      } else if (Number.isInteger(parseInt(input))) {
        if (/:/.test(input)) {
            console.log("check")
            timer.textContent = input
        } else if (9 < parseInt(input) && parseInt(input) < 100) {
            timer.textContent = "00:" + input
        } else if (999 < parseInt(input) && parseInt(input) < 10000) {
            timer.textContent = input.substring(0,2) + ":" + input.slice(-2)
        } else if (parseInt(input) >= 10000) {
            alert("Time is too long!")
        } else if (0 < parseInt(input) && parseInt(input) < 10) {
            timer.textContent = "00:0" + input
        } else if (99 < parseInt(input) && parseInt(input) < 1000){
            timer.textContent = "0" + input.substring(0,1) + ":" + input.slice(-2)
        } else {
            alert("Not a valid time!")
        }  
      } else {
        alert("Not a valid time!")
      }
    document.getElementById("timerInput").value = ""
}

var setTimerButton = document.getElementById("set-timer")
setTimerButton.addEventListener("click", setTimer)

// Reset time in timer

function resetTimer() {
    var timer = document.getElementById("timer")
    if (confirm("Do you want to reset timer?") == true) {
       timer.textContent = "00:00"
      }
}

var resetTimerButton = document.getElementById("reset-timer")
resetTimerButton.addEventListener("click", resetTimer)

// Start timer 

function countdown(timer, min, sec) {
    var run = setInterval( function () {if (timer.textContent != "00:00"){
        if (sec != "00"){
            sec = parseInt(sec)
            sec = sec - 1
            if (sec < 10){
                sec = "0" + sec
            }
            timer.textContent = min + ":" + sec
            timer = document.getElementById("timer")
        } else {
            min = parseInt(min)
            min = min - 1
            sec = 59
            if (min < 10){
                min = "0" + min
            }
            timer.textContent = min + ":" + sec
            timer = document.getElementById("timer")
        }
    }}, 1000)

    var resetTimerButton = document.getElementById("reset-timer")
    resetTimerButton.addEventListener("click", function () {clearInterval(run)}) // Need this to stop countdown.
}

function stopTimer(run) {
    clearInterval(run)
}

function startTimer() {
    var timer = document.getElementById("timer")
    var min = timer.textContent.substring(0,2)
    var sec = timer.textContent.slice(-2)

    countdown(timer, min, sec)
}

var startTimerButton = document.getElementById("start-timer")
startTimerButton.addEventListener("click", startTimer)