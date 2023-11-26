//Styles
import { Form, Input, Title, Error } from './Styles';

//Hooks
import { useInputValue } from '@hooks/useInputValue';

//Components
import SubmitButton from '@components/SubmitButton/SubmitButton';

//Types
type FormValues = {
  email: string | number | readonly string[] | undefined;
  password: string | number | readonly string[] | undefined;
};

type Props = {
  onSubmit: (values: FormValues) => void;
  title: string;
  error?: string;
  disabled: boolean;
};

const UserForm = ({ onSubmit, title, error, disabled }: Props) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='Email'
          onChange={email.onChange}
          value={email.value}
          type='email'
          required
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          onChange={password.onChange}
          value={password.value}
          type='password'
          required
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
