import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/utils/Nav.css'

const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/cart'>Bo'shatilganlar</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav