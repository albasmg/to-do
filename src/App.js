import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Form from './components/Form/Form';
import PendingTasks from './components/PendingTasks/PendingTasks';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTaskButton = () => {
    setTasks([...tasks, { id: uuid(), name: task, status: 'pending' }]);
  };

  const handleInputChange = (ev) => setTask(ev.target.value);

  const handleCompleteTask = (taskId) => {
    const newTasks = tasks.map((task) => ({
      ...task,
      status: taskId === task.id ? 'completed' : task.status,
    }));

    setTasks(newTasks);
  };

  const getPendingTasks = () =>
    tasks.filter((task) => task.status === 'pending');

  const getCompletedTasks = () =>
    tasks.filter((task) => task.status === 'completed');

  return (
    <>
      <Form
        onButtonClick={handleAddTaskButton}
        onFormChange={handleInputChange}
      />
      {tasks.length > 0 && (
        <>
          <PendingTasks
            tasks={getPendingTasks()}
            onCheckboxClick={handleCompleteTask}
          />
          <CompletedTasks tasks={getCompletedTasks()} />
        </>
      )}
    </>
  );
};

export default App;
