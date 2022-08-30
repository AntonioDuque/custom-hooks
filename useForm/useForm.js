import React from 'react'
import { useState } from 'react';

export const useForm = (initialForm = {}) => {
 
    const [formData, setFormData] = useState( initialForm );


      function handleChange(event) {
        const { name, type, value } = event.target;
    
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: value,
          };
        });
      }

      function handleReset(){
        setFormData(prevFormData => {
            return initialForm
        })
      }


    return{
        ...formData,
        formData,
        handleChange,
        handleReset
        
    }

}
