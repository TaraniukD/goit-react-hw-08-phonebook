import styled from "styled-components";

export const Div = styled.div`
display: flex;
align-items: center;
text-align: center; 
margin: 20px 0px;
gap: 15px;
`
export const LogoImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

export const P = styled.p`
font-size: 18px;
margin: 0;
text-align: center; 
`
export const Button = styled.button`
padding: 3px 10px;
border: 1px solid #76b5c5;
border-radius: 5px;
cursor: pointer;
background-color: #76b5c5;
font-size: 15px;
&:hover,
&:focus {
    background-color: #1e81b0;
    border: 1px solid #1e81b0;
  };
 `