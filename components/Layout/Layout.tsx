//Components
import { Logo } from '@components/Logo/Logo';
import { Header } from './Styles';
import NavBar from '@components/NavBar/NavBar';

//Types
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        {' '}
        <Logo />
      </Header>

      {children}
      <NavBar />
    </>
  );
};

export default Layout;
