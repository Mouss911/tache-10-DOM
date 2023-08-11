let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche valide.");
        return;
    }

    tasks.push({
        text: taskText,
        status: "to do"
    });

    taskInput.value = "";
    displayTasks();
}

function changeStatus(index, status) {
    tasks[index].status = status;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";

        const taskText = document.createTextNode(task.text);
        listItem.appendChild(taskText);

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group float-right";

        const toDoBtn = document.createElement("button");
        toDoBtn.className = "btn btn-danger";
        toDoBtn.innerText = "To Do";
        toDoBtn.onclick = () => changeStatus(index, "to do");
        btnGroup.appendChild(toDoBtn);

        const doingBtn = document.createElement("button");
        doingBtn.className = "btn btn-warning";
        doingBtn.innerText = "Doing";
        doingBtn.onclick = () => changeStatus(index, "doing");
        btnGroup.appendChild(doingBtn);

        const doneBtn = document.createElement("button");
        doneBtn.className = "btn btn-success";
        doneBtn.innerText = "Done";
        doneBtn.onclick = () => changeStatus(index, "done");
        btnGroup.appendChild(doneBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-secondary";
        deleteBtn.innerText = "Supprimer";
        deleteBtn.onclick = () => deleteTask(index);
        btnGroup.appendChild(deleteBtn);

        listItem.appendChild(btnGroup);

        if (task.status === "to do") {
            listItem.style.backgroundColor = "red";
        } else if (task.status === "doing") {
            listItem.style.backgroundColor = "orange";
        } else if (task.status === "done") {
            listItem.style.backgroundColor = "green";
        }

        taskList.appendChild(listItem);
    });
}

// Afficher les tâches initiales
displayTasks();
