import React from "react";


export default function CharacterCard({ url, names, gender, local, species, status }) {

  return (
    <section>
      <div>
        <img src={url} alt='character' />
      </div>
      <div>
        <h1>Name: {names}</h1>
        <p>Gener: {gender}</p>
        <p>Location: {local}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </div>
    </section>
  )
}
