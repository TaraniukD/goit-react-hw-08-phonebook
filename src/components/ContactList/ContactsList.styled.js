import styled from "styled-components";

export const ListUl = styled.ul`
width: 400px;
margin: 20px auto;
padding: 8px;
border: 1px solid gray;
border-radius: 8px;
padding: 20px;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 
`
export const ListLi = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 8px;
font-size: 22px;
`
export const NameP = styled.p`
margin: 0;
min-width: 170px;
`
export const ListP = styled.p`
margin: 0px;
`
export const IconButton = styled.button`
border: 1px solid #e28743;
border-radius: 5px;
color: #e28743;
cursor: pointer;
&:hover,
&:focus {
    background-color: #eab676;
    border: 1px solid #eab676;
  }
  &:active {
    background-color: #eab676;
    
  }
`

export const Button = styled.button`
padding: 3px 10px;
border: 1px solid #e28743;
border-radius: 5px;
cursor: pointer;
background-color: #e28743;
font-size: 15px;
&:hover,
&:focus {
    background-color: #eab676;
    border: 1px solid #eab676;
  };
 
`