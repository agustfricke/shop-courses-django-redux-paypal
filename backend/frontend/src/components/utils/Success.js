import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export default function Error ({ children }) {

    toast.success(children, {
        style: {
          border: '2px solid #713200',
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