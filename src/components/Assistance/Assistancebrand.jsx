import Link from 'next/link';
import Particulier from "../../data/Produits";
import Readmore from "../../ReadMore";

const Assistancebrand = () => {
  return (
    <>
    <div className="services-list-area pt-50" style={{ backgroundImage: "linear-gradient(to bottom, rgba(60, 60, 59, 0.6), #f9b233), url('/assets/img/services/assistance.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
      <h4 className="pb-80" style={{ textAlign: 'center', color:'white', fontSize:'50px', fontWeight:'bold' }}>Services & Assistance</h4>
      <div className="row" style={{ top:"50%", left:"2%", margin:"auto", width:"95%" }}>
        <div className="wrapper-assi" style={{ margin:"auto" }}>
                
                <div className="card" style={{ textAlign:"center", backgroundColor:"#2b6338" }}>
                  <h2 className="card-title" style={{ fontSize:"20px", }}>J'ai une urgence en cours</h2>
                  <h3 className="card-title-2"></h3>
                    <p className="card-content" style={{ color:"#fff" }}>Vous avez besoin d'un document contractuel pour votre dossier bancaire, vous avez besoin d'une attestation...</p>
                    <p className="card-content" style={{ color:"#fff" }}>notre service d'assistance est là pour vous aider en cas de pépin.</p>
                    <a href="tel:+2252720331500" className="card-btn" style={{ margin: "auto", textAlign:"center", padding: "10px 1px", fontSize: "18px", width: "80%", backgroundColor:"#fff" }}><i className='fa fa-phone' style={{ paddingRight:"10px" }}></i>+(225) 27 20 33 15 00</a>
                </div>
                <div className="card" style={{ textAlign:"center", backgroundColor:"#2b6338" }}>
                  <h2 className="card-title" style={{ fontSize:"20px" }}>J'ai un sinistre à déclarer</h2>
                  <h3 className="card-title-2"></h3>
                    <p className="card-content" style={{ color:"#fff" }}>Vous venez de perdre un parent, vous avez enterré votre parent sans prévenir l'assistance, vous avez perdu le contrat d'assurance avec le sinistre...</p>
                    <p className="card-content" style={{ color:"#fff" }}>Déclarez votre sinistre en ligne</p>
                    <a href="" className="card-btn" style={{ margin: "auto", textAlign:"center", padding: "10px 1px", fontSize: "18px", width: "80%", backgroundColor:"#fff" }}>Déclarer un sinistre</a>
                </div>
                <div className="card" style={{ textAlign:"center", backgroundColor:"#2b6338" }}>
                  <h2 className="card-title" style={{ fontSize:"20px" }}>J'ai une autre demande</h2>
                  <h3 className="card-title-2"></h3>
                    <p className="card-content" style={{ color:"#fff" }}>Consultation et gestion de vos contrats, téléchargement d’une attestation, échanges avec YAKO AFRICA ASSURANCES VIE…</p>
                    <p className="card-content" style={{ color:"#fff" }}>Vous avez la main.</p>
                    <a href="tel:+2252720331500" className="card-btn" style={{ margin: "auto", textAlign:"center", padding: "10px 1px", fontSize: "18px", width: "80%", backgroundColor:"#fff" }}><i className='fa fa-phone' style={{ paddingRight:"10px" }}></i>+(225) 27 20 33 15 00</a>
                </div>
        </div>
      </div>
      
    </div>
    <Readmore />
    </>
  );
};

export default Assistancebrand;

// import Link from 'next/link';
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation } from "swiper";
// import servicesData from '../../data/servicesData';

// const ServicesFour = () => {
//   return (
//     <>
//       <section id="Services" className="pt-[40px]">
//       <div className="business-feature-area-2 ">
//           <div className="business-feature-content-2">
//             <div className="container">
//               <div className="row">
//                 <div className="col feature-2">
//                   <div className="row">
//                     <div className="col">
//                       <div className="box-2-1">
//                       <img src="/assets/img/logo/yako-senior.png" alt="Yako obsèques" style={{ maxWidth:'50%'}}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Yako Assurance Obsèques</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" className="aos-init aos-animate">YAKO Assurance Obsèques engage YAKO AFRICA ASSURANCES VIE  à mettre à la disposition du bénéficiaire désigné, un ensemble de prestations au décès d&apos;un assuré.
//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 className="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col feature-2">
//                   <div className="row">
//                     <div className="col">
//                       <div className="box-2-1">
//                         <img src="/assets/img/logo/performa.png" alt="Performa" style={{ maxWidth:'35%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Performa</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" className="aos-init aos-animate">PERFORMA est  le premier contrat d’assurance vie multisupports de la zone CIMA.
//                           C&apos;est un  contrat d’épargne qui vous permet d’avoir les avantages liés à 2 types d’épargne à savoir : l’épargne classique à 3,5% et l’épargne basée sur les valeurs mobilières (actions, obligations, OPCVM).

//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 className="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col feature-2">
//                   <div className="row">
//                     <div className="col">
//                       <div className="box-2-1">
//                       <img src="/assets/img/logo/cadence.png" alt="Cadence" style={{ maxWidth:'30%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Cadence</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" className="aos-init aos-animate">Cadence est un produit d&apos;assurance vie multi-usage avec trois déclinaisons :
// Nos produits Individuels <b>Cadence Retraite Pension</b> pour constituer un complément de revenus à la retraite, <b>Cadence Education </b>plus pour financer les études des enfants et <b>Cadence Investissement</b> pour réaliser un investissement.

//                         </h5>
//                         <a>
//                           <h5 className="pt-[23px]">Voir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col feature-2">
//                   <div className="row">
//                     <div className="col">
//                       <div className="box-2">
//                       <img src="/assets/img/logo/doihoo.png" alt="Doihoo" style={{ maxWidth:'35%' }}/>
//                         <h1 style={{color : '#f9b233', fontWeight:'700' }}>Doihoo</h1>
//                         <p></p>
//                         <h5 data-aos-duration="1200" className="aos-init aos-animate">Doihoo permet au souscripteur de se constituer une épargne sur 8 ans et de bénéficier, s&apos;il est tiré au sort d&apos;un capital égal à 20% de son capital souhaité au terme. Il a la possibilité d&apos;être tiré 5 fois durant la vie du contrat.<br/><p> NB : le tirage n&apos;affecte pas le capital au terme</p>

//                         </h5>
//                         <p></p>
//                         <a href="#Contactes">
//                           <h5 className="pt-[30px]">En savoir plus &#8250;</h5>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col feature-2">
//                 </div>
//                 <div className="col feature-2">
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