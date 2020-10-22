import React from 'react';
import {
  TasksContainer,
  Title,
  Decoration,
  TaskContainer,
  Checkbox,
  TaskName,
} from './TaskListStyles';

const TaskList = ({ tasks, title, onCheckboxClick, isPendingList }) => {
  return (
    <TasksContainer>
      <Title>{title}</Title>
      <Decoration isCompleted={!isPendingList} />
      {tasks.map(({ name, id }) => (
        <TaskContainer isCompleted={!isPendingList} key={id}>
          <Checkbox
            isCompleted={!isPendingList}
            onClick={() => onCheckboxClick(id, isPendingList)}
          />
          <TaskName isCompleted={!isPendingList}>{name}</TaskName>
        </TaskContainer>
      ))}
    </TasksContainer>
  );
};

TaskList.defaultProps = {
  isPendingList: false,
};

export default TaskList;
