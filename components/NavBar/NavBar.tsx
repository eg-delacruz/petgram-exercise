import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { useRouter } from 'next/router';

//Styles
import { Nav, Link } from './Styles';

const NavBar = () => {
  const router = useRouter();
  const { pathname } = router;

  const SIZE = '32px';
  return (
    <Nav>
      <Link $active={pathname === '/'} href={'/'}>
        <MdHome size={SIZE} />
      </Link>
      <Link $active={pathname === '/favs'} href='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link $active={pathname === '/user'} href='/user'>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};

export default NavBar;
