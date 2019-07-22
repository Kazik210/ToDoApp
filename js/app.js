// DOM Variables
const taskInput_input = document.querySelector('.add-task__input');
const addTask_button = document.querySelector('.add-task__button');
const taskList_div = document.querySelector('.task-wrapper');
const filter_input = document.querySelector('.filter-list__input');

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

//Empty task list
taskList_div.innerHTML = '';

// Button event
addTask_button.addEventListener('click', e => {
    if (taskInput_input.value !== '') {
        const task = taskInput_input.value;

        // Create task element
        const taskElement = createElement(task);
        taskElement.style.display = 'flex';

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
filter_input.addEventListener('keyup', e => {
    const filter = filter_input.value;
    // console.log(filter);
    // console.log(taskList_div.childNodes);

    // Get array of task list children
    const taskArr = Array.from(taskList_div.childNodes);
    console.log(taskArr);

    // If Arr is not empty
    if (taskArr.length >= 1) {
        // Filter elements
        taskArr.forEach(e => {
            // console.log(e.firstChild.innerHTML);
            // console.log(e);
            if (!e.firstChild.innerHTML.includes(filter)) {
                e.style.display = 'none';
            }
            else {
                e.style.display = 'flex';
            }
        });
    }

    e.preventDefault();
});