const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (title !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-row');
        taskItem.innerHTML = `
            <div class="task-column">${title}</div>
            <div class="task-column">${description}</div>
            <div class="task-column">${dueDate}</div>
            <div class="task-column">${priority}</div>
        `;
        taskList.appendChild(taskItem);

        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'High';
    }
}
