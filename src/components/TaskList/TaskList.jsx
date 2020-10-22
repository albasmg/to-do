import React from 'react';
import trash from '../../assets/icons/trash.png';
import {
  TasksContainer,
  Title,
  Decoration,
  TaskContainer,
  TaskNameContainer,
  Checkbox,
  Check,
  TaskName,
  TrashContainer,
  Trash,
} from './TaskListStyles';

const TaskList = ({
  tasks,
  title,
  onCheckboxClick,
  onClearButtonClick,
  isPendingList,
}) => {
  return (
    <TasksContainer>
      <Title>{title}</Title>
      <Decoration isCompleted={!isPendingList} />
      {tasks.map(({ name, id }) => (
        <TaskContainer isCompleted={!isPendingList} key={id}>
          <TaskNameContainer>
            <Checkbox
              isCompleted={!isPendingList}
              onClick={() => onCheckboxClick(id, isPendingList)}
            >
              <Check isCompleted={!isPendingList} />
            </Checkbox>
            <TaskName isCompleted={!isPendingList}>{name}</TaskName>
          </TaskNameContainer>
          <TrashContainer onClick={() => onClearButtonClick(id)}>
            <Trash src={trash} alt="Delete" />
          </TrashContainer>
        </TaskContainer>
      ))}
    </TasksContainer>
  );
};

TaskList.defaultProps = {
  isPendingList: false,
};

export default TaskList;
