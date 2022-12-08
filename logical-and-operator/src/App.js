import './App.css';

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garasi</h1>
      {cars.length > 0 &&
        <h2>
          Kamu punya {cars.length} mobil di garasi kamu.
        </h2>
      }
    </>
  );
}

const cars = ["Ford", "BMW", "Audi"];

function App() {
  return (
    <div className="App">
      <Garage cars={cars} />
    </div>
  );
}

export default App;
