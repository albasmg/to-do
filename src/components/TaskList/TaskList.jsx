import React from 'react';
import {
  CompletedTasksContainer,
  Title,
  TaskContainer,
  Checkbox,
  TaskName,
} from './TaskListStyles';

const TaskList = ({ tasks, title, onCheckboxClick, isPendingList }) => {
  return (
    <CompletedTasksContainer>
      <Title>{title}</Title>
      {tasks.map(({ name, id }) => (
        <TaskContainer key={id}>
          <Checkbox onClick={() => onCheckboxClick(id, isPendingList)} />
          <TaskName>{name}</TaskName>
        </TaskContainer>
      ))}
    </CompletedTasksContainer>
  );
};

TaskList.defaultProps = {
  isPendingList: false,
};

export default TaskList;
