let addToDoButon = document.getElementById('addTodo');
        let todoBox = document.getElementById('todoBox');
        let inputField = document.getElementById('inputPlace');
        addToDoButon.addEventListener('click',function(){
            var paragraph = document.createElement('p')
            paragraph.innerText = inputField.value;
            todoBox.appendChild(paragraph);
            inputField.value="";
            paragraph.addEventListener('click', function(){
                paragraph.style.textDecoration="line-through";
            })
            paragraph.addEventListener('dblclick', function(){
                todoBox.removeChild(paragraph);
            });
        });