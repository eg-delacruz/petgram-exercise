import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

//Styles
import { Button } from './Styles';

//Types
type Props = {
  likes: number;
};

const FavButton = ({ likes }: Props) => {
  const [hover, setHover] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleClick = () => {
    if (liked) {
      setCurrentLikes(currentLikes - 1);
    } else {
      setCurrentLikes(currentLikes + 1);
    }
    setLiked(!liked);
  };

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button
      liked={liked}
      hover={hover}
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      onClick={handleClick}
    >
      <Icon size='32px' />
      {currentLikes} <strong>likes</strong>
    </Button>
  );
};

export default FavButton;
