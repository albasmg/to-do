import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const CompletedTasksContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(30)};
`;

export const Checkbox = styled.div`
  height: ${rem(20)};
  width: ${rem(20)};
  border: ${rem(1)} solid black;
`;

export const TaskName = styled.p`
  margin-left: rem(10);
`;
