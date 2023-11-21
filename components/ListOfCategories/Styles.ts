import styled, { css } from 'styled-components';
import { fadeIn, skeletonAnimation } from '@styles/Animation';

interface ListProps {
  fixed?: boolean;
}

export const List = styled.ul<ListProps>`
  display: flex;
  overflow: scroll;
  width: 100%;
  /* In case we get the "fixed" prop */
  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn({ time: '0.5s' })}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
        &:: -webkit-scrollbar {
          display: none;
        }
      }
    `}
  &::-webkit-scrollbar {
    color: black;
    background-color: gray;
    height: 10px;
    width: 0;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #21c08b;
    border-radius: 8px;
  }
`;

export const ListItem = styled.li`
  padding: 0 8px;
`;

export const SkeletonCategory = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #eee;
  margin: 0 auto;
  ${skeletonAnimation()}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  margin: 0 auto 10px auto;
  padding: 10px;
`;
