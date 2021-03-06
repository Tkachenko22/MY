

function createTodoItem(title){
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';

	const label = document.createElement('label');
	label.innerText = title;
	label.className = 'title';

	const editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.className = 'textField';

	const editButton = document.createElement('button');
	editButton.innerText = 'Изменить';
	editButton.className = 'edit';


	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Удалить';
	deleteButton.className = 'delete';

	const listItem = document.createElement('li');
	listItem.className = 'todo-item';
	
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	bindEvents(listItem);

	return listItem;
}

function bindEvents(todoItem) {
 const checkbox = todoItem.querySelector('.checkbox');
 const editButton = todoItem.querySelector('button.edit');
 const deleteButton = todoItem.querySelector('button.delete');

 checkbox.addEventListener('change', toggleTodoItem);
 editButton.addEventListener('click', editTodoItem);
 deleteButton.addEventListener('click', deleteTodoItem);
}


function addTodoItem(event){
	event.preventDefault();

	if (addInput.value === '') return  alert('Необходимо ввести название задачи.');
	if (addInput.value === '-1'  ) return alert('Введите коректное значение');
	
	const todoItem = createTodoItem(addInput.value);
	todoList.appendChild(todoItem);
	addInput.value = '';

}

function toggleTodoItem({target}) {
	console.log(target);
	console.log(this);
 
}
function editTodoItem(){

}
function deleteTodoItem(){


}


	const todoForm = document.getElementById('todo-form');
	const addInput = document.getElementById('add-input');
	const todoList = document.getElementById('todo-list');
	const toodItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);




