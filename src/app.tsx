import React, { useState } from "react";
import { FormOfRegistration } from "./form-of-registration/form-of-registration";
import { CardInterface } from "./cards-with-data/card-interface";
import { CardWithData } from "./cards-with-data/cards-with-data";

export function App(): JSX.Element {
  const [formValues, setFormValues] = useState(new Array<CardInterface>());
  return (
    <>
      <h1>Form</h1>
      <FormOfRegistration setFormValues={setFormValues} />
      <div className='cards-wrapper'>
        {formValues.map((item, index) => (
          <CardWithData item={item} key={index} />
        ))}
      </div>
    </>
  );
}
