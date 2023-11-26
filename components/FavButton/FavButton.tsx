import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

//Styles
import { Button } from './Styles';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Types
type Props = {
  likes: number;
  id: string;
  src: string;
};

const FavButton = ({ likes, id, src }: Props) => {
  const [storedData, setLocalStorage] = useLocalStorage(id, {
    liked: false,
    likes: likes,
    src: src,
    id: id,
  });
  //Store the ids of the liked photos in localStorage to retrieve them in the favs page
  const [storedPhotos, setStoredPhotos] = useLocalStorage('photos', []); // ['1', '2', '3']

  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (storedData.liked) {
      setLocalStorage({ liked: false, likes: storedData.likes - 1, src, id });
      setStoredPhotos(storedPhotos.filter((photo: string) => photo !== id));
    } else {
      setLocalStorage({ liked: true, likes: storedData.likes + 1, src, id });
      setStoredPhotos([...storedPhotos, id]);
    }
  };

  const Icon = storedData.liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button
      $liked={storedData.liked ? true : undefined}
      $hover={hover ? hover : undefined}
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      onClick={handleClick}
    >
      <Icon size='32px' />
      {storedData.likes} <strong>likes</strong>
    </Button>
  );
};

export default FavButton;
