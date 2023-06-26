import Link from 'next/link';
import portfolioData from '../../data/portfolioData';


const portfolioItemBig = portfolioData.slice(140, 143)

const PortfolioThirteen = () => {
  return (
    <>
    
      <div className="tp-political-project">
        <div className="container-fluid" style={{ padding:"0" }}>
          <div className="row">

          
            
              {
                portfolioItemBig.map(item => {
                  return (
                    <div key={item.id} className="col-sm-4 tppg-project" style={{ padding:"0", height:"500px" }}>
                      <div className="tppg-project__thumb" style={{height:"500px" }}>
                        <div className="tppg-project__thumb-image">
                          <Link href={`/${item.id}`}>
                            <a>
                              <img src={item.img} alt="project-img"/>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div class="BlocBandeauText">
                        <div class="BlocText">
                          <h2>
                            <a href={`/${item.id}`} style={{ fontSize:"17px" }}>{item.title}</a>
                          </h2>
                          {/* <p class="bodytext">&nbsp;</p> */}
                        </div>
                          <div class="ButtonText">
                            <a href="https://laloyalevie.com/espace-client/login.php" target="_blank">ACCÈS À VOS COMPTES</a>
                          </div>
                        </div>
                      {/* <div className="tppg-project__content">
                        <span className="tppg-project-tag mb-10">YAKO</span>
                        <h4 className="tppg-project-title">
                          <Link href={`/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                      </div> */}
                    </div>
                  )
                })
              }
          </div>
          <div className="row">
              <div className="col-sm-12 tppg-project" style={{ padding:"0", height:"500px" }}>
                <div className="tppg-project__thumb" style={{height:"500px" }}>
                  <div className="tppg-project__thumb-image">
                    <Link href="">
                      <a>
                        <img src="assets/img/project/5/institution.jpg" alt="project-img" style={{ backgroundSize:"cover", backgroundPosition: "center" }}/>
                      </a>
                    </Link>
                  </div>
                </div>
                <div class="BlocBandeauText">
                  <div class="BlocText">
                    <h2>
                      <a href="/about"  style={{ fontSize:"17px" }}>Connaître Yako Africa</a>
                    </h2>
                    <p class="bodytext">&nbsp;</p>
                    <p class="bodytext">
                      <a href="/about">Fondation, RSE, recrutement...</a>
                    </p>
                  </div>
                </div>
                {/* <div className="tppg-project__content">
                  <span className="tppg-project-tag mb-10">YAKO</span>
                  <h4 className="tppg-project-title">
                    <Link href={`/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                </div> */}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioThirteen;