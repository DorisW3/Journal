import React, { Fragment, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/EntryForm/Form";
import { EntriesSection } from "./components/EntriesSection/Section.js";

function App({ initialEntries }) {
  const [entries, setEntries] = useState([initialEntries]);

  function setNewEntries(newEntry) {
    setEntries(initialEntries, entries);
  }

  return (
    <>
      <Header>Journal</Header>
      <Main>
        <Form entries={entries} setNewEntries={setNewEntries}></Form>
        <EntriesSection entries={entries}></EntriesSection>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
