// script.js
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <span onclick="removeTask(this)">❌</span>`;
    document.getElementById("taskList").appendChild(listItem);
    input.value = "";
  }
}

function removeTask(element) {
  element.parentElement.remove();
}