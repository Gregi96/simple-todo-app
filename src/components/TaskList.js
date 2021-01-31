import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.task.filter((item) => item.active);
  const inactive = props.task.filter((item) => !item.active);

  const activeTask = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      changeStatus={props.changeStatus}
    />
  ));

  const inactiveTask = inactive.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <div className="content">
      <section>
        <h2>Zadanie do zrobienia</h2>
        {activeTask.length > 0 ? activeTask : "brak zadań"}
      </section>
      <section>
        <h2>Zadania zrobione</h2>
        {inactiveTask.length > 0 ? inactiveTask : "brak zadań"}
      </section>
    </div>
  );
};

export default TaskList;
