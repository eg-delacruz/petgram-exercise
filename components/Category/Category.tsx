//Styles
import { Link, Image } from './Styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

//Types
//Local types
type Props = {
  cover?: string;
  path?: string;
  emoji?: string;
};

//TODO: Use a nicer loaging icon for the emoji (or maybe a skeleton circle)
//Category represented in a circle with an emage and an emoji
const Category = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  emoji = '?',
}: Props) => {
  return (
    <Link href={path}>
      <Image src={cover} alt='cover' />
      {emoji}
    </Link>
  );
};

export default Category;
