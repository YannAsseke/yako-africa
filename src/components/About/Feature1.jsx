import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const VideoAreaFour = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative my-[20px]">
        <div className="tpbsvideo-left text-center p-relative">
          <div className="tpbs-left-image" style={{ backgroundImage: `url(assets/img/about/feature.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <p>YAKO AFRICA ASSURANCES VIE COTE D&apos;IVOIRE est une compagnie d&apos;Assurance créée le 1er avril 2003. Elle est agréée par le Ministère de l&apos;Économie et des Finances, sous le numéro 040/MEFP/CAB après avis favorable de la Commission Régionale de Contrôle des Assurances (CRCA) et de la Conférence Interafricaine des Marchés d&apos;Assurance (CIMA).
                    <br />
                    Dotée d&apos;un capital de 5 000 000 000 FCFA Libéré à hauteur de 3 000 000 000 FCFA, la compagnie a su se positionner au fil de ses 20 années d&apos;existence comme un pionnier en terme d&apos;innovation de produits d&apos;assurance vie aussi bien en Côte d&apos;Ivoire que dans la zone CIMA, grâce à ses produits à succès...
                    </p>
                    
                    <div className="tpbs-video-button mt-50">
                      <Link href="#">
                        <a className="tpbs-btn-2">En savoir plus <i className="fa-solid fa-arrow-right"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img className="b-radius" src="assets/img/project/project-d.jpg" alt="project img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50"><b>Banking App Design &</b> Development</h3>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Client:<a href="#"> Rasalina De Willam (USA)</a></p></li>
                    <li><p>Date:<a href="#"> March 21, 2020</a></p></li>
                    <li><p>Category:<a href="#"> Technology</a></p></li>
                    <li><p>Category:</p>
                      <div className="aboutme-social ml-10">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30"><b>Something about</b> project  Case Studies</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
              </div>
              <div className="row mt-45">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img className="b-radius" src="assets/img/project/project-d2.jpg" alt="project img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img className="b-radius" src="assets/img/project/project-d3.jpg" alt="project img" />
                  </div>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
              <div className="project-details-nav mt-55">
                <div className="details-nav-item">
                  <Link href="/portfolio-details">
                    <a><i className="fas fa-long-arrow-left"></i> Back</a>
                  </Link>
                </div>
                <div className="details-nav-item">
                  <Link href="/portfolio-details">
                    <a>Next <i className="fas fa-long-arrow-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default VideoAreaFour;