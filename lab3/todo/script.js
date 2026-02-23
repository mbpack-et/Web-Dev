const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const button= document.getElementById("toggleBtn");
const toggleBtn = document.getElementById("toggleBtn");
const todoList = document.getElementById("todo-list");

toggleBtn.addEventListener("click", () => {
    todoList.classList.toggle("hidden");

    if (todoList.classList.contains("hidden")) {
        toggleBtn.textContent = "show";
    } else {
        toggleBtn.textContent = "hide";
    }
});


form.addEventListener('submit', function (event){
    event.preventDefault();

    const text = input.value; 
    if (text === '') return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function () {
        li.classicList.toggle('done');
    });

    const span = document.createElement('span');
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    list.appendChild(li);

    input.value = '';



    alert("JS works!")
});
