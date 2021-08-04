import React, { useState } from "react";
import "./form-of-registration.scss";
import "../style.scss";
import { CardInterface } from "../cards-with-data/card-interface";

export function FormOfRegistration(props: {
  setFormValues: React.Dispatch<React.SetStateAction<CardInterface[]>>;
}): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("Australia");
  const [gender, setGender] = useState("");
  const [agreementAgree, setAgreementAgree] = useState(false);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDateOfBirth("");
    setCountry("Australia");
    setGender("");
    setAgreementAgree(false);
  };

  const validation = (dataToValidate: CardInterface) => {

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validation({
      firstName,
      lastName,
      email,
      dateOfBirth,
      country,
      gender,
      agreementAgree,
    });
    props.setFormValues((state: CardInterface[]) => [
      ...state,
      {
        firstName,
        lastName,
        email,
        dateOfBirth,
        country,
        gender,
        agreementAgree,
      },
    ]);
    reset();
  };

  return (
    <div className="registration-wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            value={lastName}
            type="text"
            id="lastName"
            name="lastName"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Your email: </label>
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of birth: </label>
          <input
            value={dateOfBirth}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>

        <div className="countries-wrapper">
          <label htmlFor="country">
            Choose a Country you'd like to visit:{" "}
          </label>
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="France">France</option>
            <option value="Greece">Greece</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Portugal">Portugal</option>
            <option value="Spain">Spain</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="gender">
          <label htmlFor="gender">Choose your gender, please: </label>
          <div className="btn btn-male">
            <input
              type="radio"
              name="answer"
              id="male"
              value={gender}
              checked={gender==='male'}
              onChange={(event) => setGender("male")}
            />
            <label className="gender" htmlFor="male">
              Male
            </label>
          </div>
          <div className="btn btn-female">
            <input
              type="radio"
              name="answer"
              id="female"
              value={gender}
              checked={gender==='female'}
              onChange={(event) => setGender("female")}
            />
            <label className="gender" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        <div className="agreement-wrapper">
          <label htmlFor="html">
            I have read and accept the <a href="#">Privacy Statement</a>.
          </label>
          <input
            type="checkbox"
            className="agreement-checkbox"
            checked={agreementAgree}
            onChange={() => setAgreementAgree((prev) => !prev)}
          />{" "}
          {/* function(prev) { return !prev; } */}
        </div>

        <input type="submit" className="submit btn" value="Submit" />
      </form>
    </div>
  );
}
