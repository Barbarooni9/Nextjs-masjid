import { link } from 'fs';
import Link from 'next/link';
import React from 'react'




function MenuItems( {title, address}) {
  return (
    <Link href={address} className="text-lg font-bold text-black hover:text-green pb-4">
      <p> {title} </p>
    </Link>
    
    
  )
}

export default MenuItems