import  styled from "styled-components";

export const Form = styled.form`
position: relative;
max-width: 400px;
margin: 20px auto;
padding: 20px 30px;
border: 1px solid #76b5c5;
border-radius: 5px;
text-align: center;
box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.5); 
`
export const H2 = styled.h2`
display: block;
margin-bottom: 40px;
font-size: 30px;
color: #042f66;
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
padding: 7px 10px;
margin-top: 10px;
border-radius: 5px;
border: 1px solid #76b5c5;
font-size: 16px;
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
    font-size: 15px;
}

@media screen and (min-width: 480px) {
width: 300px;
font-size: 20px;
&::placeholder {
    color: #154c79;
    font-size: 18px;
}
 }
`
export const Button = styled.button`
width: 140px;
padding: 9px;
text-align: center; 
margin: 30px 0px;
background-color: rgba(177, 163, 196, 0.5);
border: 1px solid #abdbe3;
border-radius: 5px;
font-size: 18px;
cursor: pointer;
color: #154c79;
&:hover,
 :focus {
    background-color: rgba(102, 44, 182, 0.5);
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: rgb(237, 234, 241);
}
`
export const PasswordDiv = styled.div`
cursor: pointer;
position: absolute;
right: 85px;
bottom: 150px;
color: #063970;
 `