const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY="todos"

// const toDos = []; 
// 6.5 이미 저장되어 있는 것을 보여주지만 새로고침해서 시작할때는
// 항상 비워두고 시작하게됨. 그래서 원래 저장된건 지우고 새로저장된 것만 보여줌
// 따라서.. let 으로 해줘야 함
let toDos = [];
// localstorage !== toDos 로칼스토리지는 복사할뿐
// toDos 가 진짜 우리 DB

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //turn input into a string
}

function deleteToDo(event) {
  //element > Mouthevent > path
  // console.dir(event.target.parentElement.innerText);
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  // deleteLi.id 는 string으로 저장이 되어있음
  // console.log(typeof deleteLi.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
  saveToDo();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //이런식으로 html 에 id 추가를 해주게 된다!
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const cancelBtn = document.createElement("cancelBtn");
  const doneBtn = document.createElement("doneBtn");
  cancelBtn.innerText = "❌";
  cancelBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(cancelBtn);
  todoList.appendChild(li);
}

//span, div, form 차이 
function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ""; // empty the input form
  const newToDoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newToDoObj); 
  paintToDo(newToDoObj);
  saveToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
//   console.log("Hello " +item);
// }

if(savedToDos){
  const parseToDos = JSON.parse(savedToDos); 
  // string to an array. Turn them into JS objects;
  // parseToDos.forEach(sayHello);
  // parseToDos.forEach((item) => console.log ("this is " + item));
  toDos = parseToDos;
  parseToDos.forEach(paintToDo); //accepting an object
}