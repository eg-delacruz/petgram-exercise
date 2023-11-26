import { gql, useQuery } from '@apollo/client';

//Styles
import {
  SkeletonPhoto,
  SkeletonLikesContainer,
  SkeletonHeart,
  SkeletonLikesCount,
  Error,
} from './Styles';

//Components
import PhotoCard from '@components/PhotoCard/PhotoCard';

//Types
type Props = {
  detailId: string | undefined | string[];
};

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoCardWithQuery = ({ detailId }: Props) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: detailId,
    },
  });

  if (error)
    return (
      <Error>
        Hubo un error al obtener la información de la mascota. Inténtalo más
        tarde
      </Error>
    );
  if (loading)
    return (
      <>
        <SkeletonPhoto />
        <SkeletonLikesContainer>
          <SkeletonHeart />
          <SkeletonLikesCount />
        </SkeletonLikesContainer>
      </>
    );

  return <PhotoCard {...data.photo} />;
};

export default PhotoCardWithQuery;
