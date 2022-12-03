import React, { useEffect } from 'react'
import logo from '../Assets/Logo.svg'
import $ from 'jquery'
// import { useEffect } from 'react'


function NavBar() {

    useEffect(() => {
        $('.menuSm').toggleClass('visible');
    }, []);
    return (


        <div className='container mt-3' >
            <div className='row ' >

                <div className="col-md-4 col-4" >
                    <img className='img-fluid logo'
                        src={logo} alt='logo' /> </div >
                <div className="col-md-4  text-center mainNav" >
                    <span className='me-4' > About </span>
                    <span className='me-4' > Features </span>
                    <span className='me-4' > Pricing </span>
                    <span className='me-4' > Testimonials </span>
                    <span className='me-4' > Help </span >
                </div>
                <div className="col-md-4 text-end col-4" >
                    <button className='btn' > Sign In </button> <button className='btn btn-outline-danger rounded-pill ps-4 pe-4' > Sign Up </button>
                </div>
                <div className='col-md-4 col-4 menuSm' >
                    <input id="menu-toggle" type="checkbox" />
                    <label class='menu-button-container dark' for="menu-toggle">
                        <div class='menu-button'></div>
                    </label>
                    <ul className='menu'>
                        <li className='liItems' > About </li>
                        <li className='liItems' > Features </li>
                        <li className='liItems' > Pricing </li>
                        <li className='liItems' > Testimonials </li>
                        <li className='liItems' > Help </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default NavBar
