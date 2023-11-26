//Styles
import { Button } from './Styles';

//Types
type Props = {
  disabled: boolean;
  children: string;
};

const SubmitButton = ({ disabled, children }: Props) => {
  return (
    <Button type='submit' disabled={disabled}>
      {children}
    </Button>
  );
};

export default SubmitButton;
