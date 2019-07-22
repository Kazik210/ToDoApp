// DOM Variables
const task_input = document.querySelector('.add-task__input');
const addTask_button = document.querySelector('.add-task__button');
const taskList_div = document.querySelector('.task-wrapper');

// Create task element
function createElement(task) {
    // Create div
    const div = document.createElement('div');
    div.classList.add('task-wrapper__element');

    // Create p
    const p = document.createElement('p');
    p.innerHTML = task;

    // Create i
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-times');

    // Append p and i inside div
    div.appendChild(p);
    div.appendChild(i);

    return div;
}

// Button event
addTask_button.addEventListener('click', e => {
    if (task_input.value !== '') {
        const task = task_input.value;

        // Create task element
        const taskElement = createElement(task);

        // Append task inside list
        taskList_div.appendChild(taskElement);

        // Empty task imput
        task_input.value = '';
    }

    e.preventDefault();
});