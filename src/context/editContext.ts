import { createContext } from "react";
import { LocationInterface } from "../hooks/useDataBase";

export interface ContextInterface {
  locationToEdit: LocationInterface | null;
  onLocationEdit: (locationObj: LocationInterface) => void;
}
export const LocationEditContext = createContext<ContextInterface | null>(null);
