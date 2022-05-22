var listaWrapper = document.getElementById('lista')

function addTask() {

    var task = document.getElementById('task').value
    
    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(task);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', task);
	newTask.setAttribute('id', task);

	taskLabel.setAttribute('for', task);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	listaWrapper.appendChild(taskContainer);        

}