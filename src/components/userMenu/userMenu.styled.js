import styled from "styled-components";

export const Div = styled.div`
text-align: center; 
margin: 10px 0px;
@media screen and (min-width: 480px) {
display: flex;
align-items: center;
margin: 20px 0px;
gap: 15px;
 }
`
export const LogoImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

export const P = styled.p`
font-size: 16px;
margin: 0;
text-align: center; 
@media screen and (min-width: 480px) {
font-size: 18px;
 }
`
export const Button = styled.button`
padding: 5px 5px;
border: 1px solid #76b5c5;
border-radius: 50%;
cursor: pointer;
background-color: rgba(177, 163, 196, 0.5);
font-size: 16px;
margin-top: 8px;
&:hover,
&:focus {
  background-color: rgba(102, 44, 182, 0.5);
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: rgb(237, 234, 241);
  };

  @media screen and (min-width: 480px) {
padding: 5px 10px;
border-radius: 5px;
font-size: 18px;
 }
 `