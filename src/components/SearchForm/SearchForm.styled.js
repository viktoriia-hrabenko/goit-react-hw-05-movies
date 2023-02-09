import styled from 'styled-components';

export const Input = styled.input`
margin: 20px 0px 0px 380px;
padding: 6px 12px;
  width: 450px;
  border-radius:6px 0px 0px 6px;
  border: 2px solid;
  border-right:none;
  outline: none;
  
  font-size: 16px;
  &:hover,
  &:focus {
    border-color:#966844;
  }
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius:0px 6px 6px 0px;
  border: 2px solid;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  &:hover,
  &:focus {
    background-color:#966844;
  }
`;