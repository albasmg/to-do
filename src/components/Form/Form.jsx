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
      <Title>
        What do you have to do today?{' '}
        <span role="img" aria-label="stars">
          ✨
        </span>
      </Title>
      <FormContainer>
        <FormInput
          type="text"
          placeholder="Type your new task here!"
          onChange={(ev) => onFormChange(ev)}
          value={value}
        />
        <FormButton disabled={!value} onClick={() => onButtonClick()}>
          Add task
        </FormButton>
      </FormContainer>
    </Header>
  );
};

export default Form;
