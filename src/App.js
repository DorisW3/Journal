import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/EntryForm/Form";
import { EntriesSection, Section } from "./components/EntriesSection/Section";
//import { Children } from "react";

function App() {
  return (
    <>
      <Header>Journal</Header>
      <Main>
        <Form></Form>
        <EntriesSection />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
