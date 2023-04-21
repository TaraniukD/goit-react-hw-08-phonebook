import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
margin: 0 auto;
min-width: 200px;
border: 1px solid gray;
border-radius: 8px;
padding: 20px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 

  @media screen and (min-width: 480px) and (max-width: 719px){
min-width: 320px;
padding: 25px 25px;
 }

 @media screen and (min-width: 720px) {
min-width: 520px;
padding: 30px;
 }
`;

export const Label = styled.label`
margin-left: 20px;
font-size: 20px;

@media screen and (min-width: 480px) and (max-width: 719px) {
margin-left: 30px;
font-size: 22px;
 }

  @media screen and (min-width: 720px) {
margin-left: 65px;
width: 380px;
padding: 7px;
font-size: 22px;
 }
`;

export const Fieldtyled = styled(Field)`
display: block;
width: 200px;
margin: 10px auto;
margin-bottom: 10px;
padding: 5px;
border-radius: 5px;
font-size: 16px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
&:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  } 

   @media screen and (min-width: 480px) and (max-width: 719px){
width: 260px;
padding: 6px;
font-size: 20px;
 }

 @media screen and (min-width: 720px) {
width: 380px;
padding: 7px;
font-size: 22px;
 }
`;

export const Button = styled.button`
display: block;
width: 100px;
padding: 6px;
margin: 0 auto;
background-color: rgba(177, 163, 196, 0.5);
border: 1px solid #abdbe3;
border-radius: 5px;
font-size: 15px;
cursor: pointer;
color: #154c79;
&:hover,
 :focus {
    background-color: rgba(102, 44, 182, 0.5);
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: rgb(237, 234, 241);
}

   @media screen and (min-width: 480px) {
width: 140px;
padding: 9px;
font-size: 18px;
 }
`;

export const ErrMessage = styled(ErrorMessage)`
font-size: 18px;
color: red;
`;