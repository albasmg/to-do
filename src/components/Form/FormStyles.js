import styled, { css } from 'styled-components';
import { rem } from '../../assets/stylesheets/functions';

export const Header = styled.header`
  height: auto;
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
  width: ${rem(200)};
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
  background-color: ${(props) => props.theme.colors.lightColor};
  outline: none;
  color: ${(props) => props.theme.colors.darkColor};

  ::placeholder {
    color: ${(props) => props.theme.colors.mediumColor};
    font-weight: 100;
  }
`;

export const FormButton = styled.button`
  height: ${rem(40)};
  width: ${rem(80)};
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.lightColor};
  background-color: ${(props) => props.theme.colors.primaryColor};
  margin-left: ${rem(8)};
  border-radius: ${rem(8)};
  outline: none;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${(props) => props.theme.colors.primaryColor};
      background-color: ${(props) => props.theme.colors.lightColor}; ;
    `}
`;
