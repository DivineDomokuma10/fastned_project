import React, { useContext } from "react";
import { LocationEditContext } from "../../context/editContext";

const EditLocation: React.FC = () => {
  const contextValue = useContext(LocationEditContext);

  console.log(contextValue?.locationToEdit);
  return <div>EditLocation</div>;
};

export default EditLocation;
