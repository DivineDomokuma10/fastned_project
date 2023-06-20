interface TableHeaderTitleInterface<T> {
  id?: T;
  type?: T;
  serialNumber?: T;
  status?: T;
  location?: T;
  locationNo?: T;
  charger?: T;
  country?: T;
}

const TableHeader = (Prop: TableHeaderTitleInterface<string>) => {
  return (
    <div className="table-header">
      <h5 className="table-header-titles">{Prop.id || Prop.location}</h5>
      <h5 className="table-header-titles">{Prop.type || Prop.locationNo}</h5>
      <h5 className="table-header-titles">
        {Prop.serialNumber || Prop.charger}
      </h5>
      <h5 className="table-header-titles">{Prop.status || Prop.country}</h5>
      <h5 className="table-header-titles">Updated</h5>
      <h5 className="table-header-titles">Actions</h5>
    </div>
  );
};

export default TableHeader;
