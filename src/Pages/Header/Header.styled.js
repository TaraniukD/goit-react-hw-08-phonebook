import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
display: flex;
align-items: center;
text-align: center; 
margin: 20px 0px;
gap: 15px;
text-decoration: none;
`;

export const Span = styled.span`
font-size: 20px;
color: #063970;
`


export const LinkP = styled(NavLink)`
font-size: 20px;
margin: 0;
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
`
