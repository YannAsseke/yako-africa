import Link from 'next/link';
import Particulier from "../../data/Produits";

const ServicesList = () => {
  return (
    <>
      <div className="services-list-area pt-50 pb-110" style={{ backgroundImage: "linear-gradient(to bottom, rgba(60, 60, 59, 0.6), rgba(43, 99, 56)), url('/assets/img/services/bancassurance.jpg')", backgroundPosition: 'top top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
      <h4 className="pb-80" style={{ textAlign: 'center', color:'white', fontSize:'50px', fontWeight:'bold' }}>Professionnels & Entreprises</h4>
      <div className="row">
        <div class="wrapper">
            {
              Particulier.slice(9, 16).map(item => (
                
                <div key={item.id} className="card">
                  <h2 className="card-title"><a href={`/service-details/${item.id}`}>{item.title}</a></h2>
                  <h3 className="card-title-2"><a href={`/service-details/${item.id}`}></a></h3>
                    <p className="card-content">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <a href={`/service-details/${item.id}`} className="card-btn">En savoir plus</a>
                </div>
                
                
              ))
            }
        </div>
      </div>
      </div>
    </>
  );
};

export default ServicesList;

// import Link from 'next/link';
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation } from "swiper";
// import servicesData from '../../data/servicesData';

// const ServicesFour = () => {
//   return (
//     <>
//       <section id="Services" className="pt-[40px]">
//       <div className="business-feature-area-2 ">
//           <div class="business-feature-content-2">
//             <div class="container">
//               <div class="row">
//                 <div class="col feature-2">
//                   <div class="row">
//                     <div class="col">
//                       <div class="box-2-1">
//                       <img src="/assets/img/logo/yako-senior.png" alt="Yako obsèques" style={{ maxWidth:'50%'}}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Yako Assurance Obsèques</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" class="aos-init aos-animate">YAKO Assurance Obsèques engage YAKO AFRICA ASSURANCES VIE  à mettre à la disposition du bénéficiaire désigné, un ensemble de prestations au décès d&apos;un assuré.
//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 class="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col feature-2">
//                   <div class="row">
//                     <div class="col">
//                       <div class="box-2-1">
//                         <img src="/assets/img/logo/performa.png" alt="Performa" style={{ maxWidth:'35%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Performa</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" class="aos-init aos-animate">PERFORMA est  le premier contrat d’assurance vie multisupports de la zone CIMA.
//                           C&apos;est un  contrat d’épargne qui vous permet d’avoir les avantages liés à 2 types d’épargne à savoir : l’épargne classique à 3,5% et l’épargne basée sur les valeurs mobilières (actions, obligations, OPCVM).

//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 class="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col feature-2">
//                   <div class="row">
//                     <div class="col">
//                       <div class="box-2-1">
//                       <img src="/assets/img/logo/cadence.png" alt="Cadence" style={{ maxWidth:'30%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Cadence</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" class="aos-init aos-animate">Cadence est un produit d&apos;assurance vie multi-usage avec trois déclinaisons :
// Nos produits Individuels <b>Cadence Retraite Pension</b> pour constituer un complément de revenus à la retraite, <b>Cadence Education </b>plus pour financer les études des enfants et <b>Cadence Investissement</b> pour réaliser un investissement.

//                         </h5>
//                         <a>
//                           <h5 class="pt-[23px]">Voir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col feature-2">
//                   <div class="row">
//                     <div class="col">
//                       <div class="box-2">
//                       <img src="/assets/img/logo/doihoo.png" alt="Doihoo" style={{ maxWidth:'35%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Doihoo</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" class="aos-init aos-animate">Doihoo permet au souscripteur de se constituer une épargne sur 8 ans et de bénéficier, s&apos;il est tiré au sort d&apos;un capital égal à 20% de son capital souhaité au terme. Il a la possibilité d&apos;être tiré 5 fois durant la vie du contrat.<br/><p> NB : le tirage n&apos;affecte pas le capital au terme</p>

//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 class="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col feature-2">
//                 </div>
//                 <div class="col feature-2">
//                 </div>
//               </div>
//               </div>
//           </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default ServicesFour;