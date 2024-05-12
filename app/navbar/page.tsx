import React from 'react';
import Logo from './logo';
import { NavigationMenuBar } from './navigation-bar';
import ActionButtons from './action-buttons';

const Navbar = () => {
  return (
    <div className='flex justify-between item-center px-10 border-b h-30'>
        <Logo />
        <NavigationMenuBar />
        <ActionButtons />
    </div>
  )
};

export default Navbar;