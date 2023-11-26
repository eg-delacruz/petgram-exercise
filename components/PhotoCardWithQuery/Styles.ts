import styled from 'styled-components';
import { skeletonAnimation } from '@styles/Animation';

export const SkeletonPhoto = styled.div`
  height: 280px;
  width: 100%;
  ${skeletonAnimation()}
`;

export const SkeletonLikesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding-top: 8px;
  margin-bottom: 24px;
`;

export const SkeletonHeart = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  ${skeletonAnimation()}
`;

export const SkeletonLikesCount = styled.div`
  height: 20px;
  width: 50px;
  border-radius: 3px;
  ${skeletonAnimation()}
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
  margin: 32px auto;
  border: 3px dashed red;
  max-width: 400px;
  padding: 0 4px;
`;
