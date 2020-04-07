import React, { useState } from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage"
import SearchForm from "./components/SearchForm"



export default function App() {

  const [name, setName] = useState("");
  
  const searchFunc = (event, search) => {
    event.preventDefault();
    setName(search.name);
  };
  return (
    <main data-testid='app'>
      <Header />
      <Route path='/'  component={WelcomePage} />

      <SearchForm searchFunc={searchFunc} />

      <Route
        exact
        path="/characters"
        component={CharacterList}
        component={() => <CharacterList name={name} />}
      />
    </main>
  );
}

