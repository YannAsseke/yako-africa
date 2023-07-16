import Link from 'next/link';
import Particulier from "../../data/Produits";

const ServicesList = () => {
  return (
    <>
      <div className="services-list-area pt-50 pb-110" style={{ backgroundImage: "linear-gradient(to bottom, rgba(60, 60, 59, 0.6), #f9b233), url('/assets/img/services/particulier.jpg')", backgroundPosition: 'top top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
        
      <h4 className="pb-80" style={{ textAlign: 'center', color:'white', fontSize:'50px', fontWeight:'bold' }}>Particuliers</h4>
        
        <div className="row">
        <div className="wrapper">
            {
              Particulier.slice(1, 6).map(item => (
                
                <div key={item.id} className="card" style={{ textAlign:"center", backgroundColor:"#2b6338" }}>
                  <h3 className="card-title"><a href={`/produits-details/${item.id}`} style={{ color:"#fff" }}>{item.title}</a></h3>
                    <p className="card-content" style={{ backgroundColor:"#fff",width:"100px", height:"90px", borderRadius:"50px", margin:"auto" }}><img style={{ fontSize:"50px",width:"100px", padding:"10px" }} src={item.img} alt="services-sm-img" /></p>
                    <p className="card-content" style={{ padding:"20px 0", margin:"auto", fontSize: "18px", color:"#fff" }}>{item.desc}</p>
                    <Link href={`/produits-details/${item.id}`}  ><a className="card-btn" style={{ margin: "auto", textAlign:"center", padding: "10px 1px", fontSize: "18px", width: "80%", backgroundColor:"#fff" }}>En savoir plus</a></Link>
                </div>
                
                
              ))
            }
        </div>
      </div>
          
      </div>
      

          {/* <div  className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpservices tpservices-2 text-center mb-30">
                    <div className="tpservices__icon mb-30">
                      <i><img src={item.img} alt={item.title} style={{ maxWidth:'0%' }}/></i>
                    </div>
                    <div className="tpservices__content">
                      <h4 className="tpservices__title mb-25">
                        <Link href={`/service-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <div className="tpservices__btn mt-30">
                        <Link href={`/service-details/${item.id}`}>
                          <a>
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

    </>
  );
};

export default ServicesList;

