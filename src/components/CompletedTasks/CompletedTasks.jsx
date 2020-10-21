import React from 'react';

const CompletedTasks = ({ tasks }) => {
  return (
    <div>
      <h1>Completed tasks</h1>
      {tasks.map(({ name, id }) => (
        <div key={id}>
          <div
            style={{ height: '30px', width: '30px', border: '2px solid black' }}
          ></div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
