class Todo{
constructor(title , content){
    this.title = title;
    this.content=content;
    this.date = new Date();
}
}
let Todo_items = [];
const addBtn = document.getElementById('add-task');
const todoList = document.getElementById('todo-items');
const todoAddBtn = document.getElementById('add-btn');
const todoForm = document.getElementById('todo-form');
const overlay = document.getElementById('overlay');

todoAddBtn.addEventListener('click',function(){
  overlay.classList.add('show');

});


addBtn.addEventListener('click',function(){
     const title = document.getElementById('title').value;  
     const content = document.getElementById('description').value;
     const newtodo = new Todo(title,content);
     Todo_items.push(newtodo);
     console.log(Todo_items);
     displayTodos();
     overlay.classList.remove('show');
  });

function displayTodos(){
      todoList.innerHTML = '';
      Todo_items.forEach(function(todo){
        todoList.innerHTML += `
        <div class = "todoItem" id = "todo">
        <h3 class="titre">${todo.title}</h3>
        <p  class="content">${todo.content}</p>
        <small>${todo.date.toLocaleString()}</small>
        </div>`

      })
}
