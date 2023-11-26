import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useRouter } from 'next/router';

//Components
import SEO_Layout from '@components/SEO_Layout/SEO_Layout';
import Layout from '@components/Layout/Layout';
import UserForm from '@components/UserForm/UserForm';

//Containers
import RegisterMutation from '@containers/RegisterMutation';
import LoginMutation from '@containers/LoginMutation';

const Login = () => {
  const context = useContext(Context);
  const router = useRouter();

  const isAuth = context ? context.isAuth : null;

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  /////////////// Register Mutation ///////////////
  const register_Response = RegisterMutation();
  const {
    registerUser,
    data: registerData,
    loading: registerLoading,
    error: registerError,
  } = register_Response;

  /////////////// Login Mutation ///////////////
  const login_Response = LoginMutation();
  const {
    loginUser,
    data: loginData,
    loading: loginLoading,
    error: loginError,
  } = login_Response;

  /////////////// Manejando errores ///////////////
  const registerErrorMs =
    registerError && 'El usuario ya existe o hay algún problema.';
  const loginErrorMs =
    loginError && 'La contraseña no es correcta o el usuario no existe.';

  return (
    <SEO_Layout
      title='Login | Petgram'
      metaName='Login'
      metaDescription='Regístrate o haz loggin en Petgram con tu cuenta'
    >
      <Layout>
        {/* Register */}
        <UserForm
          error={registerErrorMs}
          disabled={registerLoading}
          title='Registrarse'
          onSubmit={registerUser}
        />
        {/* Login */}
        <UserForm
          error={loginErrorMs}
          disabled={loginLoading}
          title='Iniciar sesión'
          onSubmit={loginUser}
        />
      </Layout>
    </SEO_Layout>
  );
};

export default Login;
