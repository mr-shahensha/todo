const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todolist=document.querySelector(".todo-list");

todoButton.addEventListener("click",addTodo);

function addTodo(event){
    event.preventDefault();
    console.log("abc");

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo=document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    const complete=document.createElement("button");
    complete.innerText="c";
    complete.classList.add("complete-btn");
    todoDiv.appendChild(complete);

    const deletebtn=document.createElement("button");
    deletebtn.innerText="D";
    deletebtn.classList.add("delete-btn");
    todoDiv.appendChild(deletebtn);
    
    todolist.appendChild(todoDiv);
    todoInput.value="";
}
