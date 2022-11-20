import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export default function Error ({ children }) {

    toast.error(children, {
      duration: 15000,
        style: {
          padding: '20px',
          color: '#000000',
        },
        
      });
  return (
    <Toaster
    position="top-right"
    reverseOrder={false}
/>
  )
}