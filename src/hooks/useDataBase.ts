import { useEffect, useState } from "react";

export interface ChargerInterface {
  id?: number;
  type: "HPC" | "T52" | "T53C";
  serialNumber: string;
  status: "CONNECTED" | "NOT_CONNECTED" | "REMOVED";
  lastUpdated?: string;
}
export interface LocationInterface {
  id?: number;
  name: string;
  locationNo: number;
  chargers?: ChargerInterface[];
  postalCode: number;
  lastUpdated?: string;
  country: string;
}
type functionType = (property: LocationInterface) => void;

const useDataBase = (): [LocationInterface[], functionType] => {
  const [dataBase, setDataBase] = useState<LocationInterface[]>(() => {
    if (localStorage.dataBase !== undefined) {
      return JSON.parse(localStorage.dataBase);
    } else {
      return [];
    }
  });

  const addItem: functionType = (property: LocationInterface): void => {
    property.id = dataBase.length + 1;
    setDataBase((prevVal) => [...prevVal, property]);
  };

  useEffect(() => {
    if (dataBase.length !== 0) {
      localStorage.setItem("dataBase", JSON.stringify(dataBase));
    }
  }, [dataBase]);

  return [dataBase, addItem];
};

export default useDataBase;
