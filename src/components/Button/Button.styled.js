import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 5px 20px;

  border-radius: 2px;
  background-color: #065ba2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  && {
    :hover {
      background-color: #00d6ff;
      scale: 1.2;
    }
    :focus {
      background-color: #00d6ff;
    }
  }
`;
