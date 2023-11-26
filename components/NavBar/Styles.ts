import styled, { css } from 'styled-components';
import NextLink from 'next/link';
import { fadeIn } from '@styles/Animation';

type LinkProps = {
  $active?: boolean;
};

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(NextLink)<LinkProps>`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  color: ${(props) => (props.$active ? '#000' : '#888')};
  ${(props) =>
    props.$active &&
    css`
      &:after {
        ${fadeIn({ time: '0.5s' })};
        content: '·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 20px;
      }
    `};
`;
