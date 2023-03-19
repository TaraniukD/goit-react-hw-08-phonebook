import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
margin: 0 auto;
width: 400px;
border: 1px solid gray;
border-radius: 8px;
padding: 30px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 
`;

export const Label = styled.label`
margin-left: 40px;
font-size: 22px;
`;

export const Fieldtyled = styled(Field)`
display: block;
min-width: 320px;
margin: 10px auto;
margin-bottom: 10px;
padding: 7px;
border-radius: 5px;
font-size: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
&:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  } 
`;

export const Button = styled.button`
width: 140px;
padding: 9px;
margin-top: 30px;
margin-left: 125px;
background-color: #abdbe3;
border: 1px solid #abdbe3;
border-radius: 5px;
font-size: 18px;
cursor: pointer;
color: #154c79;
&:hover,
 :focus {
    background-color:#76b5c5;
    border: 1px solid #76b5c5;
}
`;

export const ErrMessage = styled(ErrorMessage)`
font-size: 18px;
color: red;
`;