import React from 'react'
import servers from '../Assets/Group 1217.svg'
import contact from '../Assets/Group 1216.svg'
import location from '../Assets/Group 1215.svg'
import illustrationTwo from '../Assets/Illustration 2.svg'
import tick from '../Assets/Group 1120.svg'
import free from '../Assets/Free.svg'
import right from '../Assets/Vector (1).svg'
import global from '../Assets/Huge Global.svg'
import netflix from '../Assets/Mask Group.svg'
import reddit from '../Assets/Mask Group (1).svg'
import amazon from '../Assets/Mask Group (2).svg'
import discord from '../Assets/Mask Group (3).svg'
import spotify from '../Assets/Mask Group (4).svg'
import user from '../Assets/Ellipse 175.png'
import user1 from '../Assets/Ellipse 175 (2).png'
import user2 from '../Assets/Ellipse 175 (1).png'
import star from '../Assets/Vector (1)(2).svg'


function MidSection() {
    return (
        <>
            <div className='container mt-4' >
                <div className='row ' >
                    <div className="col-md-6 pe-3 ps-5" >
                        <h3 className='mainHead'> Want anything to be easy with <b>LaslesVPN.</b> </h3>
                        <small > Provide a network
                            for all your needs with ease and fun using LaslesVPN discover interesting features from us. </small>
                        <br />
                        <button className='btn getStarted mt-3' > Get Started </button>
                    </div>
                    <div className="col-md-6 laptopImg" >
                    </div >
                </div >
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4 firstDiv'>
                        <span className=' d-flex justify-content-center'>
                            <div className='dot mt-2'>
                                <img className='contactImg' src={contact} alt='contact' />
                            </div>
                            <div>
                                <ul>
                                    <li><h4><b>90+</b></h4></li>
                                    <li>Users</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <div className='col-md-4 firstDiv'>
                        <span className=' d-flex justify-content-center'>
                            <div className='dot mt-2'>
                                <img className='contactImg' src={location} alt='location' />
                            </div>
                            <div>
                                <ul>
                                    <li><h4><b>30+</b></h4></li>
                                    <li>Locations</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <div className='col-md-4'>
                        <span className=' d-flex justify-content-center'>
                            <div className='dot mt-2'>
                                <img className='contactImg' src={servers} alt='server' />
                            </div>
                            <div>
                                <ul>
                                    <li><h4><b>50+</b></h4></li>
                                    <li>Servers</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <img className='imgIllust' src={illustrationTwo} alt='illust2' />
                    </div>
                    <div className='col-md-6'>
                        <div className='features'>
                            <h3><b>We Provide Many Features You Can Use</b></h3>
                            <small className='mt-3'>You can explore the features that we provide with fun and have their own functions each feature.</small> <br />
                            <small className='mt-3'><img className='me-2 tick' src={tick} alt='tick' />Powerfull online protection.</small> <br />
                            <small><img className='me-2 tick' src={tick} alt='tick' />Internet without borders.</small> <br />
                            <small><img className='me-2 tick' src={tick} alt='tick' />Supercharged VPN</small> <br />
                            <small><img className='me-2 tick' src={tick} alt='tick' />No specific time limits.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-2'>
                <div className='row text-center'>
                    <h2><b>Choose Your Plan</b></h2>
                    <small className=''>Let's choose the package that is best for you and explore it happily and<br /> cheerfully.</small>
                </div>
            </div>

            <div className='container mt-3'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-3 mainDivFree'>
                        <img src={free} alt='free' />
                        <div className='mt-3'>
                            <b>Free Plan</b>
                        </div>
                        <div className='freePlan mt-3'>
                            <span><img src={right} alt='right' /> Unlimited Bandwitch
                            </span> <br />
                            <span><img src={right} alt='right' /> Encrypted Connection
                            </span> <br />
                            <span> <img src={right} alt='right' /> No Traffic Logs
                            </span> <br />
                            <span><img src={right} alt='right' /> Works on All Devices
                            </span> <br />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <h3><b>Free</b></h3>
                        <button className='btn btn-outline-danger rounded-pill ps-5 pe-5' > Select </button>

                    </div>
                    <div className='col-md-3 mainDivFree '>
                        <img src={free} alt='free' />
                        <div className='mt-3'>
                            <b>Standard Plan</b>
                        </div>
                        <div className='freePlan mt-3'>
                            <span><img src={right} alt='' /> Unlimited Bandwitch
                            </span> <br />
                            <span><img src={right} alt='' /> Encrypted Connection
                            </span> <br />
                            <span> <img src={right} alt='' /> Yes Traffic Logs
                            </span> <br />
                            <span><img src={right} alt='' /> Works on All Devices
                            </span> <br />
                            <span><img src={right} alt='' /> Connect Anyware
                            </span> <br />
                        </div>
                        <br />
                        <br />
                        <br />

                        <h3><b>$9 / mo</b></h3>
                        <button className='btn btn-outline-danger rounded-pill ps-5 pe-5' > Select </button>
                    </div>
                    <div className='col-md-3 mainDivFree'>
                        <img src={free} alt='' />
                        <div className='mt-3'>
                            <b>Premium Plan</b>
                        </div>
                        <div className='freePlan mt-3'>
                            <span><img src={right} alt='' /> Unlimited Bandwitch
                            </span> <br />
                            <span><img src={right} alt='' /> Encrypted Connection
                            </span> <br />
                            <span> <img src={right} alt='' /> Yes Traffic Logs
                            </span> <br />
                            <span><img src={right} alt='' /> Works on All Devices
                            </span> <br />
                            <span><img src={right} alt='' /> Connect Anyware
                            </span> <br />
                            <span><img src={right} alt='' /> Get New Features
                            </span> <br />
                        </div>
                        <br />

                        <h3><b>$12 / mo</b></h3>
                        <button className='btn btn-outline-danger rounded-pill ps-5 pe-5' > Select </button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='text-center global'>
                        <h3>Huge Global Network of Fast VPN</h3>
                        <small>See LaslesVPN everywhere to make it easier for you when you move locations.</small>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='col-md-12'>
                    <img src={global} className='hugeGlobal' alt='' />
                </div>
            </div>
            <div className='container me-4'>
                <div className='row socials'>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img className='imgSocials ' src={netflix} alt='' />
                    </div>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img className='imgSocials' src={reddit} alt='' />
                    </div>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img className='imgSocials' src={amazon} alt='' />
                    </div>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img className='imgSocials' src={discord} alt='' />
                    </div>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img className='imgSocials' src={spotify} alt='' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='text-center customer'>
                        <h3>Trusted by Thousands of Happy Customer</h3>
                        <small>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</small>
                    </div>
                </div>
            </div>
            <div className='container mt-2 mb-5'>
                <div className='row'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active col-md-2">
                                <div className='paddingg'>
                                    <div className='d-flex'>
                                        <img src={user} className="" width='50' alt="..." />
                                        <span className='ms-3 me-5'><b>Viezh Robert</b> <br /> Warsaw, Poland</span>
                                        <div className='text-center rating'>
                                            <span>4.5</span>
                                            <img className='ms-3' src={star} width='15' alt='' />
                                        </div>
                                    </div>
                                    <p className='mt-3'>
                                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item col-md-2">
                                <div className='paddingg'>
                                    <div className='d-flex'>
                                        <img src={user2} className="" width='50' alt="..." />
                                        <span className='ms-3 me-5'><b>Yessica Christy</b> <br /> <small>Shanxi, China</small></span>
                                        <div className='text-center rating'>
                                            <span>4.5</span>
                                            <img className='ms-3' src={star} width='15' alt='' />
                                        </div>
                                    </div>
                                    <p className='mt-3'>
                                        “I like it because I like to travel far and still can connect with high speed.”
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item col-md-2">
                                <div className='paddingg'>
                                    <div className='d-flex'>
                                        <img src={user1} className="" width='50' alt="..." />
                                        <span className='ms-3 me-5'><b>Kim Young Jou</b> <br /> <small>Seoul, South Korea</small></span>
                                        <div className='text-center rating'>
                                            <span>4.5</span>
                                            <img className='ms-3' src={star} width='15' alt='' />
                                        </div>
                                    </div>
                                    <p className='mt-3'>
                                        “This is very unusual for my business that currently requires a virtual private network that has high security.”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='container mt-2 mb-3 text-center mainSubscribe'>
                <div className='row '>
                    <div className='col-md-6 alignText'>
                        <div className='fs-1 '><h3><b>Subscribe Now for <br /> Get Special Features!</b></h3></div>
                        <div><small>Let's subscribe with us and find the fun.</small></div>
                    </div>
                    <div className='col-md-6'>
                        <button className='btn getStarted mt-3 fw-bold subscribe' > Subscribe Now </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MidSection