// import { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";


import { FormStyled, H2, Div, Label, Input, Button, ErrMessage } from "./Register.styled"

const schema = yup.object().shape({
    name: yup.string().max(15).required(),
    email: yup.string().max(12).required(),
    password: yup.string().min(4).max(12).required(),
})

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (values, { resetForm }) => {
        dispatch(
            authOperations.register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );
    
        resetForm();
      };

     return  (
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit={handleSubmit} >
            <FormStyled autoComplete="off">
            <H2>Registration</H2>
            
            <Div>
            <Label htmlFor="name">Enter your name:</Label>
            <Input 
            type="text"
            name="name"
            placeholder="Name"
            />
            <ErrMessage name='name' component='div' /> 
            </Div>
            
            <Div>
            <Label htmlFor="email">Enter your email:</Label>
            <Input 
            type="email" 
            name='email'
            size="30" 
            placeholder="email" 
            required
            /> 
            <ErrMessage name='name' component='div' /> 
            </Div>
            
            <Div>
            <Label htmlFor="password">Enter your password:</Label>
            <Input 
            type="password" 
            name="password"
            placeholder="Password"
            required
            />
            <ErrMessage name='name' component='div' /> 
            </Div>
            
            <Button type="submit">Register</Button>
            </FormStyled>
        </Formik>
     )
}