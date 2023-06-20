import React from "react";
import "./Form.css";
import { FormValues } from "./pages/AddLocation";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type TFormValidation = {
  register: UseFormRegister<FormValues>;
  error: FieldErrors<FormValues>;
};

const Form: React.FC<TFormValidation> = ({ register, error }) => {
  return (
    <div id="form">
      <h3>+ Add New Location</h3>
      <div className="first">
        <div className="label-inpt-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Location Name"
            {...register("name", { required: "This field is required" })}
          />
          <p className="err-msg">{error.name?.message}</p>
        </div>
        <div className="label-inpt-container">
          <label htmlFor="location-no">Location No</label>
          <input
            type="number"
            id="location-no"
            placeholder="Location No"
            {...register("locationNo", {
              required: "This field is required",
              maxLength: {
                value: 6,
                message: "Number has exceeded max length",
              },
              minLength: {
                value: 4,
                message: "Number is below min length",
              },
            })}
          />
          <p className="err-msg">{error.locationNo?.message}</p>
        </div>
      </div>
      <div className="second">
        <div className="label-inpt-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="City"
            {...register("city", {
              required: "This field is required",
            })}
          />
          <p className="err-msg">{error.city?.message}</p>
        </div>
        <div className="label-inpt-container">
          <label htmlFor="postal-code">Postal Code</label>
          <input
            type="number"
            id="postal-code"
            placeholder="Postal Code"
            {...register("postalCode", {
              required: "This field is required",
              pattern: {
                value: /([0-9]{5})/gm,
                message: "provide a valid Postal Code",
              },
            })}
          />
          <p className="err-msg">{error.postalCode?.message}</p>
        </div>
        <div className="label-inpt-container">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            {...register("country", {
              required: "This field is required",
              pattern: {
                value:
                  /A(BW|FG|GO|IA|L[AB]|ND|R[EGM]|SM|T[AFG]|U[ST]|ZE)|B(DI|E[LNS]|FA|G[DR]|H[RS]|IH|L[MRZ]|MU|OL|R[ABN]|TN|VT|WA)|C(A[FN]|CK|H[ELN]|IV|MR|O[DGKLM]|PV|RI|U[BW]|XR|Y[MP]|ZE)|D(EU|JI|MA|NK|OM|ZA)|E(CU|GY|RI|S[HPT]|TH)|F(IN|JI|LK|R[AO]|SM)|G(AB|BR|EO|GY|HA|I[BN]|LP|MB|N[BQ]|R[CDL]|TM|U[FMY])|H(KG|MD|ND|RV|TI|UN)|I(DN|MN|ND|OT|R[LNQ]|S[LR]|TA)|J(AM|EY|OR|PN)|K(AZ|EN|GZ|HM|IR|NA|OR|WT)|L(AO|B[NRY]|CA|IE|KA|SO|TU|UX|VA)|M(A[CFR]|CO|D[AGV]|EX|HL|KD|L[IT]|MR|N[EGP]|OZ|RT|SR|TQ|US|WI|Y[ST])|N(AM|CL|ER|FK|GA|I[CU]|LD|OR|PL|RU|ZL)|OMN|P(A[KN]|CN|ER|HL|LW|NG|OL|R[IKTY]|SE|YF)|QAT|R(EU|OU|US|WA)|S(AU|DN|EN|G[PS]|HN|JM|L[BEV]|MR|OM|PM|RB|SD|TP|UR|V[KN]|W[EZ]|XM|Y[CR])|T(C[AD]|GO|HA|JK|K[LM]|LS|ON|TO|U[NRV]|WN|ZA)|U(GA|KR|MI|RY|SA|ZB)|V(AT|CT|EN|GB|IR|NM|UT)|W(LF|SM)|YEM|Z(AF|MB|WE)/gm,
                message: "ISO 3166-1 alpha-3 format required eg: NGA - NIGERIA",
              },
            })}
          />
          <p className="err-msg">{error.country?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
