import React from "react";
import "./ChargerModal.css";
import { useForm } from "react-hook-form";
import { ChargerInterface } from "../hooks/useDataBase";

export interface ModalHandlerInterface {
  onHandleModal: () => void;
  onGetChargerData: (data: ChargerInterface) => void;
}

const ChargerModal: React.FC<ModalHandlerInterface> = ({
  onHandleModal,
  onGetChargerData,
}) => {
  const form = useForm<ChargerInterface>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: ChargerInterface): void => {
    onGetChargerData(data);
  };

  return (
    <aside className="modal-container">
      <form className="modal" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h1>Add Charger</h1>
          <span onClick={onHandleModal} className="close-modal">
            X
          </span>
        </div>
        <div className="inpts-container">
          <div className="label-select-container">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              {...register("status", { required: "This field is required" })}
            >
              <option value="CONNECTED">CONNECTED</option>
              <option value="NOT_CONNECTED">NOT_CONNECTED</option>
              <option value="REMOVED">REMOVED</option>
            </select>
            <p className="err-msg">{errors.status?.message}</p>
          </div>
          <div className="label-select-container">
            <label htmlFor="type">Charger Type</label>
            <select
              id="type"
              {...register("type", { required: "This field is required" })}
            >
              <option value="HPC">HPC</option>
              <option value="T52">T52</option>
              <option value="T53C">T53C</option>
            </select>
            <p className="err-msg">{errors.type?.message}</p>
          </div>
          <div className="label-select-container">
            <label htmlFor="status">Serial Number</label>
            <input
              type="number"
              placeholder="Serial Number"
              {...register("serialNumber", {
                required: "This field is required",
                maxLength: {
                  value: 6,
                  message: "serial number must be 6 digit",
                },
                minLength: {
                  value: 6,
                  message: "serial number must be 6 digit",
                },
              })}
            />
            <p className="err-msg">{errors.serialNumber?.message}</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn primary-btn" type="submit">
            Save
          </button>
          <button
            type="button"
            className="btn secondary-btn"
            onClick={onHandleModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </aside>
  );
};

export default ChargerModal;
