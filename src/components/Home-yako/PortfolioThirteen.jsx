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
                    <div key={item.id} className="col-sm-4 boxOne" style={{ background: "url(/assets/img/project/5/"+item.img+") no-repeat scroll 0 0 transparent", backgroundPosition:"center"}} >
                      
                      <div className="BlocBandeauText">
                        <Link href={`/${item.id}`}>
                            <a  style={{ fontSize:"20px", fontWeight:"bold" }}>
                              <div className="BlocText">
                                  {item.title}
                              </div>
                            </a>
                          
                        </Link>
                          <a href="https://laloyalevie.com/espace-client/login.php" target="_blank"><div className="ButtonText">ACCÈS À VOS COMPTES</div></a>
                        
                      </div>
                    </div>
                  )
                })
              }

          
          </div>
          <div className="row" style={{   padding: "0" }}>
            <div className='clearBoxFour' style={{ padding:"0" }}>
              <div className="col-sm-12 boxFour">
                <div className="BlocBandeauTextFour">
                  <Link href="/qui-sommes-nous">
                    <a style={{ fontSize:"20px", fontWeight:"bold" }}>
                      <div className="BlocText">
                      Connaître Yako Africa
                      </div>
                    </a>
                  </Link>
                  
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
      </div>
    </>
  );
};

export default PortfolioThirteen;