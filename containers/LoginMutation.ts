import { useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Context } from '../Context';

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const LoginMutation = () => {
  const context = useContext(Context);
  const [mutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const loginUser = async ({
    email,
    password,
  }: {
    email: string | number | readonly string[] | undefined;
    password: string | number | readonly string[] | undefined;
  }) => {
    const input = { email, password };
    const variables = { input };

    try {
      const { data } = await mutation({ variables });
      // Login is the token returned by the server
      const { login } = data;
      if (context) {
        context.activateAuth(login);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return { loginUser, data, loading, error };
};

export default LoginMutation;
