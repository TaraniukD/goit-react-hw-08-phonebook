import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import { FormStyled, H2, Div, Label, Input, Button } from "./Register.styled"

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialValues);
    
    const handleChange = ({ target: {name, value }}) => {
        setFormValues({...formValues, [name]: value})
        };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register(formValues));
        setFormValues(initialValues);
        }
    
        console.log({formValues})

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
           type="password" 
           name="password"
           id="password" 
           value={formValues.password}
           minLength={6}
           placeholder="Password"
           required
           onChange={handleChange}
            />
            </Div>
            
            <Button type="submit">Register</Button>
            </FormStyled>
     )
}