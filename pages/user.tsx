import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../Context';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import SubmitButton from '@components/SubmitButton/SubmitButton';
import Layout from '@components/Layout/Layout';

const User = () => {
  const context = useContext(Context);
  const isAuth = context ? context.isAuth : null;
  const removeAuth = context ? context.removeAuth : null;

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth, router]);

  return (
    <SEO_Layout
      title='Perfil de usuario | Petgram'
      metaName='Petgram'
      metaDescription='Información del usuario'
    >
      <Layout>
        <h1>User</h1>
        <br />
        <br />
        <SubmitButton
          disabled={false}
          submitFunction={removeAuth ? removeAuth : () => null}
        >
          Cerrar sesión
        </SubmitButton>
      </Layout>
    </SEO_Layout>
  );
};

export default User;
