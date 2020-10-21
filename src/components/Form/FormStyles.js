import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const Header = styled.header`
  height: ${rem(200)};
`;

export const Title = styled.h1`
  font-size: ${rem(40)};
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryColor};
  margin-top: ${rem(30)};
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(20)};
  width: 100%;
`;

export const FormInput = styled.input`
  height: ${rem(40)};
  width: ${rem(200)};
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-bottom: 2px solid ${(props) => props.theme.colors.lightColor};
  outline: none;
`;

export const FormButton = styled.button`
  height: ${rem(40)};
  width: ${rem(60)};
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  margin-left: 8px;
`;
