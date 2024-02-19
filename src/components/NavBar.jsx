import React from 'react'
import './components.css'
export default function NavBar() {
    return (
        <nav className='rootNav'>
            <div className='nav'>
                <ul className='listCont'>
                    <li className='item'>Home</li>
                    <li className='item'>About</li>
                    <li className='item'>Services</li>
                    <li className='item'>About Us</li>
                    <li className='item'>Contact Us</li>
                </ul>
            </div>
        </nav>

    )
}
