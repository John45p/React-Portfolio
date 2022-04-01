import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sendComplete, setSendComplete] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{setSendComplete(false)},3000)
  },[sendComplete])
  const handleChange = (event) => {
    setNameError(false)
    setEmailError(false)
    setMessageError(false)
    setToSend({
      ...toSend,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = () => {
    if(!toSend.name){setNameError(true)}
    if(!validateEmail(toSend?.email)){setEmailError(true)}
    if(!toSend.message){setMessageError(true)}
    if(toSend.name && 
      toSend?.email && validateEmail(toSend?.email) &&
      toSend.message
      ){
      setToSend({
        name: "",
        email: "",
        message: ""
      })
      document.querySelector('#formTextArea').value = '';
      document.querySelector('#formEmail').value = '';
      document.querySelector('#formName').value = '';
      setSendComplete(true)
    }
  }
  return (
    <div class="container" >
      <div >
      <div>
      <h1>Contact</h1>
      <div className="contact-form">
        <label class="name">
          Name: 
          {nameError && 
            <p className="error-message">
              Name cannot be empty  
            </p>}
          <input
            type='text'
            name='name'
            placeholder='name'
            id="formName"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label> <br></br>
        <label class="email">
          Email address: 
          { emailError && 
            <p className="error-message">
              Make sure it's an actual e-mail 
            </p>}
          <input
            type='text'
            name='email'
            placeholder='email'
            id="formEmail"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label class="message">
          Message:  
          {messageError && 
            <p className="error-message">
              message cannot be empty  
            </p>}
            <br></br>
          <textarea
            type='text'
            name='message'
            placeholder='message'
            rows="4" 
            cols="50"
            id="formTextArea"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>
        <br></br>
          <button class="lastbtn"
           type="submit"
            onClick={onSubmit}
          >
            Submit
          </button> 
      </div>
      </div>
      </div>
      {sendComplete && <h2 className="formSuccessfulMessage">Successfully sent Message!</h2>}
    </div>
  );
}
