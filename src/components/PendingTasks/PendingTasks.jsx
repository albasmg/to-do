import React from 'react';

const PendingTasks = ({ tasks, onCheckboxClick }) => {
  return (
    <div>
      <h1>Pending tasks</h1>
      {tasks.map(({ id, name }) => (
        <div key={id}>
          <div
            onClick={(ev) => onCheckboxClick(id)}
            style={{ height: '30px', width: '30px', border: '2px solid black' }}
          ></div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PendingTasks;