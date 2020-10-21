import React from 'react';
import { Title, FormContainer, FormInput, FormButton } from './FormStyles';

const Form = ({ onButtonClick, onFormChange }) => {
  return (
    <>
      <Title>To do</Title>
      <FormContainer>
        <FormInput type="text" onChange={(ev) => onFormChange(ev)}></FormInput>
        <FormButton onClick={() => onButtonClick()}>Add</FormButton>
      </FormContainer>
    </>
  );
};

export default Form;
