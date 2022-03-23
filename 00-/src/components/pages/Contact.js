import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {

  
  return (
    <div>
      <form className="form">
        <input
       
          name="email"
     
          type="email"
          placeholder="email"
        />
        <button type="button" >Submit</button>
      </form>
    
    </div>
  );
};
