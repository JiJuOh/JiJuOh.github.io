const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const welcome = document.querySelector("#welcome");
const afterLog = document.getElementById("after-log");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; // we are using it more than twice
// convention: uppercase variables contains not crusial string 
const USERNAME_KEY = "username"; //browser can detect error

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  welcome.classList.add(HIDDEN_CLASSNAME);
  afterLog.classList.remove(HIDDEN_CLASSNAME); // show it by removing the class
  greeting.innerText = `THE ${username} TIMES` ;
  //start with backticks ``, 물결표시(~) 입력할 때 사용하는 `를 입력
  // not double quotes "" nor single quotes ''
}

function onLoginSubmit(event) {
  // event.preventDefault(); // 1. stop the browser refreshing
  loginForm.classList.add(HIDDEN_CLASSNAME); // 2. hide the form
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//console.log(savedUsername);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 다른 div 들도 다 보여줄 수 있또록 선언
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}

