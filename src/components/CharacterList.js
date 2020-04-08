import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';
import SearchForm from './SearchForm';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setData] = useState([]);
  const [searchTerms, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(chars)

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res.data);
          setData(res.data.results);
        })
        .catch(err => {
          console.error('Error', err);
        });
    };
    console.log(chars)
    const results = chars.filter(character => {
      return character.name.toLowerCase().includes(searchTerms.toLowerCase());
    });

    getCharacters();
    setSearchResults(results);

  }, [searchTerms]);

  return (
    <section>
      <SearchForm searchTerms={searchTerms} handleChange={handleChange} />

      {searchResults.map(char => (
        <CharacterCard url={char.image} names={char.name} gender={char.gender} local={char.location.name} species={char.species.name} status={char.status} />
      ))}


      <section className="character-list">

        {chars.map(char => (
          <CharacterCard url={char.image} names={char.name} gender={char.gender} local={char.location.name} species={char.species.name} status={char.status} />
        ))}

      </section>
    </section>
  );
}