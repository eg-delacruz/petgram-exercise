import styled from 'styled-components';
import { fadeIn } from '@styles/Animation';

export const Description = styled.p`
  margin: 16px 0;
`;

export const FavsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const FavImgContainer = styled.div`
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const FavImg = styled.img`
  ${fadeIn({ time: '1s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 5px;
`;

export const NoFavsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 32px;

  & h3 {
    margin-bottom: 24px;
  }
  & p {
    margin-top: 16px;
  }
`;
