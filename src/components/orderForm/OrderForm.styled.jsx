import styled from "@emotion/styled";
import { Form as FormikForm } from 'formik';
import { Field } from "formik";

export const Form = styled(FormikForm)`
width: 300px;
height: 447px;
padding: 30px;
margin-right:auto;
margin-left:auto;
margin-top:30px;
background-image: linear-gradient(to bottom, #008080
0%, #008080 69%, #E0FFFF 100%);
 box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
 border-radius: 21px;
display: flex;
flex-direction: column;
gap: 10px;`

export const FormField = styled.label`
display: flex;
flex-direction: column;
color: #fff;
font-size:24px;
font-weight: 600;`
export const Input = styled(Field)`
margin-top:10px;
padding-left: 15px;
border-radius: 3px;
border: none;
height: 50px;`
export const AddBtn = styled.button`
font-size:18px;
font-weight: 500;
margin-top: 10px;
padding:8px;
weight: 150px;
color: #fff;
opacity: 0.7;
border: none;
border-radius:3px;
background-color: #008080;
&:hover {
    opacity: 1;
}`