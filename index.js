let tasks = [
    {id: 1, description: 'comprar pão', checked: true},
    {id: 2, description: 'aula de boxe', checked: true},
    {id: 3, description: 'jogar futebol', checked: false}
]

const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    list.appendChild(toDo);

    return toDo;
}

const getCheckBoxInput = ({ id, description, checked }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
}

const getNewTaskData = () => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();

    return { description, id }
}

const createTask = (event) => {
    event.preventDefault();
    
    const newTaskData = getNewTaskData(event);
    const { id , description } = newTaskData;

    const checkbox = getCheckBoxInput(newTaskData)
    createTaskListItem(newTaskData, checkbox );

    tasks = [...tasks, { id: newTaskData.id, description: newTaskData.description, checked: false}]
}

window.onload = function() {
const form = document.getElementById('create-todo-form');
form.addEventListener('submit', createTask)

    tasks.forEach((task) => {
        const checkbox = getCheckBoxInput(task);

        const list = document.getElementById('todo-list');
        const toDo = document.createElement('li');
        //const button = document.createElement('button')

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        //toDo.appendChild(button);

        list.appendChild(toDo);
    })
}