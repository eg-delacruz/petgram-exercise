//Styles
import {
  Error,
  SkeletonPhoto,
  SkeletonHeart,
  SkeletonLikesContainer,
  SkeletonLikesCount,
} from './Styles';

//Components
import PhotoCard from '@components/PhotoCard/PhotoCard';
import { useQuery } from '@apollo/client';

//HoC (High order components)
import { GET_PHOTOS } from '@hoc/withPhotos';

//Types
//Local types
type Props = {
  categoryId?: string;
};
type Photo = {
  id: string;
  likes: number;
  src: string;
};

const ListOfPhotoCards = ({ categoryId }: Props) => {
  const response = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  const { data, loading, error } = response;

  if (loading)
    return (
      <ul>
        <div>
          <SkeletonPhoto />
          <SkeletonLikesContainer>
            <SkeletonHeart />
            <SkeletonLikesCount />
          </SkeletonLikesContainer>
        </div>
        <div>
          <SkeletonPhoto />
          <SkeletonLikesContainer>
            <SkeletonHeart />
            <SkeletonLikesCount />
          </SkeletonLikesContainer>
        </div>
        <div>
          <SkeletonPhoto />
          <SkeletonLikesContainer>
            <SkeletonHeart />
            <SkeletonLikesCount />
          </SkeletonLikesContainer>
        </div>
      </ul>
    );

  if (error)
    return (
      <div>
        <Error>Hubo un error al cargar las imágenes. Inténtalo más tarde</Error>
      </div>
    );

  const { photos } = data;

  return (
    <ul>
      {photos.map((photo: Photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
