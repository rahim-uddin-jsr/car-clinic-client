import checkOutImg from "../../../../../assets/images/checkout/checkout.png";
import vectorImg from "../../../../../assets/images/checkout/vector.png";

const Banner = ({ children, title }) => {
  //   const path = useRoutes();
  //   console.log(path);
  return (
    <div className="carousel-item relative w-full">
      <img src={checkOutImg} className="w-full rounded-lg" />
      <div className="absolute flex flex-col w-full justify-center h-full rounded-lg text-white bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
        <h2 className="text-5xl font-semibold pl-40">{children}</h2>
      </div>
      <div className="absolute bottom-0  w-full mx-auto">
        <div className="w-full">
          <img
            className="relative w-[295px] h-[50px] mx-auto"
            src={vectorImg}
            alt=""
          />
          <h2 className="absolute bottom-2 w-full text-2xl text-white text-center font-semibold">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
