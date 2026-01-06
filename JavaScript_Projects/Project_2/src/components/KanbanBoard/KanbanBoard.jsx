import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Plus, MoreHorizontal, Calendar } from "lucide-react";
import {
  initialColumns,
  columnOrder,
  initialTasks,
  teamMembers,
} from "../../data/mockData";
import "./KanbanBoard.css";

function TaskCard({ task, index }) {
  const assignees = task.assignees
    .map((id) => teamMembers.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-card ${snapshot.isDragging ? "dragging" : ""}`}
        >
          <h4 className="task-title">{task.title}</h4>

          <div className="task-tags">
            {task.tags.map((tag, idx) => (
              <span key={idx} className={`task-tag ${tag.type}`}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="task-meta">
            <div className="task-date">
              <Calendar />
              <span>{task.dateRange}</span>
            </div>
            <div className="task-assignees">
              {assignees.slice(0, 3).map((member) => (
                <div
                  key={member.id}
                  className="assignee-avatar"
                  style={{ backgroundColor: member.color }}
                  title={member.name}
                >
                  {member.avatar}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

function Column({ column, tasks }) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="column-title-section">
          <h3 className="column-title">{column.title}</h3>
          <span className="column-count">• {tasks.length}</span>
        </div>
        <div className="column-actions">
          <button className="btn-column-action">
            <Plus />
          </button>
          <button className="btn-column-action">
            <MoreHorizontal />
          </button>
        </div>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`column-content ${
              snapshot.isDraggingOver ? "dragging-over" : ""
            }`}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="column-footer">
        <button className="btn-add-task">
          <Plus />
          <span>Add New</span>
        </button>
      </div>
    </div>
  );
}

function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // No destination
    if (!destination) return;

    // Dropped in same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    // Moving between columns
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndColumn = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    setColumns({
      ...columns,
      [newStartColumn.id]: newStartColumn,
      [newEndColumn.id]: newEndColumn,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);

          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
