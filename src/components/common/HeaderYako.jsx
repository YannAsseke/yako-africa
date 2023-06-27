import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import useSticky from '../../hooks/use-sticky';
import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import Sidebar from './Sidebar';

const HeaderYako = ({ HeaderTwo, headerEight = false,homeNine}) => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const {setShowSidebar} = useGlobalContext();

  return (
    <>
      <header>
        <div className={`tp-header-area ${HeaderTwo && 'box-plr-85'} ${homeNine ? 'header-style-9' : ''}`}>
          <div className={`tp-header-area-inner ${HeaderTwo ? '' : 'inner-border'} 
          ${headerSticky && "header-sticky"} ${homeNine && 'header-transparent border-0'}`} id="header-sticky">
            <div className={`${HeaderTwo ? 'container-fluid' : 'container'} p-relative`} style={{ margin : '0', maxWidth : '100%', padding:"10px"}}>
              <div className="row align-items-center">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-10 col-10" >
                  <div className="logo-dark" style={{ width:'50vw' }}>
                    <Link href="/">
                     <a>
                     { homeNine ? <img src="/assets/img/logo/logo-white.png" alt="logo" />
                      : <img src="/assets/img/logo/logo.png" alt="logo" />}
                     </a>
                    </Link>
                  </div>
                  <div className="logo-white">
                     <Link href="/">
                      <a><img src="/assets/img/logo/logo-white.png" alt="logo" /></a>
                    </Link>
                  </div>
                </div>
                <div className="col-10 d-none d-lg-block" style={{ textAlign:'center', padding:'0' }}>
                  <div className="tpmenu">
                    <nav id="mobile-menu">
                      <ul style={{ textAlign:'center' }}>
                        <li>
                          <Link href="/">
                             <a>Accueil</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">Qui sommes nous</Link>
                        </li>
                        <li>
                          <Link href="/help-center">Réseau </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/">
                             <a>Nos produits</a>
                          </Link>
                          <ul className="submenu">
                          <li><Link href="/home-four">Particulier</Link></li>
                          <li><Link href="/home-five">Professionnel & Entreprise</Link></li>
                            <li><Link href="/home-seven">Partenaires</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/portfolio-three">Partenaires </Link>
                        </li>
                        <li style={{ color:"#f9b233" }}>
                            <Link href="https://laloyalevie.com/espace-client/login.php">Ynov</Link>
                        </li>    
                        <li>
                          <Link href="/privacy-policy">Actualités </Link>
                        </li>
                        {/* <li>
                          <Link href="/about">Contacts </Link>
                        </li> */}
                      {/*   <li className="has-dropdown megamenu-full">
                          <a href="#">Pages</a>
                          <ul className="megamenu">
                            <li>
                              <a href="#" className="megamenu-title">Page Layout 1</a>

                              <ul>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/about-me">About Me</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/help-center">Help Center</Link></li>
                                <li><Link href="/error-page">Error 404</Link></li>
                                <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#" className="megamenu-title">Page Layout 2</a>

                              <ul>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/portfolio-two">Portfolio 2</Link></li>
                                <li><Link href="/portfolio-three">Portfolio 3</Link></li>
                                <li><Link href="/portfolio-four">Portfolio 4</Link></li>
                                <li><Link href="/portfolio-five">Portfolio 5</Link></li>
                                <li><Link href="/portfolio-six">Portfolio 6</Link></li>
                                <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                                <li><Link href="/job-list">Job List</Link></li>
                                <li><Link href="/job-details ">Job Details</Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#" className="megamenu-title">Page Layout 3</a>
                              <ul>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/services-two">Services 2</Link></li>
                                <li><Link href="/services-three">Services 3</Link></li>
                                <li><Link href="/services-four">Services 4</Link></li>
                                <li><Link href="/service-details">Services Details</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/team-two">Team 2</Link></li>
                                <li><Link href="/about-me">Team Details</Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#" className="megamenu-title">Page Layout 4</a>

                              <ul>
                                <li><Link href="/shop">Shop</Link></li>
                                <li><Link href="/product-details">Product Details</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/checkout">Checkout</Link></li>
                                <li><Link href="/sign-in">Login</Link></li>
                                <li><Link href="/sign-up">Register</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/services">Services</Link>
                          <ul className="submenu">
                            <li><Link href="/services">Services Page</Link></li>
                            <li><Link href="/service-details">Services Deatils</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/blog">Blog</Link>
                          <ul className="submenu">
                            <li><Link href="/blog">Blog Page</Link></li>
                            <li><Link href="/blog-grid">Blog Grid</Link></li>
                            <li><Link href="/blog-details">Blog Deatils</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Services </Link>
                        </li>
                        <li>
                          <Link href="/contact">Partenaires </Link>
                        </li>*/}
                      </ul>
                    </nav>
                  </div>
                </div>
                {
                  !headerEight && <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-1">
                    <div className="tp-header-action">
                      <ul>
                       {/* <li className="d-none d-sm-inline-block">
                          <button onClick={() => setSearchOpen(true)} href="#" className="search">
                            <i className="fas fa-search"></i>
                          </button>
                      </li>  */}
                        <li >
                          <button onClick={() => setShowSidebar(true)} className="info-toggle-btn sidebar-toggle-btn">
                            <i className="fas fa-bars"></i>
                          </button>
                        </li>
                        {/* <li>
                          <div className="mode-switch-wrapper my_switcher setting-option">
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" htmlFor="chk">
                              <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                              <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                            </label>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                }

                {
                  headerEight && <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-6 col-6">
                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                      <div className="tp-header-action tp-header-action-8">
                        <ul>
                          <li>
                            {/* <!-- dark mode button start --> */}
                            <div className="mode-switch-wrapper my_switcher setting-option">
                              <input type="checkbox" className="checkbox" id="chk" />
                              <label className="label" htmlFor="chk">
                                <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                                <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                              </label>
                            </div>
                            {/* <!-- dark mode button end  --> */}
                          </li>
                          <li className="d-lg-none ml-20">
                            <button onClick={() => setShowSidebar(true)} className="info-toggle-btn sidebar-toggle-btn">
                              <i className="fas fa-bars"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="tp-header-btn ml-30 d-none d-xl-block">
                        <a href="#" className="tp-solid-btn">contact us</a>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
      </header>


      {/* <!-- modal-search-start --> */}
      {
        searchOpen && <div className="modal search-modal" id="search-modal">
          <button onClick={() => setSearchOpen(false)} type="button" className="close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      }

      {/* <!-- modal-search-end --> */}


      {/* Sidebar  */}
      <Sidebar />
      {/* Sidebar  */}

    </>
  );
};

export default HeaderYako;