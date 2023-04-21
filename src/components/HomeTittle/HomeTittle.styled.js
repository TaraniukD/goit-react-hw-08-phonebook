import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
text-align: center;
max-width: 800px;
border: 1px solid #76b5c5;
margin: 0 auto;
padding: 10px 20px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 
border-radius: 8px;
`;

export const P = styled.p `
font-size: 21px;
@media screen and (min-width: 480px) {
font-size: 25px;
 }
`
export const Link = styled(NavLink)`
color: #063970;
&:hover, 
 :focus {
    color: #cce7e8;
};
`