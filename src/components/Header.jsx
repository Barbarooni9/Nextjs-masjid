import React from "react";
import MenuItems from "./UI/MenuItems"


function Header() {
  return (
    <header className="flex justify-between  bg-white shadow-md">
      <div>
      <img src="/images/logo.svg" alt="Logo" />
      </div>

      <div className="flex justify-center items-center gap-8 pb-8 pl-4">
      <MenuItems title='Startsida' address='/' />
      <MenuItems title='Stöd Oss' address='/' />
      <MenuItems title='Böntider' address='/' />
      <MenuItems title='Nyheter' address='/' />
      <MenuItems title='Om Oss' address='/about' />

      </div>
    
    </header>
    
  );
}

export default Header;