import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import BrandArea from '../../components/common/BrandArea';
import Breadcrumb from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import HeaderYako from '../../components/common/HeaderYako';
import GetInTouch from '../../components/Home-yako/GetInTouch';
import SEO from '../../components/seo';
import ServiceContact from '../../components/Service-details/ServiceContact';

import servicesData from '../../data/Produits';

const ServiceDetails = () => {
  const router = useRouter();
  const [serviceItem, setServiceItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) {

    }
    else {
      setServiceItem(servicesData.find(item => item.id == id))
    }
  }, [id])

  return (
    <>
      <SEO pageTitle="Detail produit" />
      <HeaderYako />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}

      <div className="services-details-area pt-50 pb-105">
        <div className="container">
        <h4 className="services-d-title mb-25" style={{ color:'#f9b233' }}>{serviceItem.title}</h4>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src={serviceItem.service} alt="services-sm-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {serviceItem.text}
              {/* <div className="row mt-70">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">01</span>
                    </div>
                    <h6 className="step-title mt-40">Step One</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1">
                      <img src="/assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">

                      <span className="step-number">02</span>
                    </div>
                    <h6 className="step-title mt-40">Step Two</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1 d-none d-lg-block">
                      <img src="/assets/img/shape/arrow-shape-2.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">03</span>
                    </div>
                    <h6 className="step-title mt-40">Step Three</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1">
                      <img src="/assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">04</span>
                    </div>
                    <h6 className="step-title mt-40">Step Four</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      {/* ServiceContact */}
      {/* <ServiceContact /> */}
      {/*BrandArea  */}
      {/* <BrandArea padd="services-padd" /> */}
      {/*FooterTwo  */}
      <FooterTwo />

    </>
  );
};

export default dynamic(()=> Promise.resolve(ServiceDetails), {ssr: false});