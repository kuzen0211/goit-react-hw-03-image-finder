import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 15px;
  background-color: #065ba2;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  color: black;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.4;
  cursor: pointer;
  outline: none;

  && {
    :opacity {
      opacity: 1;
    }
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  && {
    ::placeholder {
      font: inherit;
      font-size: 18px;
      color: #8c8c8c;
      padding-left: 10px;
    }
  }
`;
