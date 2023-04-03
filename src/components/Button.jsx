import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient 
    font-poppins text-[18px] 
    text-primary outline-none rounded-[10px] ${styles} button`}>
      Get Started
    </button>
  )
}

export default Button