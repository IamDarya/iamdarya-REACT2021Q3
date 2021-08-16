import React from "react";
import { Header } from "../header/header";
import "../header/header.scss";
import "../style.scss";
import "./about.scss"

export function About(): JSX.Element {
  return (
    <>
      <Header />
      <div className='about-wrapper'>
        <h2 className='about-sign'>About page</h2>
        <h3>About what? Hmmm...I don't know.So, I think it's always a good time for a quote from "The Lord of the Rings" by J.R.R. Tolkien:
        </h3>
        <section>
          <p>“Frodo: I wish the Ring had never come to me. I wish none of this had happened.</p>
          <p> Gandalf: So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us.”</p></section>
      </div>
    </>
  )
}
