import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import {BsEyeSlash, BsEye} from 'react-icons/bs'

import { FormStyled, H2, Div, Label, Input, Button, PasswordDiv } from "./Register.styled"

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialValues);
    const [passwordShown, setPasswordShown] = useState(false);
    
    const handleChange = ({ target: {name, value }}) => {
        setFormValues({...formValues, [name]: value})
        };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register(formValues));
        setFormValues(initialValues);
        }
    
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        };

     return  (
            <FormStyled onSubmit={handleSubmit}>
            <H2>Registration</H2>
            <Div>
            <Label htmlFor="name">Enter your name:</Label>
            <Input 
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Name"
            onChange={handleChange}
            /> 
            </Div>
            
            <Div>
            <Label htmlFor="email">Enter your email:</Label>
            <Input 
            type="text"
            name="email" 
            id="email"
            value={formValues.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            placeholder="email" 
            required
            onChange={handleChange}
            /> 
            </Div>
            
            <Div>
            <Label htmlFor="password">Enter your password:</Label>
            <Input 
           type={passwordShown ? "text" : "password"}  
           name="password"
           id="pass" 
           value={formValues.password}
           minLength={6}
           placeholder="Password"
           required
           onChange={handleChange}
            />
            <PasswordDiv onClick={togglePassword} >
            { passwordShown ? <BsEye /> : < BsEyeSlash  />}
           </PasswordDiv>
            </Div>
            
            <Button type="submit">Sign Up</Button>
            </FormStyled>
     )
}