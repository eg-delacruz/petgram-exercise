//Styles
import { Button } from './Styles';

//Types
type Props = {
  disabled: boolean;
  children: string;
  submitFunction?: () => void | undefined | null;
};

const SubmitButton = ({ disabled, children, submitFunction }: Props) => {
  return (
    <Button
      type='submit'
      disabled={disabled}
      onClick={submitFunction ? submitFunction : undefined}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
