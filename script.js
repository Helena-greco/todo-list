const buttonAddList = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

function selectLi(li) {
  li.addEventListener('click', () => {
    li.classList.remove('selected');
    li.classList.add('selected');
  });
}

buttonAddList.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  taskList.appendChild(li);
  inputText.value = '';
  selectLi(li);
});
