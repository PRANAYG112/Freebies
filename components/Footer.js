import React from 'react'
import footerLogo from '../Assets/Logo.svg'
import tweet from '../Assets/Twitter.svg'
import insta from '../Assets/Instagram.svg'
import facebook from '../Assets/Facebook.svg'

function Footer() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 text-left'>
                    <div className='imgFooter text-left'>
                        <img src={footerLogo} width='200' />
                    </div>
                    <div className='mt-3'>
                        <small>LaslesVPN is a private virtual network that <br /> has unique features and has high security.</small>
                    </div>
                    <div className='d-flex mt-4'>
                        <img src={facebook} width='40' />
                        <img className='ms-2' src={tweet} width='40' />
                        <img className='ms-2' src={insta} width='40' />
                    </div>
                    <div className='mt-2' style={{ color: '#AFB5C0' }}>©2020LaslesVPN</div>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex '>
                        <ul>
                            <li><b>Product</b></li>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                        <ul className='ms-3'>
                            <li><b>Engage</b></li>
                            <li>LaslesVPN ?</li>
                            <li>FAQ</li>
                            <li>Tutorials</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                        <ul>
                            <li><b>Earn Money</b></li>
                            <li>Affiliate</li>
                            <li>Become Partner</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
