import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #76b5c5;
margin: 0 auto;
padding: 10px 20px;
background-color: #e8f1f0;
border-radius: 8px;
`
export const Nav = styled(NavLink)`
display: flex;
align-items: center;
text-align: center; 
margin: 20px 0px;
gap: 15px;
text-decoration: none;
`

export const Div = styled.div`
display: flex;
align-items: center;
text-align: center; 
margin: 20px 0px;
gap: 15px;
`

export const H2 = styled.h2`
text-align: center; 
margin: 20px 0px;
`
export const LinkP = styled(Link)`
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
export const P = styled.p`
font-size: 18px;
margin: 0;
text-align: center; 
`