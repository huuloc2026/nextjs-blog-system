import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-xl">
      <ul>
        <li>
          <ModeToggle/>
          <Link href={'/login'}>Login</Link>
        </li>
         <li>
          <Link href={'/register'}>Register</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header