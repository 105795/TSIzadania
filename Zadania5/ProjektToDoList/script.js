function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const newTask = document.createElement("li");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "Zrobione";
  completeButton.classList.add("complete");
  completeButton.onclick = function() {
    newTask.classList.toggle("completed");
  };

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&times;";
  deleteButton.classList.add("delete");
  deleteButton.onclick = function() {
    taskList.removeChild(newTask);
  };

  buttonsContainer.appendChild(completeButton);
  buttonsContainer.appendChild(deleteButton);

  newTask.appendChild(buttonsContainer);

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.classList.add("task-text");
  newTask.appendChild(taskContent);

  taskList.appendChild(newTask);
  taskInput.value = "";
}
