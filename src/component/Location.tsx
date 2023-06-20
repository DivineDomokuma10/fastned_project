import { Link } from "react-router-dom";
import { LocationInterface } from "../hooks/useDataBase";
import { useContext } from "react";
import { LocationEditContext } from "../context/editContext";

const Location = (prop: LocationInterface) => {
  const contextValue = useContext(LocationEditContext);
  return (
    <div className="table-content-container">
      <p className="table-content">{prop.name}</p>
      <p className="table-content">{prop.locationNo}</p>
      <p className="table-content">{prop.chargers?.length}</p>
      <p className="table-content">{prop.country}</p>
      <p className="table-content">{prop.id}</p>
      <p className="table-content">
        <Link
          to={`editLocation/${prop.id}`}
          className="edit-location-btn"
          onClick={() => contextValue?.onLocationEdit(prop)}
        >
          Edit
        </Link>
      </p>
    </div>
  );
};

export default Location;
