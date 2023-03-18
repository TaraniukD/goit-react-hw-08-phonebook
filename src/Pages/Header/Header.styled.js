import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
display: flex;
align-items: center;
text-align: center; 
margin: 20px 0px;
gap: 15px;
text-decoration: none;
`


export const LinkP = styled(NavLink)`
font-size: 18px;
margin: 0;
text-align: center; 
text-decoration: none;
color: #154c79;
&:hover, 
 :focus {
    color: #e28743;
};

&.active {
    color: #e28743;
}
`
