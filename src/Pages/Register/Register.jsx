// import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";


import { Form, H2, Div, Label, Input, Button } from "./Register.styled"

export const RegisterForm = () => {
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleChange = ({ target: {name, value }}) => {
    //     console.log(name.value)
       
    //     setName(name.value);
    //     setEmail(name.value);
    //     setPassword(name.value);

    // }
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const password = form.password.value;
        dispatch(authOperations.register({ name: form.name.value, email: form.email.value, password: form.password.value}));

       form.reset();
    }

     return  (
        <Form onSubmit={handleSubmit}>
            <H2>Registration</H2>
            <Div>
            <Label htmlFor="name">Enter your name:</Label>
            <Input 
            type="text"
            name="name"
            // value={name}
            placeholder="Name"
            // onChange={handleChange}
            />
            </Div>
            
            <Div>
            <Label htmlFor="email">Enter your email:</Label>
            <Input 
            type="email" 
            name='email'
            // value={email}
            // pattern=".+@\/" 
            size="30" 
            placeholder="email" 
            required
            // onChange={handleChange}
            /> 
            </Div> 
            
            <Div>
            <Label htmlFor="password">Enter your password: </Label>
            <Input 
            type="password" 
            name="password"
            // value={password}
            minLength={6}
            placeholder="Password"
            required
            // onChange={handleChange}
            />
            </Div>
            
           
            <Button type="submit">Register</Button>
        </Form>
     )
}