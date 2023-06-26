import Link from 'next/link';
import Particulier from "../../data/Produits";

const ServicesList = () => {
  return (
    <>
      <div className="services-list-area pt-50 pb-110" style={{ backgroundImage: "linear-gradient(to bottom, rgba(60, 60, 59, 0.6), rgba(43, 99, 56)), url('/assets/img/services/particulier.jpg')", backgroundPosition: 'top top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
        
      <h4 className="pb-80" style={{ textAlign: 'center', color:'white', fontSize:'50px', fontWeight:'bold' }}>Particuliers</h4>
        
        <div className="row">
        <div class="wrapper">
            {
              Particulier.slice(0, 6).map(item => (
                
                <div key={item.id} className="card">
                  <h3 className="card-title"><a href={`/service-details/${item.id}`}>{item.title}</a></h3>
                    <p className="card-content">{item.desc}</p>
                    <a href={`/service-details/${item.id}`} className="card-btn">En savoir plus</a>
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

