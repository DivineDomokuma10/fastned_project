import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LocationInterface } from "./hooks/useDataBase";
import LocationListing from "./component/pages/LocationListing";
import AddLocation from "./component/pages/AddLocation";
import EditLocation from "./component/pages/EditLocation";
import { ContextInterface, LocationEditContext } from "./context/editContext";

function App() {
  const [locationToEdit, setLocationToEdit] =
    useState<LocationInterface | null>(null);
  const onLocationEdit = (locationObj: LocationInterface): void =>
    setLocationToEdit(locationObj);
  const contextValues: ContextInterface = { locationToEdit, onLocationEdit };
  return (
    <main id="container">
      <LocationEditContext.Provider value={contextValues}>
        <Routes>
          <Route path="/" element={<LocationListing />} />
          <Route path="addlocation" element={<AddLocation />} />
          <Route path="editLocation/:id" element={<EditLocation />} />
        </Routes>
      </LocationEditContext.Provider>
    </main>
  );
}

export default App;
