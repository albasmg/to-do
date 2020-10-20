import React from 'react';

const Form = ({ onButtonClick, onFormChange }) => {
  return (
    <div>
      <input type="text" onChange={(ev) => onFormChange(ev)}></input>
      <button onClick={() => onButtonClick()}>Add</button>
    </div>
  );
};

export default Form;
