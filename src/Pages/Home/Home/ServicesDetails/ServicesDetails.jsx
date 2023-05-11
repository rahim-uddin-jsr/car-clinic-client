import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
const ServicesDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { img } = service;
  return (
    <div>
      <Banner title="Home/Service Details">Service Details</Banner>
      <div className="md:flex gap-5">
        <div className="w-4/6 bg-slate-100">
          <div className="carousel-item relative w-full">
            <img src={img} className="w-full rounded-lg" />
            <div className="absolute flex flex-col  w-full justify-center h-full rounded-lg text-white bg-gradient-to-l from-[#151515] to-[21, 21, 21, 0]"></div>
          </div>
        </div>
        <div className="w-4/12 bg-purple-100">
          <h2>left side</h2>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
