import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { v4 as uuid } from 'uuid';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
  }
`;

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
    tasks.filter((task) => task.status === TASK_STATUS.PENDING);

  const getCompletedTasks = () =>
    tasks.filter((task) => task.status === TASK_STATUS.COMPLETED);

  return (
    <>
      <GlobalStyle />
      <Form
        onButtonClick={handleAddTaskButton}
        onFormChange={handleInputChange}
      />
      <TaskList
        title="Pending tasks"
        tasks={getPendingTasks()}
        onCheckboxClick={handleTaskChecked}
        isPendingList
      />
      <TaskList
        title="Completed tasks"
        tasks={getCompletedTasks()}
        onCheckboxClick={handleTaskChecked}
      />
    </>
  );
};

export default App;
