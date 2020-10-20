import React from 'react';

const PendingTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <p>{task}</p>
      ))}
    </div>
  );
};

export default PendingTasks;
