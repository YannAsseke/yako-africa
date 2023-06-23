import React from 'react';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area black-bg-2 pt-115 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="footer__widget">
                <img src="/assets/img/logo/logo.png" alt="logo" />
                <span className="footer-sp-contact"><a href="https://maps.google.com/maps?ll=5.316632,-4.016711&z=15&t=m&hl=fr&gl=CI&mapclient=embed&cid=12416905615299584988">Abidjan -plateau , avenue Noguès immeuble woodin , 4em étage</a></span>
                <p></p>
                  <h4 className="footer-sp-title mb-15"><i className="fa-solid fa-comment"></i> <a href="tel:+2252720331500">2720331500</a> / <a href="tel:+2252520018601">2520018601</a></h4>
                  <p></p>
                  <span className="footer-sp-contact"><a href="mailto:nerox@gmail.com">infos@yakoafricassur.com</a></span>
                  {/* <p></p>
                  <div className="footer-xs-wrapper mt-60 mb-30">
                    <h5 className="footer-xs-title">Career</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-2 col-sm-2">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">Notre société</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Mot du DG</a></li>
                      <li><a href="#">Qui sommes nous?</a></li>
                      <li><a href="#">Notre métier</a></li>
                      <li><a href="#">Partenariats</a></li>
                      <li><a href="#">Notre Organisation</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-2 col-sm-2">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">NOS PRODUITS</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Entreprise</a></li>
                      <li><a href="#">Particulier</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-2 col-sm-2">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">NOTRE RESEAU</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Réseau individuel</a></li>
                      <li><a href="#">Courtage</a></li>
                      <li><a href="#">Bancassurance</a></li>
                    </ul>
                  </div>
                  <br />
                  <h5 className="footer-xs-title mb-20">NOUS CONTACTER</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">E-SERVICES</a></li>
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