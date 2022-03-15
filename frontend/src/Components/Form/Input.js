import React from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  width: ${({ width }) => width};
  height: 1.5rem;
  border-radius: 2px;
  border: 2px solid #3337de;
  padding-left: ${({ padding }) => (padding ? padding : "0.5rem")};
  &:focus {
    outline: 2px solid #7533de;
    border: 2px solid transparent;
  }
`;

const Input = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  width,
  padding,
  autoComplete,
}) => {
  return (
    <InputComponent
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      padding={padding}
      autoComplete={autoComplete}
    ></InputComponent>
  );
};

export default Input;
