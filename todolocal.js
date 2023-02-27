let addToDoButton = document.getElementById('addTodo');
let todoBox = document.getElementById('todoBox');
let inputField = document.getElementById('inputPlace');



addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todoBox.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        removeTodo(paragraph);
    });
    localStorage.setItem('todoList', todoBox.innerHTML);
});

todoBox.innerHTML = localStorage.getItem('todoList');
