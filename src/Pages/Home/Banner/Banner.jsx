import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";
import bannerImg5 from "../../../assets/images/banner/5.jpg";
import bannerImg6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerImg1} className="w-full" />

        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide6" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImg2} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide1" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImg3} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide2" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide4" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerImg4} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide3" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide5" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={bannerImg5} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide4" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide6" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={bannerImg6} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full pl-10 text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="space-y-7 w-2/5">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn  btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-ghost text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide5" className="btn  glass btn-outline btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn  btn-primary btn-circle ml-5">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
