var saveButton = document.querySelectorAll("#save-content");
console.log(saveButton)

var today = moment();  // Today's date
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, HH:mm a"));

// Button to save
for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event.target.parentNode.previousSibling.previousSibling.value)
        console.log(event.target.parentNode.previousSibling.previousSibling.getAttribute('id'))

        // Save to local storage
        var timeContent = event.target.parentNode.previousSibling.previousSibling.getAttribute('id');
        var a = event.target.parentNode.previousSibling.previousSibling.value;
        localStorage.setItem(timeContent, JSON.stringify(a));

        //save to screen
        console.log(event.target.parentNode.previousSibling.previousSibling)

        //get localstorage
        localStorage.getItem(timeContent);

    });
}

// Colour change at time
// PAST - Green


// PRESENT
// var time900 = document.getElementById("9-00");
// var time1000 = document.getElementById("10-00");

// function scheduleWarning(
//     if (getTime = 
// var Time = current.getHours();
// function timeToAlert() {
//     Element.setAttribute("class", "present");
// }
// var time900 = new Time("09:00:00 AM").getTime();
// currentTime = new Time().getTime();
// subtractMilliSecondsValue = time900 - currentTime;
// setTimeout(timeToAlert, subtractMilliSecondsValue);


// timeSpan day = new timeSpan(24, 00, 00);
// TimeSpan activationTime = new TimeSpan(9,0,0);  

// for (var i = 9; i <= saveButton.length; i++) {

//     function scheduleWarning(time, triggerThis) {
//         time = '9:00';
//         timeContent
//         // get hour and minute from hour:minute param received, ex.: '16:00'
//         const hour = Number(time.split(':')[0]);
//         const minute = Number(time.split(':')[1]);

//         // create a Date object at the desired timepoint
//         const startTime = new Date(); startTime.setHours(hours, '9', min, '0');
//         const now = new Date();

//         // increase timepoint by 24 hours if in the past
//         if (startTime.getTime() < now.getTime()) {
//             startTime.setHours(startTime.getHours() + 24);
//         }

//         // get the interval in ms from now to the timepoint when to trigger the alarm
//         const firstTriggerAfterMs = startTime.getTime() - now.getTime();

//         // trigger the function triggerThis() at the timepoint
//         // create setInterval when the timepoint is reached to trigger it every day at this timepoint
//         setTimeout(function () {
//             triggerThis(Element.setAttribute("class", "present"));
//             setInterval(triggerThis, 24 * 60 * 60 * 1000);
//         },
//             firstTriggerAfterMs);
//     }
// }