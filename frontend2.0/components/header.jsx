import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
        <nav className='container mx-auto px-4 py-4 flex items-center justify-between'> 
            <Link href='/'>
            <Image src={"/finwise-logo.png"}
            alt='logo'
            height={60} width ={200}
            className='h-12 w-auto object-contain'/>
            </Link>
        

        <div className='flex items-center space-x-4'>
            <SignedIn>
                <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 inline-flex items-center gap-2'>
                <Button variant="outline">
                    <LayoutDashboard size={18}></LayoutDashboard>
                    <span className='hidden md:inline'>Dashboard</span>
                </Button>
                </Link>

            </SignedIn>

            <SignedOut>
              <SignInButton forceRedirectUrl="/"> 
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton appearance={{
                elements:{
                    avatarBox: "w-10 h-10",
                },
              }} />
            </SignedIn>

        </div>
        </nav>
    </div>
  )
}

export default Header