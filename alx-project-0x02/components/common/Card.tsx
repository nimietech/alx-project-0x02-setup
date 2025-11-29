import React from 'react'
import { CardProps } from '@/interfaces'


const Card: React.FC<{ data: CardProps }> = ({data}) =>  {

  return (
    <div>
      <h1>ID: {data.id}</h1>
      <h2>NAME: {data.name}</h2>
      <p>INFO: <span>{data.title}</span> {data.content}</p>
    </div>
  )
}

export default Card

