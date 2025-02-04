import React from 'react';
import { Button } from '@/components/ui/button';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
  
const ActionButtons = () => {
  return (
    <div>
        <div className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
                            <Link href="/">Getting Started</Link>
                            <Link href="/">Products</Link>
                            <Link href="/">Pricing</Link>
                            <Link href="/">Sign in</Link>
                            <Link href="/">Login</Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
            <div className='hidden md:flex md:space-x-4'>
                <Button className='text-md bg-blue-500' variant="ghost">Sign in</Button>
                <Button className='text-md' variant="ghost">Login</Button>
            </div>
        </div>
   
  )
};

export default ActionButtons;