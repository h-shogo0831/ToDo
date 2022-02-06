'use strict'

{
  const addBox = document.getElementById('addBox');
  const addBtn = document.getElementById('add');
  const ul = document.querySelector('ul');
  const todos = JSON.parse(localStorage.getItem("todos"));
  
  const save = ()=>{
    const lists = document.querySelectorAll('li');
    let todos =[];
    lists.forEach(list => {
      todos.push(list.firstChild.textContent)
    });
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const add = (todo)=>{
    const li = document.createElement('li');
    const doneButton = document.createElement('button');

    li.classList.add('todos');
    if(todo){
      li.innerText = todo;
    }else{
      li.innerText = addBox.value;
    }
    ul.appendChild(li);
    doneButton.classList.add('finish');
    doneButton.innerText = '完了';
    li.appendChild(doneButton);
    doneButton.addEventListener('click',()=>{
      const li = doneButton.closest('li');
      li.remove();
      save();
    });
    addBox.value ='';
    save();
  };

  if(todos){
    todos.forEach(todo => {
     add(todo);
    });
  }
  
  addBtn.addEventListener('click', ()=>{
    if(addBox.value !== ''){
      add();
    };
  });
  
} 