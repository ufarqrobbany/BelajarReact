import './App.css';

function Footbal() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  )
}

function App() {
  return (
    <div className="App">
      <Footbal />
    </div>
  );
}

export default App;
