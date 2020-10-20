import React, { useState } from 'react';
import Form from './components/Form/Form';
import PendingTasks from './components/PendingTasks/PendingTasks';

const App = () => {
  const [task, setTask] = useState('');
  const [pendingTasks, setPendingTasks] = useState([]);

  const handleButton = () => {
    setPendingTasks([...pendingTasks, task]);
  };

  const handleInputChange = (ev) => setTask(ev.target.value);

  return (
    <>
      <Form onButtonClick={handleButton} onFormChange={handleInputChange} />
      {pendingTasks.length > 0 && <PendingTasks tasks={pendingTasks} />}
    </>
  );
};

export default App;
