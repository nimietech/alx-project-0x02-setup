import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({title,shape}) => {
  return (
    <div>
        <h1>My button</h1>
        <button className={`${shape} bg-blue-500 text-white hover:bg-blue-600 transition p-4`}>
            {title}
        </button>
    </div>
  )
}

export default Button