import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import blogData from '../../data/blogData';

const blogs = blogData.slice(0, 4)

const BlogArea = ({ padd }) => {

  return (
    <>
      <section className={`blog__area pt-75 pb-110 ${padd ? padd : ''}`} style={{ backgroundImage: 'url(assets/img/slider/slide-1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'1200px' }}>
        <div className="container" style={{ paddingTop: '458px'}}>
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog-slider p-relative">
                <div className="blog-slider-active swiper-container">

                  <Swiper style={{ backgroundColor: '#fff'}}
                    navigation={{ nextEl: '.blog-slider-button-next-1', prevEl: '.blog-slider-button-prev-1' }}
                    modules={[Navigation, Pagination, Autoplay]} className="swiper-wrapper"
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ el: ".blog-slider-pagination", clickable: true }}
                    autoplay={{ delay: 6000 }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      550: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {blogs.map(item => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className="blog-item swiper-slide fix transition-3">
                            <div className="blog-thumb transition-3">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="blog-content transition-3">
                              <h3 className="blog-title" style={{ color: 'black'}}>
                                <Link href={`/blog-details/${item.id}`} >
                                  <a>{item.title}</a>
                                </Link>
                              </h3>
                            
                              <div className="blog-btn">
                                <Link href={`/blog-details/${item.id}`}>
                                  <a className="tp-solid-btn">En savoir plus</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                    }
                  </Swiper>


                  <div
                    className="blog-slider-pagination d-flex justify-content-center align-items-center mt-60 mb-10">
                  </div>
                </div>
                <div className="blog-slider-nav-1">
                  <button className="blog-slider-button-next-1"><i className="far fa-long-arrow-right"></i></button>
                  <button className="blog-slider-button-prev-1"><i className="far fa-long-arrow-left"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;