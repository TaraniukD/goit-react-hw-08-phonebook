import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";


import { Form, H2, Div, Label, Input, Button } from "./Login.styled"

const initialValues = { email: "", password: "" };

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = ({ target: {name, value }}) => {
    setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn(formValues));
        setFormValues(initialValues);
    }

  
     return  (
        <Form onSubmit={handleSubmit}>
            <H2>Login</H2>            
            <Div>
            <Label htmlFor="email">Enter your email:</Label>
            <Input 
            type="text"
            name="email" 
            id="email"
            value={formValues.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            size="30" 
            placeholder="email" 
            required
            onChange={handleChange}
            /> 
            </Div> 
            
            <Div>
            <Label htmlFor="password">Enter your password: </Label>
            <Input 
            type="password" 
            name="password"
            id="pass" 
            value={formValues.password}
            minLength={6}
            placeholder="Password"
            required
            onChange={handleChange}
            />
            </Div>
            
            <Button type="submit">Login</Button>
        </Form>
     )
}