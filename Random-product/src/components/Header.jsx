import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {

  const getLinkClasses = ({ isActive }) => {
    const baseClass = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap';
    const activeClasses = 'bg-zinc-700 text-white shadow-inner';
    const inActiveClasses = 'text-zinc-400 hover:bg-zinc-800 hover:text-white';

    return `${baseClass} ${isActive ? activeClasses : inActiveClasses}`;
  }
  return (
    <header className='mb-10'>
      <nav>
        <NavLink to="/" className={getLinkClasses}>
          Products
        </NavLink>

        <NavLink to="/random" className={getLinkClasses}>
          Daily Best
        </NavLink>

        <NavLink to="/cart" className={getLinkClasses}>
          Cart
        </NavLink>
      </nav>
    </header>

  )
}

export default Header