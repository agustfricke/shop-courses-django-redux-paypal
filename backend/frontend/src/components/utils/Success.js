import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Alert from 'react-bootstrap/Alert';

export default function Success ({ children }) {

    toast.success(children, {
      duration: 15000,
        style: {
          border: '2px solid #713200',
          padding: '20px',
          color: '#000000',
        },
        
      });
  return (
    <Toaster
    position="top-right"
/>
  )
}