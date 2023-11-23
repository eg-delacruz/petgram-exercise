import styled, { css } from 'styled-components';
import { fadeIn } from '@styles/Animation';

type ButtonProps = {
  liked?: boolean;
  hover?: boolean;
};
export const Button = styled.button<ButtonProps>`
  padding-top: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: transparent;
  border: 0;
  margin-bottom: 24px;
  cursor: pointer;
  & svg {
    color: #d1d1d1;
    ${(props) =>
      props.liked &&
      css`
        color: red;
        ${fadeIn({ time: '0.5s' })}
      `};

    ${({ hover, liked }) =>
      hover &&
      !liked &&
      css`
        color: #a88960;
      `}
  }
`;
