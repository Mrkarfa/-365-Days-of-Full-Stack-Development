import "./style.css";

// --- State Management ---
const STATE = {
  tasks: JSON.parse(localStorage.getItem("kanban-tasks")) || [],
  draggedTaskId: null,
};

// --- DOM Elements ---
const columns = {
  inprogress: document.getElementById("inprogress-list"),
  done: document.getElementById("done-list"),
  impeded: document.getElementById("impeded-list"),
};

const counts = {
  inprogress: document.getElementById("inprogress-count"),
  done: document.getElementById("done-count"),
  impeded: document.getElementById("impeded-count"),
};

// Modals
const addModal = document.getElementById("task-modal"); // Reusing existing ID somewhat confusingly, but ok
// We will create the Detail Modal dynamically or reuse the same structure if smart,
// but for clarity let's inject a specific Detail Modal structure if it doesn't exist,
// or simply repurpose the existing one carefully.
// To keep it clean, let's inject a separate generic modal container for details.
const detailModalHTML = `
<div id="detail-modal" class="modal hidden">
  <div class="modal-content glass-panel detail-modal">
    <span class="close-detail">&times;</span>
    <h2 id="detail-title">Task Details</h2>
    <div class="form-group">
      <label>Title</label>
      <input type="text" id="detail-input-title" readonly>
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea id="detail-input-desc" rows="3" readonly></textarea>
    </div>
    <div class="form-group">
      <label>Status</label>
      <input type="text" id="detail-input-status" readonly>
    </div>
  </div>
</div>
`;
document.body.insertAdjacentHTML("beforeend", detailModalHTML);

const detailModal = document.getElementById("detail-modal");
const closeDetailBtn = document.querySelector(".close-detail");

const addTaskBtn = document.getElementById("add-task-btn");
const closeModalBtn = document.querySelector(".close-modal");
const cancelBtn = document.getElementById("cancel-btn");
const taskForm = document.getElementById("task-form");
const columnElements = document.querySelectorAll(".column");

// --- Initialization ---
function init() {
  renderTasks();
  setupEventListeners();
}

// --- Rendering ---
function renderTasks() {
  // Clear columns
  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  // Distribute tasks
  STATE.tasks.forEach((task) => {
    // Migrate old statuses if necessary
    if (task.status === "todo") task.status = "inprogress";

    if (columns[task.status]) {
      columns[task.status].appendChild(createTaskElement(task));
    }
  });

  // Update counts
  updateCounts();
}

function createTaskElement(task) {
  const div = document.createElement("div");
  div.className = "task-card";
  div.draggable = true;
  div.dataset.id = task.id;

  // Determine tag style
  const tagClass = getTagClass(task.tag);

  div.innerHTML = `
    <h3>${escapeHtml(task.title)}</h3>
    ${
      task.tag
        ? `
      <div class="task-tags">
        <span class="tag ${tagClass}">${task.tag}</span>
      </div>
    `
        : ""
    }
    
    <div class="card-actions">
      <button class="action-btn expand" title="Expand Details">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </button>
      <button class="action-btn delete" title="Delete Task">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `;

  // Drag Events for Task
  div.addEventListener("dragstart", handleDragStart);
  div.addEventListener("dragend", handleDragEnd);

  // Events for buttons
  const expandBtn = div.querySelector(".action-btn.expand");
  const deleteBtn = div.querySelector(".action-btn.delete");

  expandBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent drag or other card clicks
    openDetailModal(task);
  });

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  });

  return div;
}

function getTagClass(tag) {
  if (!tag) return "";
  const lower = tag.toLowerCase();
  if (lower.includes("design")) return "design";
  if (lower.includes("research")) return "research";
  if (lower.includes("market")) return "marketing";
  return "design"; // default
}

function updateCounts() {
  const countsMap = { inprogress: 0, done: 0, impeded: 0 };
  STATE.tasks.forEach((task) => {
    if (countsMap[task.status] !== undefined) countsMap[task.status]++;
  });

  Object.keys(countsMap).forEach((status) => {
    if (counts[status]) counts[status].textContent = countsMap[status];
  });
}

// --- Logic Operations ---

function saveAndRender() {
  localStorage.setItem("kanban-tasks", JSON.stringify(STATE.tasks));
  renderTasks();
}

function addTask(title, description, status) {
  const possibleTags = ["Design", "User Research", "Marketing", "Development"];
  const randomTag =
    possibleTags[Math.floor(Math.random() * possibleTags.length)];

  const newTask = {
    id: Date.now().toString(),
    title,
    description,
    status,
    tag: randomTag,
    createdAt: Date.now(),
  };
  STATE.tasks.push(newTask);
  saveAndRender();
  closeAddModal();
}

function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    STATE.tasks = STATE.tasks.filter((t) => t.id !== id);
    saveAndRender();
  }
}

function updateTaskStatus(id, newStatus) {
  const task = STATE.tasks.find((t) => t.id === id);
  if (task && task.status !== newStatus) {
    task.status = newStatus;
    saveAndRender();
  }
}

// --- Drag & Drop Handlers ---

function handleDragStart(e) {
  STATE.draggedTaskId = this.dataset.id;
  this.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}

function handleDragEnd(e) {
  this.classList.remove("dragging");
  STATE.draggedTaskId = null;
  columnElements.forEach((col) => col.classList.remove("drag-over"));
}

function getDragAfterElement(column, y) {
  const draggableElements = [
    ...column.querySelectorAll(".task-card:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// --- Event Listeners ---

function setupEventListeners() {
  if (addTaskBtn) addTaskBtn.addEventListener("click", openAddModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeAddModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeAddModal);

  // Close details
  if (closeDetailBtn)
    closeDetailBtn.addEventListener("click", closeDetailModal);

  window.addEventListener("click", (e) => {
    if (e.target === addModal) closeAddModal();
    if (e.target === detailModal) closeDetailModal();
  });

  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("task-title").value;
      const desc = document.getElementById("task-desc").value;
      const status = document.getElementById("task-status").value;
      addTask(title, desc, status);
    });
  }

  columnElements.forEach((col) => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(
        col.querySelector(".task-list"),
        e.clientY
      );
      const draggable = document.querySelector(".dragging");
      const list = col.querySelector(".task-list");

      if (afterElement == null) {
        list.appendChild(draggable);
      } else {
        list.insertBefore(draggable, afterElement);
      }

      col.classList.add("drag-over");
    });

    col.addEventListener("dragleave", () => {
      col.classList.remove("drag-over");
    });

    col.addEventListener("drop", (e) => {
      e.preventDefault();
      const status = col.dataset.status;
      if (STATE.draggedTaskId) {
        updateTaskStatus(STATE.draggedTaskId, status);
      }
      col.classList.remove("drag-over");
    });
  });
}

function openAddModal() {
  addModal.classList.add("visible");
  const titleInput = document.getElementById("task-title");
  if (titleInput) titleInput.focus();
}

function closeAddModal() {
  addModal.classList.remove("visible");
  if (taskForm) taskForm.reset();
}

function openDetailModal(task) {
  document.getElementById("detail-input-title").value = task.title;
  document.getElementById("detail-input-desc").value =
    task.description || "No description provided.";
  document.getElementById("detail-input-status").value =
    task.status.toUpperCase();
  detailModal.classList.add("visible");
}

function closeDetailModal() {
  detailModal.classList.remove("visible");
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

init();
