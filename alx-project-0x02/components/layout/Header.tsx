import React from 'react'
import Link from 'next/link'
import home from '@/pages/home'

const Header: React.FC = () => {
  return (
    <main>
        <nav>
          <Link href= "/home">Home</Link>
          <Link href= "/about">About</Link>
          <Link href= "/posts">Posts</Link>
        </nav>
    </main>
  )
}
 
export default Header