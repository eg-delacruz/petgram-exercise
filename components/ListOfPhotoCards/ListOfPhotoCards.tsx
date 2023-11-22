//Styles
import { Error } from './Styles';

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
  liked: boolean;
  likes: number;
  src: string;
};

//TODO: Create a better loading animation
const ListOfPhotoCards = ({ categoryId }: Props) => {
  const response = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  const { data, loading, error } = response;

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <Error>Hubo un error al cargar las imágenes. Inténtalo más tarde</Error>
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
