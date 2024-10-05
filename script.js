document.getElementById("addBtn").addEventListener("click", function (){
    const tastInput = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;
  
    if (taskInput === "") {
      alert("You must write something!");
      return;
    }
  
    const li = document.createElement("li");
    li.textcontent = taskInput;
  
    // Adding the due date
    if (taskDate) {
      const dateSpan = document.createElement("span");
      dateSpan.textContent = "Due Date: " + taskDate;
      li.appendChild(dateSpan);
    }
  
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteButton);
  
    document.getElementById("todoList").appendChild(li);
  
    // Clear the input field
    document.getElementById('taskInput').value = "";
    document.getElementById("takeDate").value = "";
  });