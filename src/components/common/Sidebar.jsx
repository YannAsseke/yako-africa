import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});

const Sidebar = ({ headerMenu }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img:"/assets/img/project/sm/project-7.jpg",
    },
    {
      id: 2,
      img:"/assets/img/project/sm/project-8.jpg"
    },
    {
      id: 3,
      img:"/assets/img/project/sm/project-9.jpg"
    },
    {
      id: 4,
      img:"/assets/img/project/sm/project-10.jpg"
    },
    {
      id: 5,
      img:"/assets/img/project/sm/project-13.jpg"
    },
    {
      id: 6,
      img:"/assets/img/project/sm/project-12.jpg"
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;

  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link href="/" onClick={() => setShowSidebar(false)}>
                <a >
                  <img src="/assets/img/logo/logo.png" alt="logo" style={{ maxWidth:"100px" }} />
                </a>
              </Link>
              
            </div>
            {/* 
            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit" ><i className="far fa-search"></i></button>
              </form>
            </div> */}

            <div className="mobile-menu fix">
              <nav id="mobile-menu"
                className={`${headerMenu ? "d-block" : "d-lg-none"}`} >
                <ul>

                <div className="single_link iconAdd">
                    <Link href="/" ><li onClick={() => setShowSidebar(false)}><a>ACCUEIL</a></li></Link>
                  </div>
                  <div className="single_link iconAdd">
                  <Link href="/qui-sommes-nous" ><li onClick={() => setShowSidebar(false)}><a>QUI SOMMES NOUS</a></li></Link>
                  </div>
                  <div className="single_link iconAdd">
                  <Link href="/notre-reseau" ><li onClick={() => setShowSidebar(false)}>RESEAU</li></Link>
                  </div>
                  <Collapsible trigger={<a>NOS PRODUITS</a>} triggerTagName="div"
                    triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black" >
                      <Link href="/produits-particuliers"><li>Particuliers</li></Link>
                      <Link href="/produits-professionnels-entreprises"><li>Profesionnels & Entreprises</li></Link>
                      <Link href="/produits-partenaires"><li>Partenaires</li></Link>
                    </ul>
                  </Collapsible>
                  <div className="single_link iconAdd">
                  <Link href="/produits-partenaires"><li onClick={() => setShowSidebar(false)}><a>PARTENAIRES</a></li></Link>
                  </div>
                  <div className="single_link iconAdd">
                  <Link href="https://yakoafricassur.com/e-services/"><li onClick={() => setShowSidebar(false)}><a>E-SERVICES</a></li></Link>
                  </div>
                  <div className="single_link iconAdd">
                  <Link href="/actualites" ><li onClick={() => setShowSidebar(false)}><a>ACTUALITÉS</a></li></Link>
                  </div>
                  <Link href="/assistance" ><button onClick={() => setShowSidebar(false)}  className="btn-assi draw-border" style={{ marginTop:"10px" }}><a>ASSISTANCE</a></button></Link>
                  
                  {/* <div className="single_link iconAdd">
                    <li><Link href="/"><a>ACTUALITÉS</a></Link></li>
                  </div>

                  <div className="single_link iconAdd">
                    <li><Link href="/"><a>PARTENAIRES</a></Link></li>
                  </div>

                  <div className="single_link iconAdd">
                    <li><Link href="/"><a>CONTACTS</a></Link></li>
                  </div> */}
                 {/*  <div className="single_link iconAdd">
                  <Collapsible trigger={<a>Pages</a>} triggerTagName="div" triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd" open={false}>

                    <div className="ms-3">
                      <Collapsible trigger={<a>Page Layout 1</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
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
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 2</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
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
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 3</a>} triggerTagName="div" triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/services">Services</Link></li>
                          <li><Link href="/services-two">Services 2</Link></li>
                          <li><Link href="/services-three">Services 3</Link></li>
                          <li><Link href="/services-four">Services 4</Link></li>
                          <li><Link href="/service-details">Services Details</Link></li>
                          <li><Link href="/team">Team</Link></li>
                          <li><Link href="/team-two">Team 2</Link></li>
                          <li><Link href="/about-me">Team Details</Link></li>
                        </ul>
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 4</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/shop">Shop</Link></li>
                          <li><Link href="/product-details">Product Details</Link></li>
                          <li><Link href="/cart">Cart</Link></li>
                          <li><Link href="/wishlist">Wishlist</Link></li>
                          <li><Link href="/checkout">Checkout</Link></li>
                          <li><Link href="/sign-in">Login</Link></li>
                          <li><Link href="/sign-up">Register</Link></li>
                        </ul>
                      </Collapsible>
                    </div>

                  </Collapsible>

                  <Collapsible trigger={<a>Services</a>} triggerTagName="div"
                    triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black">
                      <li><Link href="/services">Services Page</Link></li>
                      <li><Link href="/service-details">Services Deatils</Link></li>
                    </ul>
                  </Collapsible>

                  <Collapsible trigger={<a>Blog</a>} triggerTagName="div" triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd" open={false} >
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black" >
                      <li><Link href="/blog">Blog Page</Link></li>
                      <li><Link href="/blog-grid">Blog Grid</Link></li>
                      <li><Link href="/blog-details">Blog Deatils</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                   
                  </div> */}
                </ul>
              </nav>
            </div>

            <div className={`sidebar__text ${headerMenu ? 'd-none' : 'd-none d-lg-block'}`}>
              <p>YAKO AFRICA ASSURANCES VIE COTE D&apos;IVOIRE est une compagnie d&apos;Assurance créée le 1er avril 2003. Elle est agréée par le Ministère de l&apos;Économie et des Finances, sous le numéro 040/MEFP/CAB après avis favorable de la Commission Régionale de Contrôle des Assurances (CRCA) et de la Conférence Interafricaine des Marchés d&apos;Assurance (CIMA).</p>
            </div>
            {/* <div className={`sidebar__img ${headerMenu ? 'd-none' : 'd-none d-lg-block'} mb-20`}>
              <div className="row gx-2">
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="col-4">
                    <div onClick={() => setShowSidebar(false)}
                      className="sidebar__single-img w-img mb-10">
                      <button onClick={() => setOpen(true)} className="popup-image">
                        <a onClick={() => setPhotoIndex(index)}>
                          <img src={`${image.img}`} alt="" />
                        </a>
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className={`sidebar__map ${headerMenu ? 'd-none' : 'd-none d-lg-block'} mb-15`}>
              <iframe src="https://www.google.com/maps/place/YAKO+AFRICA+ASSURANCES+VIE/@5.317113,-4.016411,16z/data=!4m6!3m5!1s0xfc1ebc7998923c3:0xac51b5de997c23dc!8m2!3d5.3171132!4d-4.0164107!16s%2Fg%2F11c20stfyv?hl=fr"></iframe>
            </div> */}
            <div className="sidebar__contact mt-30 mb-20">
              {/* <h4>Contact Info</h4> */}
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a target="_blank" rel="noreferrer" onClick={() => setShowSidebar(false)} href="https://www.google.com/maps/place/YAKO+AFRICA+ASSURANCES+VIE/@5.317113,-4.016411,16z/data=!4m6!3m5!1s0xfc1ebc7998923c3:0xac51b5de997c23dc!8m2!3d5.3171132!4d-4.0164107!16s%2Fg%2F11c20stfyv?hl=fr">Abidjan -plateau , avenue Noguès immeuble woodin , 4em étage</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="tel:+2252720331500"> 27 20 33 15 00</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="/cdn-cgi/l/email-protection#added8ddddc2dfd9edcac0ccc4c183cec2c0"><span className="mailto:infos@yakoafricassur.com" data-cfemail="0b787e7b7b64797f4b666a626725686466">infos@yakoafricassur.com</span></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__social">
              <ul>
                <li><Link href="https://www.facebook.com/YakoAfrica.SA/" target="_blank"><a ><i className="fab fa-facebook-f"></i></a></Link></li>
                <li><Link href="https://www.linkedin.com/company/laloyalevie/" target="_blank"><a><i className="fab fa-linkedin"></i></a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;
