import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <>
      <div style={{ padding: "30px" }} className="App">
        <h2>Aplikasi Kontak App </h2>
        <hr />
        <AddKontak />
        <hr />
        <ListKontak />
      </div>
    </>
  );
}

export default App;
