const BookingsRow = ({ service, handleDelete, handleStatus }) => {
  return (
    <tr>
      <th>
        <button
          onClick={() => {
            handleDelete(service._id);
          }}
          className="btn btn-sm btn-circle btn-error btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              {service?.service?.img ? (
                <img src={service?.service?.img} />
              ) : (
                <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>{service?.service?.title}</td>
      <td>{service?.email}</td>
      <td>{service?.service?.price}</td>
      <td>{service?.date}</td>
      <th>
        {service.status == "confirmed" ? (
          <span className="text-success font-bold uppercase">confirmed</span>
        ) : (
          <button
            onClick={() => handleStatus(service._id)}
            className="btn btn-primary btn-sm"
          >
            please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
