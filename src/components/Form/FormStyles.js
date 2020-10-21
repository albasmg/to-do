import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: #beb2ff;
  font-size: 28px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const FormInput = styled.input`
  height: 40px;
  width: 200px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
`;

export const FormButton = styled.button`
  height: 40px;
  width: 60px;
  border: none;
  background-color: lightgrey;
  margin-left: 8px;
`;
