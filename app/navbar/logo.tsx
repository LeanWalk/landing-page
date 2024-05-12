import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
        <Image src="/images/logo/logoipsum.svg" width={70} height={70} alt="logo"/>
    </div>
  )
}

export default Logo;