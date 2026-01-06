// Team Members
export const teamMembers = [
  { id: 1, name: "Mikel Macoy", avatar: "MM", color: "#22c55e" },
  { id: 2, name: "Brooklyn Simmons", avatar: "BS", color: "#f97316" },
  { id: 3, name: "Leslie Alexander", avatar: "LA", color: "#3b82f6" },
  { id: 4, name: "Jenny Wilson", avatar: "JW", color: "#a855f7" },
  { id: 5, name: "Darrell Steward", avatar: "DS", color: "#eab308" },
];

// Current User
export const currentUser = {
  id: 0,
  name: "Bobby Axelrod",
  role: "Operation Manager",
  avatar: "BA",
  color: "#84cc16",
};

// Navigation Items
export const mainMenuItems = [
  { id: "projects", label: "Projects", icon: "Folder", badge: 3, active: true },
  { id: "messages", label: "Messages", icon: "MessageSquare", badge: 23 },
  { id: "reporting", label: "Reporting", icon: "BarChart3" },
  { id: "task", label: "Task", icon: "CheckSquare", badge: 15 },
  { id: "users", label: "Users", icon: "Users" },
];

export const topNavItems = [
  { id: "search", label: "Search", icon: "Search", shortcut: "⌘ K" },
  { id: "contacts", label: "Contacts", icon: "Contact" },
  { id: "activity", label: "Activity", icon: "Activity" },
  { id: "settings", label: "Settings", icon: "Settings" },
];

// Projects
export const projects = [
  { id: 1, name: "Apex Branding", icon: "A", color: "#ef4444", active: true },
  { id: 2, name: "Superside Redesign", icon: "S", color: "#eab308" },
  { id: 3, name: "Google's Projects", icon: "G", color: "#3b82f6" },
];

// Tab Navigation
export const tabItems = [
  { id: "overview", label: "Overview", icon: "LayoutDashboard" },
  { id: "list", label: "List", icon: "List" },
  { id: "board", label: "Board", icon: "Columns" },
  { id: "timeline", label: "Timeline", icon: "Clock" },
  { id: "dashboard", label: "Dashboard", icon: "PieChart" },
  { id: "calendar", label: "Calendar", icon: "Calendar" },
  { id: "file", label: "File", icon: "FileText" },
];

// Kanban Columns
export const initialColumns = {
  todo: {
    id: "todo",
    title: "To Do",
    taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
  },
  working: {
    id: "working",
    title: "Working in progress",
    taskIds: ["task-6", "task-7", "task-8"],
  },
  "in-progress": {
    id: "in-progress",
    title: "In Progress",
    taskIds: ["task-9", "task-10"],
  },
  done: {
    id: "done",
    title: "Done",
    taskIds: ["task-11", "task-12", "task-13", "task-14", "task-15", "task-16"],
  },
};

export const columnOrder = ["todo", "working", "in-progress", "done"];

// Tasks
export const initialTasks = {
  "task-1": {
    id: "task-1",
    title: "Logo Idea's visualizations from brainstorming session.",
    tags: [
      { label: "Important", type: "important" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Jan 20 - 25",
    assignees: [1, 2, 3],
  },
  "task-2": {
    id: "task-2",
    title: "Generate proposed colours for initiating proposal.",
    tags: [
      { label: "Important", type: "important" },
      { label: "Conceptualization", type: "conceptualization" },
    ],
    dateRange: "Feb 21 - 23",
    assignees: [1, 2, 3],
  },
  "task-3": {
    id: "task-3",
    title: "Make a budget proposal ASAP",
    tags: [
      { label: "Finance", type: "finance" },
      { label: "Budget", type: "budget" },
    ],
    dateRange: "Mar 01 - 25",
    assignees: [1, 2, 3],
  },
  "task-4": {
    id: "task-4",
    title: "Generate proposed colours for initiating proposal.",
    tags: [
      { label: "Important", type: "important" },
      { label: "Conceptualization", type: "conceptualization" },
    ],
    dateRange: "Feb 21 - 25",
    assignees: [1, 2, 3],
  },
  "task-5": {
    id: "task-5",
    title: "Create mood board for brand direction",
    tags: [
      { label: "Important", type: "important" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Mar 05 - 10",
    assignees: [2, 4],
  },
  "task-6": {
    id: "task-6",
    title: "Define brand tone and messaging guidelines",
    tags: [
      { label: "High", type: "high" },
      { label: "UI design", type: "ui-design" },
    ],
    dateRange: "Mar 20 - 25",
    assignees: [1, 2, 3],
  },
  "task-7": {
    id: "task-7",
    title: "Outline a marketing plan for the Super Bowl launch",
    tags: [
      { label: "Medium", type: "medium" },
      { label: "Off track", type: "off-track" },
    ],
    dateRange: "Jan 18 - 25",
    assignees: [1, 2, 3],
  },
  "task-8": {
    id: "task-8",
    title: "Outline a marketing plan for the Super Bowl launch",
    tags: [
      { label: "Medium", type: "medium" },
      { label: "Off track", type: "off-track" },
    ],
    dateRange: "Jan 16 - 25",
    assignees: [1, 2, 3],
  },
  "task-9": {
    id: "task-9",
    title: "Draft a press release for the brand relaunch",
    tags: [
      { label: "Low", type: "low" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Mar 25 - 25",
    assignees: [1, 2, 3],
  },
  "task-10": {
    id: "task-10",
    title: "Coordinate with vendors for production materials",
    tags: [
      { label: "High", type: "high" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Mar 25 - 25",
    assignees: [1, 2, 3],
  },
  "task-11": {
    id: "task-11",
    title: "Logo Idea's visualizations from brainstorming session.",
    tags: [
      { label: "Important", type: "important" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Jan 20 - 25",
    assignees: [1, 2, 3],
  },
  "task-12": {
    id: "task-12",
    title: "Define brand tone and messaging guidelines",
    tags: [
      { label: "High", type: "high" },
      { label: "UI design", type: "ui-design" },
    ],
    dateRange: "Mar 20 - 25",
    assignees: [1, 2, 3],
  },
  "task-13": {
    id: "task-13",
    title: "Coordinate with vendors for production materials",
    tags: [
      { label: "High", type: "high" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Mar 25 - 25",
    assignees: [1, 2, 3],
  },
  "task-14": {
    id: "task-14",
    title: "Outline a marketing plan for the Super Bowl launch",
    tags: [
      { label: "Medium", type: "medium" },
      { label: "Off track", type: "off-track" },
    ],
    dateRange: "Jan 16 - 25",
    assignees: [1, 2, 3],
  },
  "task-15": {
    id: "task-15",
    title: "Generate proposed colours for initiating proposal.",
    tags: [
      { label: "Important", type: "important" },
      { label: "Conceptualization", type: "conceptualization" },
    ],
    dateRange: "Feb 21 - 25",
    assignees: [1, 2, 3],
  },
  "task-16": {
    id: "task-16",
    title: "Review final brand assets before launch",
    tags: [
      { label: "High", type: "high" },
      { label: "Visualization", type: "visualization" },
    ],
    dateRange: "Mar 28 - 30",
    assignees: [1, 3, 5],
  },
};

// Current Project Info
export const currentProject = {
  name: "Apex Branding",
  title: "Apex core rebranding for Super Bowl",
  isPrivate: true,
  teamAvatars: [
    { id: 1, color: "#ef4444", initial: "A" },
    { id: 2, color: "#eab308", initial: "T" },
    { id: 3, color: "#22c55e", initial: "D" },
    { id: 4, color: "#3b82f6", initial: "G" },
  ],
  additionalMembers: 5,
};
