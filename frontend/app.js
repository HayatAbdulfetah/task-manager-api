const API_URL = "https://task-manager-api-8amx.onrender.com/api/tasks";
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

// --- 1. GET TASKS ---
// Fetch tasks from the backend and display them
async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    // Clear the list before re-rendering
    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");

      if (task.completed) {
        li.classList.add("completed");
      }

      li.innerHTML = `
        <span><strong>${task.title}</strong> (${task.priority})</span>
      `;

      taskList.appendChild(li);
      
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// --- 2. POST A NEW TASK ---
// Listen for the form submission
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the page from refreshing

  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, priority }), // Convert our data to a JSON string
    });

    if (response.ok) {
      fetchTasks(); // Refresh the list to show the new task
      taskForm.reset();
    } else {
      // Handle the 400 error we created in the backend
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error adding task:", error);
  }
});

// Load tasks immediately when the page opens
fetchTasks();
