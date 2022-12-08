import './App.css';

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" }
  ];
  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "lightBlue" }}>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const Header = () => {
  const myStyle = { color: "white", backgroundColor: "DodgerBlue", padding: "10px" };

  return (
    <>
      <h1 style={myStyle}>Header Style!</h1>
      <p>Add a little style!</p>
    </>
  )
}

function App() {
  return (
    <div>
      <Garage />
      <Header />
    </div>
  );
}

export default App;
