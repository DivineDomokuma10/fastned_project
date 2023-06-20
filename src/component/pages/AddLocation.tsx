import React, { useState } from "react";
import Form from "../Form";
import TableHeader from "../TableHeader";
import { useForm } from "react-hook-form";
import ChargerModal from "../ChargerModal";
import useDataBase, { ChargerInterface } from "../../hooks/useDataBase";
import NotFound from "../NotFound";

enum tableHeaderTitles {
  id = "Id",
  type = "Type",
  serialNumber = "SerialNo",
  status = "Status",
  lastUpdated = "Last Updated",
  action = "Action",
}

export interface FormValues {
  name: string;
  locationNo: number;
  city: string;
  postalCode: number;
  country: string;
  chargers?: ChargerInterface[];
}

const AddLocation: React.FC = () => {
  const [dataBase, addItem] = useDataBase();
  const [chargerData, setChargerData] = useState<ChargerInterface[]>([]);
  const [showChargerModal, setShowChargerModal] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const submit = (data: FormValues): void => {
    chargerData.length === 0
      ? (data.chargers = [])
      : (data.chargers = chargerData);
    addItem(data);
    console.log(dataBase);
  };
  const toggleModal = (): void => setShowChargerModal(!showChargerModal);
  const getChargerData = (data: ChargerInterface): void =>
    setChargerData([...chargerData, data]);

  return (
    <>
      {showChargerModal && (
        <ChargerModal
          onHandleModal={toggleModal}
          onGetChargerData={getChargerData}
        />
      )}
      <form
        className="sub-container"
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <Form register={register} error={errors} />
        <section className="charger-container">
          <div className="header charger-header">
            <h1>Charger</h1>
            <span className="btn primary-btn" onClick={toggleModal}>
              + Add Charger
            </span>
          </div>
          <div className="table">
            <TableHeader {...tableHeaderTitles} />
            <div>
              <NotFound>No Charger found in this location</NotFound>
            </div>
          </div>
        </section>
        <div className="submit-btn-container">
          <button type="submit" className="btn primary-btn">
            Save Location
          </button>
        </div>
      </form>
    </>
  );
};

export default AddLocation;
