import React from 'react';
import Link from 'next/link';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area black-bg-2 pt-30 pb-75">
          <div className="container" style={{ padding:"0 50px", maxWidth:"100%" }}>
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4">
               <div className="contact__info-inner white-bg" style={{ paddingBottom:"50px" }}>
                  <img src="/assets/img/logo/logo.png" alt="logo" style={{ margin:"20px 0", maxWidth:"130px" }}/>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="map" viewBox="0 0 24 24">
                        <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                        <circle className="st0" cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                    <h4 style={{ fontWeight:"600",color:"#2b6338" }} >SIEGE</h4>
                      <p><a target="_blank" rel="noreferrer" style={{ fontWeight:"500",color:"#2b6338" }} href="https://maps.google.com/maps?ll=5.316632,-4.016711&z=15&t=m&hl=fr&gl=CI&mapclient=embed&cid=12416905615299584988">Abidjan -plateau , avenue Noguès immeuble woodin , 4em étage</a></p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="map" viewBox="0 0 24 24">
                        <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                        <circle className="st0" cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                    <h4 style={{ fontWeight:"600",color:"#2b6338" }} >ESPACE CLIENTELE PARTICULIERS ET ENTREPRISES</h4>
                      <p><a style={{ fontWeight:"500",color:"#2b6338" }}>Abidjan - Plateau, Rue de Commerce, Immeuble Pacifique en face de l&apos;Immeuble du MALI</a></p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="mail" viewBox="0 0 24 24">
                        <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z" />
                        <polyline className="st0" points="22,6 12,13 2,6 " />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <p><Link href="mailto:infos@yakoafricassur.com" target="_blank" rel="noreferrer"><a style={{ fontWeight:"500", color:"#2b6338" }}>infos@yakoafricassur.com</a></Link></p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="call" viewBox="0 0 24 24">
                        <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <p><a href="tel:+2252720331500" style={{ fontWeight:"500",color:"#2b6338" }}>+(225) 27 20 33 15 00</a></p>
                    </div>
                  </div>
                  <div className="contact__social pl-30">
                    <h4 style={{ color:"#2b6338" }}>Nous suivre</h4>
                    <ul>
                      <li><Link href="https://www.facebook.com/YakoAfrica.SA/" target="_blank" className="fb" ><a><i className="fa-brands fa-facebook-f"></i></a></Link></li>
                      {/* <li><Link href="#" target="_blank" className="tw" ><i className="fa-brands fa-twitter"></i></Link></li> */}
                      <li><Link href="https://www.linkedin.com/company/laloyalevie/" target="_blank" className="pin" ><a><i className="fa-brands fa-linkedin-in"></i></a></Link></li>
                    </ul>
                  </div>
                </div>
               {/* <div className="footer__widget">
                <img src="/assets/img/logo/logo.png" alt="logo" />
                <span className="footer-sp-contact"><Link href="https://maps.google.com/maps?ll=5.316632,-4.016711&z=15&t=m&hl=fr&gl=CI&mapclient=embed&cid=12416905615299584988">Abidjan -plateau , avenue Noguès immeuble woodin , 4em étage</Link></span>
                <p></p>
                  <h4 className="footer-sp-title mb-15"><i className="fa-solid fa-comment"></i> <Link href="tel:+2252720331500">2720331500</Link></h4>
                  <p></p>
                  <span className="footer-sp-contact"><Link href="mailto:infos@yakoafricassur.com">infos@yakoafricassur.com</Link></span>
                  <div className="contact__social pl-30">
                    <h4>Follow Us</h4>
                    <ul>
                      <li><Link href="#" className="fb" ><i className="fa-brands fa-facebook-f"></i></Link></li>
                      <li><Link href="#" className="tw" ><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link href="#" className="pin" ><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    </ul>
                  </div>
                  <p></p>
                  <div className="footer-xs-wrapper mt-60 mb-30">
                    <h5 className="footer-xs-title">Career</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                  </div> 
                </div>*/}
              </div> 
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20" style={{ fontWeight:"600" }}>NOTRE SOCIETE</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><Link href=""><a>Mot du DG</a></Link></li>
                      <li><Link href="/qui-sommes-nous"><a>Qui sommes nous?</a></Link></li>
                      <li><Link href=""><a>Notre métier</a></Link></li>
                      <li><Link href="/produits-partenaires"><a>Partenariats</a></Link></li>
                      <li><Link href="/qui-sommes-nous"><a>Notre Organisation</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20" style={{ fontWeight:"600" }}>NOS PRODUITS</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      
                      <li><Link href="/produits-particuliers"><a>Particuliers</a></Link></li>
                      <li><Link href="/produits-professionnels-entreprises"><a>Professionnels & Entreprises</a></Link></li>
                      <li><Link href="/produits-partenaires"><a>Partenaires</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20" style={{ fontWeight:"600" }}>RESEAU</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><Link href="/notre-reseau"><a>Réseau individuel</a></Link></li>
                      <li><Link href=""><a>Courtage</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20" style={{ fontWeight:"600" }}>E-SERVICES</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><Link href="https://yakoafricassur.com/e-services/"><a>E-services</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/*
        <div className="tpcopyright-area-4 border-top-2 black-bg-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <p>© 2022 Nerox - Agency & Portfolio Design . All Rights Reserved.</p>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="copyright-links">
                  <a href="#">Terms and conditions</a>
                  <a href="#">Privacy policy</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>*/}


      </footer>
    </>
  );
};

export default FooterTwo;