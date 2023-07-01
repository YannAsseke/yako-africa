import { Table } from 'react-bootstrap';

const servicesData = [
      {
        id:1,
        img:'/assets/img/product/prevoyance.png',
        title:'Prévoyance',
        desc:'',
        service:'/assets/img/services/prevoyance.png',
        text :<> <div className="privacy-content-area">
        <div className="container">
          <div className="row">
          <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">

                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button style={{ fontSize:'32px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Prévoyance</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">
                  <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                    <div className="privacy-item mb-55">
                      {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>YAKO AFRICA assurances vie  s’est mis à votre écoute en développant une large <b style={{ color:'#2b6338' }}>gamme de produits de prévoyance et d’ Obsèques.</b></p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Vous pouvez choisir librement votre option de couverture parmi les solutions suivantes :</p>
                      <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Solo</b></p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>A partir de 1200 FCFA par mois souscrivez pour vous ou un proche.</p>
                      <br />
                      <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Eternité</b></p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour souscrire pour vous-même ou un proche sans limite d’âge.</p>
                      <br />
                      <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Famille</b></p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour couvrir toute la famille nucléaire.</p>
                      <br />
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Le conseil, l’assistance et une prise en charge immédiate partout en Côte d’Ivoire.</p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>En cas de décès de la personne assurée, nos équipes vous conseillent, vous soutiennent et vous accompagnent.
                        YAKO Assurance Obsèques engage YAKO AFRICA assurances vie à mettre à la disposition du bénéficiaire désigné, un ensemble de prestations au décès d’un assuré. 
                      </p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Les prestations en espèces sont assurées par YAKO AFRICA assurances vie et les prestations en nature sont assurées par nos partenaires opérateurs de pompes funèbres (enlèvement, traitement, conservation et levée du corps, allocation cercueil et transfert du corps ) représentés sur l’ensemble de la Côte d’Ivoire.
                      </p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Disposant d’une longue expérience et constitués d’experts dans leur secteur, nos partenaires confèrent au produit Yako Assurance Obsèques une crédibilité garantie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              </>
      },
      {
        id:2,
        img:'/assets/img/product/retraite.png',
        title:'Retraite',
        desc:'Planifiez votre retraite en toute sérénité',
        service:'/assets/img/services/multisupport.png',
        text :<> 
              <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button style={{ fontSize:'40px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Cadence Retraite</button>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'20px', color:'black' }}><b style={{ fontSize:'35px', color:'#2b6338' }}>Cadence Retraite</b> vous permet d’obtenir un complément de revenus à la retraite pour faire face à la réduction de votre revenu.</p>
                              <p className="services-text mb-1" style={{ fontSize:'20px', color:'black' }}>Constituez en toute liberté une épargne en vue de la retraite et au terme du contrat, devenez titulaire d’une rente ou d’un capital selon votre cotisation</p>
      
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
      },
      {
        id:3,
        img:'/assets/img/product/obsèque.png',
        title:'Obsèques',
        desc:'Accompagnez vos proches sereinement',
        service:'/assets/img/services/cadence.jpg',
        text :<>
                <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button style={{ fontSize:'32px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Obsèques</button>
                            </li>
                            
                            <li className="nav-item" role="presentation"></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>YAKO AFRICA assurances vie  s’est mis à votre écoute en développant une <b style={{ color:'#2b6338' }}>gamme de produits d’ Obsèques diversifiés, adaptés et accessibles à tous.</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Parce que votre peine est lourde, nous allégeons les dépenses des funérailles. En cas de décès d’une personne assurée, les équipes de YAKO AFRICA Assurances Vie vous soutiennent et vous assistent.</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Bénéficiez par l’intermédiaire de nos partenaires opérateurs de pompes funèbres représentés sur toute l’étendue du territoire des prestations en nature suivantes :</p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Enlèvement, traitement et conservation du corps
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Levée de corps
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Allocation cercueil et transfert du corps au lieu d’inhumation
                                </li></p>
                              </ol>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>En plus, recevez un forfait en espèce de la part de YAKO AFRICA assurances vie.</p>
                              
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Choisissez librement votre option de couverture parmi les solutions suivantes :</p>
                              <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Solo</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Souscrivez pour vous ou un proche.</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>En cas de décès de l’assuré, YAKO AFRICA Assurances Vie met à votre disposition un montant forfaitaire selon la formule choisie.</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Vous bénéficiez aussi de l’enlèvement, le traitement, la conservation et en plus un avoir pour vous aider à l’achat du cercueil et au transfert du corps.</p>
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Eternité</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour souscrire pour vous-même ou un proche sans limite d’âge.</p>
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Yako Famille</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Libérez votre famille des soucis liés aux obsèques avec YAKO FAMILLE qui vous permet de couvrir tous les membres de famille nucléaire.</p>
                              {/* <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Le conseil, l’assistance et une prise en charge immédiate partout en Côte d’Ivoire.</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>En cas de décès de la personne assurée, nos équipes vous conseillent, vous soutiennent et vous accompagnent.
                                YAKO Assurance Obsèques engage YAKO AFRICA assurances vie à mettre à la disposition du bénéficiaire désigné, un ensemble de prestations au décès d’un assuré. 
                              </p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Les prestations en espèces sont assurées par YAKO AFRICA assurances vie et les prestations en nature sont assurées par nos partenaires opérateurs de pompes funèbres (enlèvement, traitement, conservation et levée du corps, allocation cercueil et transfert du corps ) représentés sur l’ensemble de la Côte d’Ivoire.
                              </p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Disposant d’une longue expérience et constitués d’experts dans leur secteur, nos partenaires confèrent au produit Yako Assurance Obsèques une crédibilité garantie.
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
      },
      {
        id:4,
        img:'/assets/img/product/epargne.png',
        title:'Epargne',
        desc:'Sécurisez votre avenir',
        service:'/assets/img/services/doihoo.png',
        text :<> 
              <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button style={{ fontSize:'40px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Cadence</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button style={{ fontSize:'40px'}} className="nav-link" id="license-tab" data-bs-toggle="tab" data-bs-target="#license" type="button" role="tab" aria-controls="license" aria-selected="false">Performa</button>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'20px', color:'black' }}><b style={{ fontSize:'35px', color:'#2b6338' }}>Cadence</b> est un produit d’épargne à multi-usage :</p>
                              <br />
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Pour constituer un complément de revenus à la retraite.
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Pour réaliser un projet d’investissement.
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Pour financer les études des enfants.
                                </li></p>
                              </ol> 
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Cadence c’est une <b style={{ color:'#2b6338' }}>épargne flexible et adaptable</b></p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><span style={{ fontSize:'18px', color:'black' }}>Vous pouvez vous construire un contrat sur mesure en fonction de vos besoins.</span>
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><span style={{ fontSize:'18px', color:'black' }}>Vous pouvez opter pour le mode de paiement qui vous convient au terme du contrat : versement d’un capital unique ou d’une rente certaine.</span>
                                </li></p>
                              </ol>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="license" role="tabpanel" aria-labelledby="license-tab">
                            <div className="privacy-item mb-15">
                            <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}><b style={{ fontSize:'35px', color:'#2b6338' }}>Performa</b> est un produit multi supports qui permet de constituer et faire rapidement fructifier votre épargne.</p>  
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Vous profitez de la forte rentabilité des valeurs sélectionnées du marché boursier régional et de la combinaison avec l’épargne à un taux fixe garanti de 3,5%.</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Ce produit est né de l’expertise de spécialistes en gestion de contrats d’assurance et en gestion d’actifs que sont YAKO AFRICA ASSURANCES VIE et BNI.</p> 
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>4 bonnes raisons de souscrire à PERFORMA:</p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>PERFORMA , </b>c’est plus de rentabilité grace aux OPCVM
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>PERFORMA , </b>c’est plus de sécurité avec 60% de votre épargne rentabilisé à un taux fixe garanti de 3,5% 
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>PERFORMA , </b>c’est de la prévoyance avec un capital versé pour vous ou pour vos bénéficiaires en cas d’invalidité absolue et définitive ou de décès avant le terme du contrat
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>PERFORMA , </b>c’est plus de gain fiscaux
                                </li></p>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
      },
      {
        id:5,
        img:'/assets/img/product/education.png',
        title:'Education',
        desc:"Assurez l'avenir de vos enfants",
        service:'/assets/img/services/prevoyance.png',
        text :<> 
              <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button style={{ fontSize:'32px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Cadence Education</button>
                            </li>
                            
                            <li className="nav-item" role="presentation"></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'20px', color:'black' }}>Avec <b style={{ fontSize:'35px', color:'#2b6338' }}>Cadence Education Plus</b>, vous prévoyez et financez les études de vos enfants en toute sérénité.</p>
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}><b style={{color:'#2b6338' }}>Cadence Education plus, </b>C’est un produit d’assurance qui garantit le financement des études supérieures de votre enfant tout en assurant la continuité de la scolarité de l’enfant en cas de décès de l’assuré avant le terme du contrat.</p>
                              <br />
                              {/* <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Cadence Retraite Pension</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour constituer un complément de revenus à la retraite</p>
                              <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Cadence Education</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour financer les études des enfants.</p> 
                              <p className="services-text mb-1" style={{ fontSize:'25px', color:'black' }}><b style={{ color:'#2b6338' }}>Cadence Investissement</b></p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour réaliser un investissement.</p>  
                              <br /> */}
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'#f9b233', textDecoration:'underline' }}><b>3 bonnes raisons de choisir Cadence Éducation Plus</b></p>
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Cadence Education Plus permet de bénéficier de :</p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Un capital pour financer les études de votre enfant au terme du contrat 
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Une rente en cas de décès de l’assuré avant le terme du contrat pour assurer la continuité des études de votre enfant
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Un capital dit « frais d’obsèques » pour faire face aux charges liées aux obsèques de l’assuré avant le terme du contrat.
                                </li></p>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
      },
      {
        id:6,
        img:'/assets/img/product/placement.png',
        title:'Placement',
        desc:"Gagnez plus d'argent",
        service:'/assets/img/services/obseques.png',
        text :<> 
              <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button style={{ fontSize:'32px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">DOIHOO</button>
                            </li>
                            
                            <li className="nav-item" role="presentation"></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>C’est un contrat d’assurance individuel de capitalisation qui permet de: </p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Constituer une épargne
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Et gagner en plus lors des <b>31 tirages</b> effectués sur la durée de vie de votre contrat jusqu’à <b style={{color:'#2b6338' }}>100%</b> du capital souscrit.
                                </li></p>
                              </ol>
                              <br />
                              {/* <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Pour être éligible, votre contrat doit avoir <b style={{color:'#2b6338' }}>trois(3) mois 
                              d’ancienneté et être à jour des cotisations</b> au moment des tirages. <b style={{color:'#2b6338' }}>DOIHOO</b> vous paie immédiatement en cas de tirage au sort, un bonus de 
                              <b style={{color:'#2b6338' }}>20%</b> du capital souscrit. Si vous êtes tiré au sort, votre contrat ne prend pas fin et vous continuez de participer aux prochains tirages 
                              au sort pourvu que vous soyez à jour de vos cotisations. Au terme du contrat, en plus des bonus gagnés par tirage au sort, <b style={{color:'#2b6338' }}>DOIHOO</b> vous 
                              paie le montant de l’épargne que vous avez constituée. Ce n’est pas tout ! <b style={{color:'#2b6338' }}>YAKO AFRICA Assurances vie</b> vous offre à la souscription d’un 
                              contrat <b style={{color:'#2b6338' }}>DOIHOO</b>, un ticket à grattage <b style={{color:'#2b6338' }}>LONACI</b>.</p>  
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'#f9b233', textDecoration:'underline' }}><b>Quel est Le montant des cotisations et des capitaux à souscrire ?</b></p>
                              <br />
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Vous avez le choix entre les trois (3) options suivantes :</p>
                              <Table striped bordered hover>
                                <thead style={{ verticalAlign:'middle' }}>
                                  <tr>
                                    <th style={{color:'#fff', background:"#2b6338" }}>Option</th>
                                    <th style={{color:'#fff', background:"#2b6338", width:"120px" }}>Montant cotisation mensuelle</th>
                                    <th style={{color:'#fff', background:"#2b6338", width:"100px" }}>Durée du contrat (en année)</th>
                                    <th style={{color:'#fff', background:"#2b6338", width:"150px" }}>Capital à terme</th>
                                    <th style={{color:'#fff', background:"#2b6338", width:"150px" }}>Bonus de capital si tiré au sort</th>
                                    <th style={{color:'#fff', background:"#2b6338", width:"150px" }}>Bonus max de capital (** si tiré au sort 5 fois)</th>
                                  </tr>
                                </thead>
                                <tbody style={{ verticalAlign:'middle' }}>
                                  <tr>
                                    <td style={{color:'#fff', background:"#2b6338" }}>Argent</td>
                                    <td>10 400FCFA</td>
                                    <td>8</td>
                                    <td>1 000 000FCFA</td>
                                    <td>200 000FCFA</td>
                                    <td>1 000 000FCFA</td>
                                  </tr>
                                  <tr>
                                    <td style={{color:'#fff', background:"#2b6338" }}>Or</td>
                                    <td>20 800FCFA</td>
                                    <td>8</td>
                                    <td>2 000 000FCFA</td>
                                    <td>400 000FCFA</td>
                                    <td>2 000 000FCFA</td>
                                  </tr>
                                  <tr>
                                    <td style={{color:'#fff', background:"#2b6338" }}>Diamant</td>
                                    <td>31 000FCFA</td>
                                    <td>8</td>
                                    <td>3 000 000FCFA</td>
                                    <td>600 000FCFA</td>
                                    <td>3 000 000FCFA</td>
                                  </tr>
                                </tbody>
                              </Table>
                              <br /> */}
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'#f9b233', textDecoration:'underline' }}><b>Qu’est-ce que vous gagnez avec DOIHOO ?</b></p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Vous bénéficiez d’un taux de rémunération de <b>3.5%</b> garanti
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Vous gagnez un bonus de <b>20%</b> du capital souscrit si vous êtes tiré au sort
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Vous percevez au terme de votre contrat l’épargne constituée
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Vous pouvez augmenter vos chances de gagner en souscrivant à plusieurs contrats
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}>Avec le ticket à grattage de la <b>LONACI</b> offert à la souscription, vous pouvez gagner jusqu’à <b>30 000 000 FCFA</b>.
                                </li></p>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
      },
      {
        id:7,
        img:'/assets/img/product/placement.png',
        title:'YAKO AFRICA',
        soustitle:'Stratégie IFC',
        desc:"Gérez vos actifs et bénéficiez d'avantages fiscaux" ,
        service:'/assets/img/services/pension.jpg',
        text :<> 
              <div className="privacy-content-area">
        <div className="container">
          <div className="row">
          <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">

                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" style={{padding:'0 15px'}} role="presentation">
                    <button style={{ fontSize:'30px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">YAKO AFRICA</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">
                  <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                    <div className="privacy-item mb-55">
                      {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Ce contrat permet à votre entreprise de disposer d’un outil puissant de gestion d’actifs et de risques piloté par <b style={{ color:'#2b6338' }}>YAKO AFRICA ASSURANCES VIE </b>afin de planifier les indemnités de Fin de Carrière de votre personnel.</p>
              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>L’externalisation des IFC auprès de <b style={{ color:'#2b6338' }}>YAKO AFRICA ASSURANCES VIE</b> vous fait bénéficier d’avantages fiscaux.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
          </>
      },
      {
        id:8,
        img:'/assets/img/product/retraite.png',
        title:'EMPLOYEE BENEFIT-RETRAITE',
        soustitle:'Retraite',
        desc:"Fidelisez vos employés",
        service:'/assets/img/services/strategy.png',
        text :<>
              <div className="privacy-content-area">
        <div className="container">
          <div className="row">
          <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">

                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" style={{padding:'0 15px'}} role="presentation">
                    <button style={{ fontSize:'30px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">EMPLOYEE BENEFIT-RETRAITE</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">
                  <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                    <div className="privacy-item mb-55">
                      {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Fidelisez vos employés en leur garantissant une retraite paisible avec les plans d'Epargne retraite <b style={{ color:'#2b6338' }}>EMPLOYEE BENEFIT</b>.</p>
                      <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>les plans d'Epargne retraite <b style={{ color:'#2b6338' }}>EMPLOYEE BENEFIT</b> vous permet d’aider vos salariés à se constituer une épargne au vu de   préparer leur retraite.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
              
          </>
      },
      {
        id:9,
        img:'/assets/img/product/epargne.png',
        title:'EMPLOYEE BENEFIT - EPARGNE ENTREPRISES',
        soustitle:'Epargne',
        desc:"Aidez vos salariés à se réaliser",
        service:'/assets/img/services/strategy.png',
        text :<> 
              <div className="privacy-content-area">
        <div className="container">
          <div className="row">
          <div className="col-xl-4 col-lg-4">
              <div className="privacy-nav mb-55">
                <div className="privacy-nav-wrapper">

                  <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                    <li className="nav-item" style={{padding:'0 15px'}} role="presentation">
                    <button style={{ fontSize:'25px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">EMPLOYEE BENEFIT- EPARGNE ENTREPRISES</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="privacy-content-wrapper">
                <div className="tab-content" id="privacy-nav-content">
                  <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                    <div className="privacy-item mb-55">
                      {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                      <p className="services-text mb-25" style={{ fontSize:'18px', color:'black' }}><b style={{ color:'#2b6338' }}>Les Plans d'Epargne Salariaux EMPLOYEE BENEFIT</b> permettent aux Entreprises  d'aider leurs salariés à se constituer un capital à moyen terme en vue de :</p>
                      <ol>
                        <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>Acquérir un Logement</b>
                        </li></p>
                        <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b> Réaliser un Projet personnel</b>
                        </li></p>
                        <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b> Bénéficier d'une couverture santé une fois à la retraite </b>
                        </li></p>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
      },
      {
        id:10,
        img:'/assets/img/product/prevoyance.png',
        title:'EMPLOYEE BENEFIT- PRÉVOYANCE ENTREPRISES',
        soustitle:'Prévoyance',
        desc:"Soutenez vos employés",
        service:'/assets/img/services/obseques.png',
        text :<> 
              <div className="privacy-content-area">
                <div className="container">
                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="privacy-nav mb-55">
                        <div className="privacy-nav-wrapper">

                          <ul className="nav nav-tabs flex-column" id="privacy-nav" role="tablist">
                            <li className="nav-item" style={{padding:'0 15px'}} role="presentation">
                            <button style={{ fontSize:'25px'}} className="nav-link active" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">EMPLOYEE BENEFIT- EPARGNE ENTREPRISES</button>
                            </li>
                            
                            <li className="nav-item" role="presentation"></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="privacy-content-wrapper">
                        <div className="tab-content" id="privacy-nav-content">
                          <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                            <div className="privacy-item mb-55">
                              {/* <h4 className="privacy-title mb-20" style={{ fontSize:'40px',color:'#2b6338', fontWeight:"400" }}>Cadence</h4> */}
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}><b style={{ color:'#2b6338' }}>Le plan de PREVOYANCE ENTREPRISES</b> est un contrat de prévoyance collective qui permet aux  entreprises d'apporter un soutien financier et moral conséquent à leurs salariés ,dans les moments  de douleurs pouvant survenir à tout moment:  le décès , les accidents invalidants , la perte d'un  proche...</p>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>En contrepartie du versement périodique d'une cotisation collective, ce contrat garantit le  versement d'un capital défini d'avance :</p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>Au salarié ( dans le cas de la perte d'un proche )</b>
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>A ses bénéficiaires ( dans le cas ou de l'invalidé absolue et définitive du décès du salarié)</b>
                                </li></p>
                              </ol>
                              <p className="services-text mb-1" style={{ fontSize:'18px', color:'black' }}>Ce produit permet :</p>
                              <ol>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>D'apporter une solide assistance financière au salarié éploré ou à sa famille avec des capitaux  plus importants que ceux fixés par le code du travail (article 16.12 du code du travail et 40 de  la convention collective interprofessionnelle ) généralement limités à 5 ou 6 mois de salaire.</b>
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>D'éviter des sorties brusques de trésorerie des caisses de l'entreprise</b>
                                </li></p>
                                <p><li style={{ listStyleType:'disclosure-closed', color:'#2b6338', fontSize:'18px' }}><b>De renforcer l'image sociale de l'organisation vis à vis de ses salariés</b>
                                </li></p>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
      },
      {
        id:11,
        img:'/assets/img/icon/2/yako-senior.png',
        title:'Plan Vert Retraite BNI',
        service:'/assets/img/services/pension.jpg',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}>Garantissez votre avenir avec le <b style={{ color:'#2b6338' }}>PLAN VERT RETRAITE DE LA BNI.</b><br />
              A la retraite, les revenus chutent brutalement et les charges augmentent. N&apos;attendez pas la retraite pour réagir.<br />
              Pour vous, la <b style={{ color:'#2b6338' }}>BNI </b>en partenariat avec <b style={{ color:'#2b6338' }}>YAKO AFRICA ASSURANCES VIE </b>a mis en place un nouveau produit dénommé <b style={{ color:'#2b6338' }}>PLAN VERT RETRAITE DE LA BNI.</b><br />
              <b style={{ color:'#2b6338' }}>PLAN VERT RETRAITE DE LA BNI </b>vous garantit dès le premier mois qui suit votre départ à la
              retraite, le versement d&apos;une rente en remplacement de votre salaire. Profitez dès aujourd&apos;hui de l&apos;offre exceptionnelle du <b style={{ color:'#2b6338' }}>PLAN VERT RETRAITE DE LA BNI </b>et entamez votre nouvelle vie de retraité en toute sérénité.
              </p>
          </>
      },
      {
        id:12,
        img:'/assets/img/icon/2/performa.png',
        title:'Assur Compte BNI',
        service:'/assets/img/services/obseques.png',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}>Souscrite par la <b style={{ color:'#2b6338' }}>BNI </b>en faveur des personnes physiques titulaires de comptes.<br />
              En cas de décès ou d&apos;invalidité Absolue et Définitive (IAD) du titulaire du compte, <b style={{ color:'#2b6338' }}>YAKO AFRICA </b>paie un capital aux bénéfici aires par l&apos;intermédiaire de la BNI.
              </p>
          </>
      },
      {
        id:13,
        img:'/assets/img/icon/2/cadence.png',
        title:'Securicompte BPCI',
        service:'/assets/img/services/obseques.png',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}>La présente assurance est souscrite par la <b style={{ color:'#2b6338' }}>BPCI </b>en​ faveur​ des personnes physiques titulaires de comptes. <br />
              Elle a pour objet de garantir le paiement d&apos;un capital en cas de décès ou d&apos;invalidité absolue et définitive du titulaire du compte.
              </p>
          </>
      },
      {
        id:14,
        img:'/assets/img/icon/2/ifc.png',
        title:'Parrainage de compte Cofina',
        service:'/assets/img/services/parrainage.png',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}><b style={{ color:'#2b6338', textDecoration:'underline' }}>En quoi consiste le produit Parrainage de compte COFINA ?</b><br />
              Le produit <b style={{ color:'#2b6338' }}>Parrainage de compte COFINA </b>est un contrat de prévoyance adossé au compte des clients de la <b style={{ color:'#2b6338' }}>Compagnie Africaine de Crédit.</b><br />
              Il garantit, en cas de sinistre, le paiement d&apos;un capital égal au solde moyen du compte sur les six  (06) derniers mois précédant le sinistre.
              </p>
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}><b style={{ color:'#2b6338', textDecoration:'underline' }}>Quels sont les capitaux garantis par le produit Parrainage de compte COFINA ?</b><br />
              Le montant des capitaux est compris entre <b style={{ color:'#2b6338' }}>50 000 FCFA </b>et <b style={{ color:'#2b6338' }}>1 000 000 FCFA.</b>
              </p>
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}><b style={{ color:'#2b6338', textDecoration:'underline' }}>Qui peut souscrire au produit Parrainage de compte COFINA ?</b><br />
              Toute personne physique domiciliée en Côte d&apos;Ivoire titulaire d&apos;un compte (Chèque et/ou d&apos;Epargne) à la COFINA, âgée d&apos;au moins 18 ans.
              </p>
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}><b style={{ color:'#2b6338', textDecoration:'underline' }}>Combien coûte le produit Parrainage de compte COFINA ?</b><br />
              Le montant de la  prime en couverture de la garantie décès toutes causes ou invalidité absolue et définitive est de <b style={{ color:'#2b6338' }}>5000 FCFA par an.</b>
              </p>
          </>
      },
      {
        id:15,
        img:'/assets/img/icon/2/benefits.png',
        title:'Performa BNI',
        service:'/assets/img/services/multisupport.png',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}>Le produit <b style={{ color:'#2b6338' }}>PERFORMA Assurances Vie multisupports </b>est également commercialisé dans le réseau des agences de la <b style={{ color:'#2b6338' }}>BNI.</b> <br />
              Elle a pour objet de garantir le paiement d'un capital en cas de décès ou d'invalidité absolue et définitive du titulaire du compte.
              </p>
          </>
      },
      {
        id:16,
        img:'/assets/img/icon/2/benefits.png',
        title:'Parrainage de compte CAC',
        service:'/assets/img/services/parrainage.png',
        text :<> 
              <p className="services-text mb-25" style={{ fontSize:'20px', color:'black' }}>Elle est souscrite par <b style={{ color:'#2b6338' }}>C.A.C (Compagnie Africaine de Crédit) </b>en faveur des personnes physiques titulaires de comptes chèques et/ou épargne.<br />
              Elle a pour objet de garantir le paiement d'un capital en cas de décès ou d'invalidité absolue et définitive du titulaire du compte.
              </p>
          </>
      },
      {
        id:17,
        icon:'flaticon-route',
        title:'Transportation'
      },
      {
        id:18,
        icon:'flaticon-career',
        title:'Development'
      },
      {
        id:19,
        icon:'flaticon-leaf',
        title:'Environment'
      },

      //home thirteen Policy positions services
      {
        id:20,
        img:'assets/img/event/event-img-1.jpg',
        title:<>The Economy of the US: What are the <br /> Weakest Spots?</>,
        date:'APRIL 3, 2022'
      },
      {
        id:21,
        img:'assets/img/event/event-img-2.jpg',
        title:<>The weakest spots new the Economy <br/> of the us what are</>,
        date:'APRIL 5, 2022'
      },
      {
        id:22,
        img:'assets/img/event/event-img-3.jpg',
        title:<>Lets meet for protecting The Economy <br/> of the canada: eco</>,
        date:'APRIL 7, 2022'
      },
      {
        id:23,
        ville: "Yakro",
        adresse: "rue des banques à l'immeuble AIDA",
        tel: `+(225) 05 05 96 21 81`
    },
    {
        id: 24,
        ville: "Abengourou",
        adresse: "Quartier Commerce en Face du Grand Marché ,près de la Pharmacie du Marché",
        tel: `+(225) 07 07 91 57 90`
    }
]

export default servicesData;