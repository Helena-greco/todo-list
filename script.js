const buttonAddList = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const clearSelected = document.querySelector('#remover-selecionado');

function addList() {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  taskList.appendChild(li);
  li.classList.add('toDoList');
  inputText.value = '';
}

function changeBGColor(li) {
  const lis = document.getElementsByClassName('toDoList');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].style.backgroundColor = '';
  }
  li.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

buttonAddList.addEventListener('click', addList);

taskList.addEventListener('click', changeBGColor);

function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', lineThrough);
