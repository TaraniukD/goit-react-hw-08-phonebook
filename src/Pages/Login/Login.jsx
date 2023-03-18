import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";


import { Form, H2, Div, Label, Input, Button } from "./Login.styled"

export const LoginForm = () => {
    const dispatch = useDispatch();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleChange = ({ target: {name, value }}) => {

    // }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(authOperations.logIn({ email, password}));
    //     setEmail('');
    //     setPassword('');
    // }

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        // const email = form.email.value;
        // const password = form.password.value;

        dispatch(authOperations.register({ email: form.email.value, password: form.password.value}));

       form.reset();
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
            pattern=".+@\" 
            size="30" 
            placeholder="email" 
            required
            /> 
            </Div> 
            
            <Div>
            <Label htmlFor="password">Enter your password: </Label>
            <Input 
            type="password" 
            name="password"
            id="pass" 
            minLength={6}
            placeholder="Password"
            required
            />
            </Div>
            
            <Button type="submit">Login</Button>
        </Form>
     )
}