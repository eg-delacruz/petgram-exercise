import styled from 'styled-components';

//Type created to avoid conflict when the Form component receives a disabled prop
type FormProps = {
  disabled?: any;
};

export const Form = styled.form<FormProps>`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;

export const Error = styled.span`
  font-size: 18px;
  color: red;
  font-weight: 500;
`;
