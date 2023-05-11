import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      {breadcrumbs.map(({ breadcrumb }, idx) => (
        <b key={idx} className="text-2xl text-white uppercase">
          {breadcrumb} {breadcrumbs.length - 1 !== idx ? "/ " : ""}
        </b>
      ))}
    </>
  );
};

export default Breadcrumbs;
