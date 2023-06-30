import React, {useState, useRef, ReactDOM} from 'react';
import { Table } from 'react-bootstrap';

const PrivacyContent = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
                <div className="">
                    <div className="card-body">
                    <p className='pt-30 pb-80' style={{color:'#3c3c3b', fontSize:'35px', fontWeight:"600", textAlign:"center"}}><b style={{ color:"#2b6338" }}>Devenez partenaire de YAKO AFRICA Assurances Vie.</b></p>
                    
                    <div className="privacy-content-area">
                        <div className="container">
                          <div className="row">
                          <div className="col-xl-4 col-lg-4">
                              <div className="privacy-nav mb-55">
                                <div className="privacy-nav-wrapper">
                                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                                    <li className="nav-item" role="presentation">
                                    <button style={{ fontSize:'25px'}} className="nav-link active" id="bancassurance-tab" data-bs-toggle="tab" data-bs-target="#bancassurance" type="button" role="tab" aria-controls="bancassurance" aria-selected="false">Bancassurance</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button style={{ fontSize:'25px'}} className="nav-link" id="courtage-tab" data-bs-toggle="tab" data-bs-target="#courtage" type="button" role="tab" aria-controls="courtage" aria-selected="false">Courtage</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                              <div className="privacy-content-wrapper">
                                <div className="tab-content" id="privacy-nav-content">
                                  <div className="tab-pane fade show active" id="bancassurance" role="tabpanel" aria-labelledby="bancassurance-tab">
                                    <div className="privacy-item mb-55">
                                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}><b style={{ color:'#2b6338' }}>YAKO AFRICA Assurances Vie</b>, développe à travers des partenariats d’envergure, <b style={{ color:'#2b6338' }}>des solutions d’Assurances vie</b> pour les banques et institutions de microfinance.</p>
                                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Il s’agit d’offres pour la couverture et la fidélisation de leur clientèle.</p>
                                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Des collaborations <b style={{ color:'#2b6338' }}>gagnant-gagnant</b> sur le long terme pour stimuler leurs activités.</p>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade show" id="courtage" role="tabpanel" aria-labelledby="courtage-tab">
                                    <div className="privacy-item mb-55">
                                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Afin de répondre aux besoins des différentes populations qui sont de bénéficier <b style={{ color:'#2b6338' }}>des solutions de YAKO AFRICA Assurance vie</b>, nous avons décidé de travailler avec plusieurs intermédiaires dont <b style={{ color:'#2b6338' }}>les courtiers</b> qui sont à même de proposer aux clients des solutions sur mesure en fonction de  leur besoins.</p>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="services-details-area pt-40">
                    <p  style={{color:'#3c3c3b', fontSize:'45px', fontWeight:"600", textAlign:"center"}}><b style={{ color:"#2b6338" }}>Ils nous font confiance</b></p>
                      
                      <div className="container">
                        
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="services-sm-image w-img mb-45" style={{ marginTop:"100px" }}>
                              <img src="/assets/img/services/parten2.png" alt="services-sm-img" />
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