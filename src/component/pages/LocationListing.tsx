import { Link } from "react-router-dom";
import TableHeader from "../TableHeader";
import useDataBase from "../../hooks/useDataBase";
import Location from "../Location";
import NotFound from "../NotFound";

enum tableHeaderTitles {
  location = "Location",
  locationNo = "LocationNo",
  charger = "Charger",
  country = "Country",
  lastUpdated = "Updated",
  action = "Action",
}

const LocationListing = () => {
  const [dataBase] = useDataBase();
  return (
    <section className="sub-container">
      <div className="header">
        <h1>Locations</h1>
        <Link to="addLocation" className="btn primary-btn">
          + Add Location
        </Link>
      </div>
      <div className="table">
        <TableHeader {...tableHeaderTitles} />
        <div>
          {dataBase.length === 0 ? (
            <NotFound>No Location has been added yet</NotFound>
          ) : (
            dataBase.map((data, index) => <Location key={index} {...data} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationListing;
