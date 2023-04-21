import styled from "styled-components";

export const Div = styled.div`
margin: 0 auto;
min-width: 200px;
border: 1px solid gray;
border-radius: 8px;
text-align: center;
padding: 5px 20px 10px 20px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5);  

  @media screen and (min-width: 480px) and (max-width: 719px){
width: 320px;
padding: 5px 25px 10px 25px;

 @media screen and (min-width: 720px) {
width: 520px;
padding: 5px 30px 10px 30px;
 }
`;

export const Label = styled.label`
font-size: 18px;

 @media screen and (min-width: 720px) {
font-size: 25px;
 }
`;

export const FormInput = styled.input`
display: block;
min-width: 180px;
margin: 10px auto 5px auto;
padding: 5px;
border-radius: 5px;
font-size: 16px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
&:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  } 
  
     @media screen and (min-width: 480px) {
min-width: 260px;
 }

    @media screen and (min-width: 480px) and (max-width: 719px){
width: 260px;
padding: 7px;
font-size: 20px;

 }

 @media screen and (min-width: 720px) {
width: 380px;
padding: 7px;
font-size: 22px;
 }
 `