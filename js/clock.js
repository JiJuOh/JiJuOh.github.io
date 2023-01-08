const clock = document.getElementById("clock");
const dateToday = document.querySelector("#clock span:first-child");
const timeNow = document.querySelector("#clock span:last-child");


function getClock() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-US', {month: 'short'});
  const date = today.getDate();
  const day = today.toLocaleString('en-US', {weekday: 'short'});
  const hours = today.getHours().toString().padStart(2,"0");
  const mins = today.getMinutes().toString().padStart(2,"0");
  const secs = String(today.getSeconds()).padStart(2,"0");
  dateToday.innerText = (`${month} ${date} ${day} ${year}`);
  timeNow.innerText = (`${hours} : ${mins} : ${secs}`);
}




getClock(); // 뜨지마자 보여주고 
setInterval(getClock, 1000); //1초마다 불러주기