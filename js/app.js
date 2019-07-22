// DOM Variables
const taskInput_input = document.querySelector('.add-task__input');
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
    if (taskInput_input.value !== '') {
        const task = taskInput_input.value;

        // Create task element
        const taskElement = createElement(task);

        // Append task inside list
        taskList_div.appendChild(taskElement);

        // Empty task imput
        taskInput_input.value = '';
    }

    e.preventDefault();
});

// Delete task
taskList_div.addEventListener('click', e => {
    if (e.target.className.includes('fas')) {
        // If task is not crossed
        if (e.target.previousSibling.style.textDecoration === '') {
            e.target.previousSibling.style.textDecoration = 'line-through';
        }
        else {
            e.target.parentElement.remove();
        }
    }

    e.preventDefault();
});

// Filter Elements