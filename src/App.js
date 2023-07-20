import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Input } from "./components/Main/Input";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header>Journal</Header>
      <Main>
        <Input></Input>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
