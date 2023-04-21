import styled from "styled-components";

export const ListUl = styled.ul`
min-width: 200px;
margin: 10px auto;
padding: 8px;
border: 1px solid gray;
border-radius: 8px;
padding: 20px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 

  @media screen and (min-width: 480px) and (max-width: 719px){
min-width: 320px;
margin: 15px auto;
 }

 @media screen and (min-width: 720px) {
min-width: 520px;
max-width: 600px;
margin: 20px auto;
 }
`
export const ListLi = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 8px;
font-size: 22px;
padding: 3px 15px;
border: 1px solid #abdbe3;
border-radius: 5px;
`
export const NameP = styled.span`
margin: 0;
min-width: 75px;
font-size: 15px;

  @media screen and (min-width: 480px) and (max-width: 719px){
min-width: 85px;
font-size: 18px;
  }

 @media screen and (min-width: 720px) {
min-width: 170px;
font-size: 20px;
 }
`

export const ListP = styled.p`
margin: 0px;
font-size: 15px;

  @media screen and (min-width: 480px) and (max-width: 719px) {
font-size: 18px;
  }

 @media screen and (min-width: 720px) {
font-size: 20px;
 }
`

export const Button = styled.button`
padding: 3px 10px;
border: 1px solid #abdbe3;
border-radius: 5px;
cursor: pointer;
background-color: rgba(177, 163, 196, 0.5);
font-size: 15px;
&:hover,
&:focus {
  background-color: rgba(102, 44, 182, 0.5);
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: rgb(237, 234, 241);
  }
`