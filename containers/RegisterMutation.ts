import { useMutation, gql } from '@apollo/client';
import { useContext } from 'react';
import { Context } from '../Context';

//Recibe email y password a través de función registerUser y devuelve un token en la data
const REGISTER_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const RegisterMutation = () => {
  const context = useContext(Context);
  const [mutation, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const registerUser = ({
    email,
    password,
  }: {
    email: string | number | readonly string[] | undefined;
    password: string | number | readonly string[] | undefined;
  }) => {
    const input = { email, password };
    const variables = { input };
    mutation({ variables }).then((data) => {
      //Signup es el token que devuelve el servidor
      const { signup } = data.data;
      if (context) {
        context.activateAuth(signup);
      }
    });
  };
  return { registerUser, data, loading, error };
};

export default RegisterMutation;
