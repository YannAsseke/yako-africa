import React, {useState, useRef, ReactDOM} from 'react';
import { Table } from 'react-bootstrap';
import Reseau from '../../data/Agences'

const PrivacyContent = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
                <div className="">
                    <div className="card-body">
                    <p className="pt-30 pb-30" style={{color:'#3c3c3b', fontSize:'35px', fontWeight:"600", textAlign:"center"}}>Encore plus proche de vous grâce à notre vaste réseau de distribution couvrant <b style={{ color:"#2b6338" }}>le territoire national mais aussi la diaspora</b>.</p>
                    <p style={{color:'#3c3c3b', fontSize:'20px'}}>Nous nous appuyons sur nos espaces clientèle particuliers et entreprises présents dans plusieurs villes de la cote d’ivoire mais aussi sur nos partenaires banques, sociétés de courtage de premier rang et institutions financières afin de desservir une grande partie de la population.</p>
                    <div className="services-details-area pt-50">
                      
                      <div className="container">
                        
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="services-sm-image w-img mb-45" style={{ marginTop:"100px" }}>
                              <img src="/assets/img/services/parten.png" alt="services-sm-img" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="services-sm-image w-img mb-45">
                              <img src="/assets/img/services/afrique.png" alt="services-sm-img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="privacy-content-area">
                        <div className="container">
                          <div className="row">
                          <div className="col-xl-4 col-lg-4">
                              <div className="privacy-nav mb-55">
                                <div className="privacy-nav-wrapper">

                                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                                    <li className="nav-item" role="presentation">
                                    <button style={{ fontSize:'25px'}} className="nav-link active" id="abidjan-tab" data-bs-toggle="tab" data-bs-target="#abidjan" type="button" role="tab" aria-controls="abidjan" aria-selected="false">Abidjan</button>
                                    </li>
                                    {
                                        Reseau.slice(0, 8).map(item => (
                                          <li key={item.id} className="nav-item" role="presentation">
                                            <button style={{ fontSize:'25px'}} className="nav-link" id={`${item.index}-tab`} data-bs-toggle="tab" data-bs-target={`#${item.index}`} type="button" role="tab" aria-controls={`${item.index}`} aria-selected="false">{item.ville}</button>
                                          </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                              <div className="privacy-content-wrapper">
                                <div className="tab-content" id="privacy-nav-content">
                                  <div className="tab-pane fade show active" id="abidjan" role="tabpanel" aria-labelledby="abijan-tab">
                                    <div className="privacy-item mb-55">
                                      <div className="contact__info-inner white-bg">
                                        <div className="contact__info-item d-flex align-items-start mb-35">
                                          <div className="contact__info-icon mr-15">
                                            <svg className="map" viewBox="0 0 24 24">
                                              <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                                              <circle className="st0" cx="12" cy="10" r="3" />
                                            </svg>
                                          </div>
                                          <div className="contact__info-text">
                                            <h4>SIEGE</h4>
                                            <p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/YAKO+AFRICA+ASSURANCES+VIE,+Abidjan/@5.316632,-4.016711,15z/data=!4m6!3m5!1s0xfc1ebc7998923c3:0xac51b5de997c23dc!8m2!3d5.3171132!4d-4.0164107!16s%2Fg%2F11c20stfyv?hl=fr&gl=CI">Abidjan - Plateau , Avenue Noguès Immeuble Woodin , 4ème étage</a></p>
                                            
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
                                            <h4>ESPACE CLIENTELE PARTICULIERS ET ENTREPRISES</h4>
                                            <p><a target="_blank" rel="noreferrer" href="">Abidjan - Plateau, Rue de Commerce, Immeuble Pacifique en face de l'Immeuble du MALI</a></p>  
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
                                            <h4>Email</h4>
                                            <p><a href="mailto:infos@yakoafricassur.com">infos@yakoafricassur.com</a></p>
                                          </div>
                                        </div>
                                        <div className="contact__info-item d-flex align-items-start mb-35">
                                          <div className="contact__info-icon mr-15">
                                            <svg className="call" viewBox="0 0 24 24">
                                              <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z" />
                                            </svg>
                                          </div>
                                          <div className="contact__info-text">
                                            <h4>Téléphone</h4>
                                            <p><a href="tel:+(225) 27 20 33 15 00">+(225) 27 20 33 15 00</a></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {
                                        Reseau.slice(0, 8).map(item => (
                                          <div key={item.id} className="tab-pane fade" id={`${item.index}`} role="tabpanel" aria-labelledby={`${item.index}-tab`}>
                                            <div className="contact__info-inner white-bg">
                                              <div className="contact__info-item d-flex align-items-start mb-35">
                                                <div className="contact__info-icon mr-15">
                                                  <svg className="map" viewBox="0 0 24 24">
                                                    <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                                                    <circle className="st0" cx="12" cy="10" r="3" />
                                                  </svg>
                                                </div>
                                                <div className="contact__info-text">
                                                  <h4>{item.ville}</h4>
                                                  <p><a target="_blank" rel="noreferrer" href="">{item.adresse}</a></p>
                                                </div>
                                              </div>
                                              <div className="contact__info-item d-flex align-items-start mb-35">
                                                <div className="contact__info-icon mr-15">
                                                  <svg className="call" viewBox="0 0 24 24">
                                                    <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z" />
                                                  </svg>
                                                </div>
                                                <div className="contact__info-text">
                                                  <h4>Téléphone</h4>
                                                  <p><a href={`tel:${item.tel}`}>{item.tel}</a></p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default PrivacyContent;