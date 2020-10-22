import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const TasksContainer = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.darkColor};
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(20)} ${rem(20)} 0 ${rem(20)};
  padding: ${rem(8)};
  border-radius: ${rem(8)};
  background-color: ${(props) => props.theme.colors.secondaryColor};
`;

export const Checkbox = styled.div`
  height: ${rem(20)};
  width: ${rem(20)};
  border: ${rem(1)} solid black;
  margin-right: ${rem(8)};
  border-radius: ${rem(8)};
`;

export const TaskName = styled.p`
  margin-left: ${(props) => props.theme.colors.darkColor};
`;
