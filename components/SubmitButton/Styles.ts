import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(
    to right,
    #5a1c80,
    #b666a5,
    #de2a75,
    #ea538d,
    #f7a68a,
    #ffb200
  );
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
