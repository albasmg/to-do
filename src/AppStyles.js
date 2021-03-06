import styled from 'styled-components';
import { rem } from './assets/stylesheets/functions';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: ${rem(30)} auto;

  @media all and (max-width: 500px) {
    flex-direction: column;
    width: 90%;
  }
`;
