import React from 'react';
import {
  TasksContainer,
  Title,
  TaskContainer,
  Checkbox,
  TaskName,
} from './TaskListStyles';

const TaskList = ({ tasks, title, onCheckboxClick, isPendingList }) => {
  return (
    <TasksContainer>
      <Title>{title}</Title>
      {tasks.map(({ name, id }) => (
        <TaskContainer key={id}>
          <Checkbox onClick={() => onCheckboxClick(id, isPendingList)} />
          <TaskName>{name}</TaskName>
        </TaskContainer>
      ))}
    </TasksContainer>
  );
};

TaskList.defaultProps = {
  isPendingList: false,
};

export default TaskList;
