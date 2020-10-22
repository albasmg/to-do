import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Main } from './AppStyles';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

const TASK_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
};

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTaskButton = () => {
    setTasks([
      ...tasks,
      { id: uuid(), name: task, status: TASK_STATUS.PENDING },
    ]);
    setTask('');
  };

  const handleInputChange = (ev) => setTask(ev.target.value);

  const handleTaskChecked = (taskId, isCompleted) => {
    const newTasks = tasks.map((task) => {
      const newStatus =
        taskId === task.id
          ? isCompleted
            ? TASK_STATUS.COMPLETED
            : TASK_STATUS.PENDING
          : task.status;
      return {
        ...task,
        status: newStatus,
      };
    });

    setTasks(newTasks);
  };

  const getPendingTasks = () =>
    tasks.filter(({ status }) => status === TASK_STATUS.PENDING);

  const getCompletedTasks = () =>
    tasks.filter(({ status }) => status === TASK_STATUS.COMPLETED);

  const handleClearButton = (taskId) =>
    setTasks(tasks.filter(({ id }) => id !== taskId));

  return (
    <>
      <Form
        onButtonClick={handleAddTaskButton}
        onFormChange={handleInputChange}
        value={task}
      />
      <Main>
        <TaskList
          title="Pending tasks"
          tasks={getPendingTasks()}
          onCheckboxClick={handleTaskChecked}
          onClearButtonClick={handleClearButton}
          isPendingList
        />
        <TaskList
          title="Completed tasks"
          tasks={getCompletedTasks()}
          onCheckboxClick={handleTaskChecked}
          onClearButtonClick={handleClearButton}
        />
      </Main>
    </>
  );
};

export default App;
