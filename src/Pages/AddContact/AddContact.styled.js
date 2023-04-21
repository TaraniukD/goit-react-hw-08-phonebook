import styled from "styled-components";

export const Div = styled.div`
width: 280px;
margin: 30px auto;
color: #010101;

 @media screen and (min-width: 480px) and (max-width: 719px){
width: 360px;
 }

 @media screen and (min-width: 720px) {
width: 600px;
 }
`

export const H1 = styled.h1`
text-align: center; 
margin: 20px 0px;
font-size: 30px;
@media screen and (min-width: 480px) {
font-size: 40px;
 }
`

export const H2 = styled.h2`
text-align: center; 
margin: 20px 0px;
font-size: 30px;

@media screen and (min-width: 480px) {
font-size: 40px;
 }
`
export const P = styled.p`
text-align: center; 
margin: 30px 0px;
`