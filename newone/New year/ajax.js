// Set the date we're counting down to (New Year's Day)
// const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
let country1=document.getElementById('country');
const con2=document.querySelector('#countrys');
const con1=document.querySelector('.con');
let button=document.querySelector('#mybutton');
 let countDownDate;
 let d=document.getElementById('days');
 let h=document.getElementById('hours');
 let m=document.getElementById('minutes');
 let s=document.getElementById('seconds');
 


function updateCountdown(y) {
    // Logic that depends on y
    if (y == "India") {
        countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
        console.log("India", countDownDate);
    } else if (y == "Japan") {
        countDownDate = new Date("Jan 1, 2024 00:00:00 GMT+0900").getTime();
        console.log("Japan", countDownDate);
    } else if (y == "United States") {
        countDownDate = new Date("Jan 1, 2024 00:00:00 GMT-0500").getTime();
        console.log("UN", countDownDate);
    }
   else if (y == "China") {
    countDownDate = new Date("Jan 1, 2024 00:00:00 GMT+0800").getTime();
    }
    else if (y == "Europe") {
      countDownDate = new Date("Jan 1, 2024 00:00:00 GMT+0100").getTime();
      }
      else if (y == "Brazil") {
        countDownDate = new Date("Jan 1, 2024 00:00:00 GMT-0300").getTime();
        }
        else if (y == "Australia") {
          countDownDate = new Date("Jan 1, 2024 00:00:00 GMT+1000").getTime();

          }
    set_time();
}
function set_time(){
console.log("value",countDownDate)
const x = setInterval(function() {
    console.log("setvalue", countDownDate);
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  localStorage.setItem("days", days);
  localStorage.setItem("hours", hours);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("seconds", seconds);
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy New Year!";
  }
  
}, 1000);

}

function navigate(){
  let b=country1.value;
  let day=d.innerText;
  let hour=h.innerText;
  let min=m.innerText;
  let sec=s.innerText;
   window.open('side-1.html', 'figma');
  // const otherWindow = window.open('*');

  // // Post a message to the other window with the new content
  // otherWindow.postMessage(y, '*');
  localStorage.setItem('newContent', b);
}
const days=localStorage.getItem('days');
const hours=localStorage.getItem('hours');
const minutes=localStorage.getItem('minutes');
const seconds=localStorage.getItem('seconds');
if(days){
  d.innerText=days;
}
if(hours){
  h.innerText=hours;
}
if(minutes){
  m.innerText=hours;
}
if(seconds){
  s.innerText=hours;
}
const newContent = localStorage.getItem('newContent');
if (newContent) {
  document.getElementById('countrys').textContent = newContent;
  // d.innerText=newContent;
  localStorage.removeItem('newContent'); // Optional: Remove the item if needed
}

country1.addEventListener("change", function() {
  let y=country1.value;
  console.log("valueone",y)
  updateCountdown(y);
});





