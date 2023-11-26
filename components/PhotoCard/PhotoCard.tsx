import Link from 'next/link';

//Styles
import { Article, ImgWrapper, Img } from './Styles';

//Components
import FavButton from '@components/FavButton/FavButton';

//Hooks
import useNearScreen from '@hooks/useNearScreen';

//Types
type Props = {
  id: string;
  likes: number;
  src: string;
};

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }: Props) => {
  const [show, element] = useNearScreen();

  return (
    <div>
      <Article ref={element}>
        {show && (
          <>
            <Link href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            {typeof likes === 'number' && likes >= 0 && likes !== undefined && (
              <FavButton likes={likes} id={id} src={src} />
            )}
          </>
        )}
      </Article>
    </div>
  );
};

export default PhotoCard;
