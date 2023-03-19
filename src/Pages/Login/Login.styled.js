import  styled from "styled-components";

export const Form = styled.form`
position: relative;
max-width: 400px;
margin: 20px auto;
padding: 30px;
border: 1px solid #76b5c5;
border-radius: 5px;
text-align: center;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 
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
width: 300px;
padding: 7px 10px;
margin-top: 10px;
border-radius: 5px;
border: 1px solid #76b5c5;
font-size: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

&:focus {
    background-color: #eeeee4;
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
};
&:focus {
    background-color: #eeeee4;
};
&::placeholder {
    color: #154c79;
    font-size: 18px;
}
`
export const Button = styled.button`
width: 140px;
padding: 9px;
text-align: center; 
margin: 30px 0px;
background-color: #abdbe3;
border: 1px solid #abdbe3;
border-radius: 5px;
font-size: 18px;
cursor: pointer;
color: #154c79;
&:hover,
 :focus {
    background-color:#76b5c5;
    border: 1px solid #76b5c5;
}
`
export const PasswordDiv = styled.div`
cursor: pointer;
position: absolute;
right: 85px;
bottom: 158px;
color: #063970;
 `