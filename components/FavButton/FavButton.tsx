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
};

const FavButton = ({ likes, id }: Props) => {
  const [storedData, setLocalStorage] = useLocalStorage(id, {
    liked: false,
    likes: likes,
  });

  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (storedData.liked) {
      setLocalStorage({ liked: false, likes: storedData.likes - 1 });
    } else {
      setLocalStorage({ liked: true, likes: storedData.likes + 1 });
    }
  };

  const Icon = storedData.liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button
      liked={storedData.liked ? true : undefined}
      hover={hover ? hover : undefined}
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
