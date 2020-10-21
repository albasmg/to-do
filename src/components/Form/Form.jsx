import React from 'react';
import {
  Header,
  Title,
  FormContainer,
  FormInput,
  FormButton,
} from './FormStyles';

const Form = ({ onButtonClick, onFormChange, value }) => {
  return (
    <Header>
      <Title>To do</Title>
      <FormContainer>
        <FormInput
          type="text"
          onChange={(ev) => onFormChange(ev)}
          value={value}
        />
        <FormButton onClick={() => onButtonClick()}>Add</FormButton>
      </FormContainer>
    </Header>
  );
};

export default Form;
