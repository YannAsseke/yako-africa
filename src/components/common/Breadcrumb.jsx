import Link from 'next/link';

const Breadcrumb = ({title,subtitle}) => {
  return (
    <>
      <section className="breadcrumb__area include-bg pt-140 pb-140 breadcrumb__overlay" 
      style={{backgroundColor:"#2b6338", margin:'10px'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">{title}</h3>
                {/* <div className="breadcrumb__list">
                  <span><Link href="/">Home</Link></span>
                  <span className="dvdr"><i className="fa-light fa-colon"></i></span>
                  <span className="tp-current">{subtitle}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;