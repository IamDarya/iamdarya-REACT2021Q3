import React from "react";
import { CardInterface } from "./card-interface";

type PropsWithData = {
  item: CardInterface;
};

export function CardWithData(props: PropsWithData): JSX.Element {
  return (
    <div className="one-card-wrapper">
      <section>
        <p>First name: </p>
        <h2>{props.item.firstName}</h2>
      </section>
      <section>
        <p>Last name: </p>
        <h2>{props.item.lastName}</h2>
      </section>
      <section>
        <p>Your email: </p>
        <h2>{props.item.email}</h2>
      </section>
      <section>
        <p>Date of birth: </p>
        <h2>{props.item.dateOfBirth}</h2>
      </section>
      <section>
        <p>The country you'd like to visit: </p>
        <h2>{props.item.country}</h2>
      </section>
      <section>
        <p>Your gender: </p>
        <h2>{props.item.gender}</h2>
      </section>
      <section>
        <p>Agreement: </p>
        <h2>{props.item.agreementAgree.toString()}</h2>
      </section>
    </div>
  );
}
