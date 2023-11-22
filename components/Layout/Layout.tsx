//Components
import { Logo } from '@components/Logo/Logo';
import { Header } from './Styles';

//Types
type Props = {
  children: React.ReactNode;
};

//TODO: NavBar
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        {' '}
        <Logo />
      </Header>

      {children}
      <div>NavBar</div>
    </>
  );
};

export default Layout;
