import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const TasksContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 500px) {
    width: 100%;
    min-height: ${rem(200)};
    margin: auto;

    :last-child {
      margin-top: 20px;
    }
  }
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
  justify-content: space-between;
  width: 90%;
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

export const TaskNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(20)};
  width: ${rem(20)};
  border: ${rem(1)} solid ${(props) => props.theme.colors.darkColor};
  margin-right: ${rem(8)};
  border-radius: ${rem(8)};
  cursor: pointer;
`;

export const Check = styled.div`
  height: ${rem(16)};
  width: ${rem(16)};
  border-radius: ${rem(5)};
  background-color: ${rem(1)} solid
    ${(props) => props.theme.colors.pendingColor};

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      background-color: ${(props) => props.theme.colors.mediumColor};
    `}
`;

export const TaskName = styled.p`
  color: ${(props) => props.theme.colors.darkColor};
  font-weight: 300;
  max-width: ${rem(250)};
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
    `};
`;

export const TrashContainer = styled.div`
  height: ${rem(20)};
  width: ${rem(20)};
  cursor: pointer;
`;

export const Trash = styled.img`
  height: 100%;
  width: 100%;
`;
