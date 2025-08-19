import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
import React from 'react'

const about: React.FC = () =>  {
  return (
    <div>
        <Header/>
        <h1>ABOUT</h1>
        <Button title='small Button' shape='rounded-sm'/>
        <Button title='Medium Button' shape='rounded-md'/>
        <Button title='Small Button' shape='rounded-full'/>
    </div>
  ) 
}

export default about