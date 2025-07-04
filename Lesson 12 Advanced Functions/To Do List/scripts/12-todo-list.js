const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
 }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
 }]; 

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name } = todoObject; // same as const name = todoObject.name;
    const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
      // name: name,
      // dueDate: dueDate
      name, // if property name in object is the same this line is the same as name: name,
      dueDate,
    });

    inputElement.value = '';

    renderTodoList();
}