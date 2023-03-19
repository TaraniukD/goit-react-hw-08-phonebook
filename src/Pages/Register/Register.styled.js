import  styled from "styled-components";

export const FormStyled = styled.form`
max-width: 360px;
margin: 20px auto;
padding: 10px;
border: 1px solid #76b5c5;
border-radius: 5px;
text-align: center;
background-color: #e8f1f0;
`
export const H2 = styled.h2`
display: block;
margin-bottom: 40px;
font-size: 30px;
color: #063970;
`

export const Div = styled.div`
display: block;
margin: 20px auto;
color: #010101;
`

export const Label = styled.label`
display: block; 
font-size: 18px;
`

export const Input = styled.input`
width: 200px;
padding: 5px 10px;
margin-top: 10px;
border-radius: 5px;
border: 1px solid #76b5c5;
font-size: 15px;
&:focus {
    background-color: #eeeee4;
};
&::placeholder {
    color: #154c79;
}
`
export const Button = styled.button`
padding: 8px 20px;
text-align: center; 
margin: 30px 0px;
background-color: #eab676;
border: 1px solid #e28743;
border-radius: 5px;
font-size: 15px;
cursor: pointer;
color: #154c79;
&:hover,
 :focus {
    background-color: #e28743;
    border: 1px solid #eab676;
}
`