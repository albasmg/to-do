import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const TasksContainer = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${rem(18)};
  text-align: center;
  color: ${(props) => props.theme.colors.darkColor};
`;

export const Decoration = styled.div`
  height: ${rem(10)};
  width: ${rem(130)};
  align-self: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  z-index: -999;
  transform: translate(0, -8px);

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      width: ${rem(150)}; ;
    `}
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(20)} ${rem(20)} 0 ${rem(20)};
  padding: ${rem(8)};
  border-radius: ${rem(8)};
  background-color: ${(props) => props.theme.colors.pendingColor};

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      background-color: ${(props) => props.theme.colors.completedColor};
    `}
`;

export const Checkbox = styled.div`
  height: ${rem(20)};
  width: ${rem(20)};
  border: ${rem(1)} solid ${(props) => props.theme.colors.darkColor};
  margin-right: ${rem(8)};
  border-radius: ${rem(8)};

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      background-color: ${(props) => props.theme.colors.darkColor};
    `}
`;

export const TaskName = styled.p`
  color: ${(props) => props.theme.colors.darkColor};
  font-weight: 300;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;
