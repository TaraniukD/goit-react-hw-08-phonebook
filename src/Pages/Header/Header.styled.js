import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
display: blok;
text-align: center; 
max-width: 110px;
margin: 10px 3px;
text-decoration: none;

@media screen and (min-width: 720px) {
display: flex;
align-items: center;
text-align: center; 
max-width: 100%;
margin: 20px 0px;
gap: 15px;
text-decoration: none;
 }
`;

export const Span = styled.span`
font-size: 18px;
color: #063970;
@media screen and (min-width: 480px) {
font-size: 20px;
 }
`


export const LinkP = styled(NavLink)`
display: block;
font-size: 16px;
margin: 8px 3px;
text-align: center; 
text-decoration: none;
color: #063970;
&:hover, 
 :focus {
    color: #cce7e8;
};

&.active {
    color: #cce7e8;
}

@media screen and (min-width: 480px) {
font-size: 20px;
 }
`
