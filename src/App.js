import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Row from "./Components/Row/Row";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        isLargerow={true}
        title="netflix original"
        fetchurl={requests.fetchNetFlixOriginals}
      />
    </div>
  );
}

export default App;
