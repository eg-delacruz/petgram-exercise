import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Context } from '../../Context';

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
  const context = useContext(Context);
  const isAuth = context ? context.isAuth : null;

  const [storedData, setLocalStorage] = useLocalStorage(id, {
    liked: false,
    likes: likes,
    src: src,
    id: id,
  });

  const router = useRouter();
  //Store the ids of the liked photos in localStorage to retrieve them in the favs page
  const [storedPhotos, setStoredPhotos] = useLocalStorage('photos', []); // ['1', '2', '3']

  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (!isAuth) {
      router.push('/login');
      return;
    }
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
