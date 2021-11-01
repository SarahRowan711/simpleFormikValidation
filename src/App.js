import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values =>{
      let errors = {};
      if(!values.email) {
        errors.email = 'Field required'
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';  //assignment required this error, even though the field is email, not username
      }    
      if(!values.password) errors.password = 'Field required'
      return errors;
    }
  });

  //currently this works whenever Submit is clicked... it should only popup when Submit is clicked after passing the validations, but I can't figure that out
  function handleSubmit(values) {
   alert('Login Successful');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;