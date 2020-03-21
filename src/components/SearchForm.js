import React, { useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function SearchForm(searchTerms, handleChange) {

  const [favChar, setFavChar] = useState([]);
  const [charTerms, setCharTerm] = useState('');
  const [charResults, setCharResults] = useState(favChar)

  const formChange = event => {
    setCharTerm(event.target.value);
  }


  useEffect(() => {
   
    const newCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res.data);
          setFavChar(res.data.results);
        })
        .catch(err => {
          console.error('Error', err);
        });
    };
    console.log(favChar)
    const results = favChar.filter(character => {
      return character.name.toLowerCase().includes(charTerms.toLowerCase());
    });

    newCharacters();
    setCharResults(results);

  }, [charTerms]);



  return (
    <section className="search-form">

      {charResults.map(char => (
        <CharacterCard
          url={char.image}
          names={char.name}
          gender={char.gender}
          local={char.location.name}
          species={char.species.name}
          status={char.status} />
      ))}

      <form >
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="search"
          onChange={handleChange, formChange}
          value={searchTerms}
        />

      </form>    </section>
  );
}
