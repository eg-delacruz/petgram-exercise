import styled from 'styled-components';
import { fadeIn } from '@styles/Animation';

//Type created to avoid conflict when the Article component receives a ref
type ArticleProps = {
  ref?: any;
};

export const Article = styled.article<ArticleProps>`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  ${fadeIn({ time: '1s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
