import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-100 align-middle">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 ">
          <div className="lg:w-3/4 lg:h-[473px] relative">
            <img
              src={person}
              className="h-full w-full rounded-lg shadow-2xl "
            />
            <img
              src={parts}
              className=" w-3/4 h-[332px] border-8 border-white rounded-lg shadow-2xl absolute top-1/2 -right-1/3"
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-5">
          <p className="text-primary text-xl font-medium">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
