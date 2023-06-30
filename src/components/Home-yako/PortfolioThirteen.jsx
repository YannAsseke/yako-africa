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
                        <div className="BlocText">
                          <h1>
                            <a href={`/${item.id}`} style={{ fontSize:"20px", fontWeight:"bold" }}>{item.title}</a>
                          </h1>
                        </div>
                        <div className="ButtonText">
                          <a href="https://laloyalevie.com/espace-client/login.php" target="_blank">ACCÈS À VOS COMPTES</a>
                        </div>
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
                  <div className="BlocText">
                  <p style={{ lineHeight:"20px", margin:"auto" }}>
                    <a href="/about" style={{ fontSize:"20px", fontWeight:"bold" }}>Connaître Yako Africa</a>
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
      </div>
    </>
  );
};

export default PortfolioThirteen;