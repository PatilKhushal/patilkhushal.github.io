import React from 'react'
import { NavLink } from 'react-router-dom';

function NavigationLinks({value, to}) {
  return (
    <NavLink to={to} end className={({ isActive }) =>
    `relative inline-flex items-center px-5 py-1.5 transition-all ease-in duration-75 justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 ${isActive ? "" : " bg-none"} text-white list-none small-desktop:text-base small-tablet:py-1 small-tablet:px-4 large-mobile:text-sm small-mobile:p-1 transition-colors duration-1000`} >
        {value}
    </NavLink>
/* linear-gradient(to right, #5C258D 0%, #4389A2 51%, #5C258D 100%) */
  )
}

export default NavigationLinks
