import './App.css';

function Footbal() {
  const shoot = (a, b) => {
    alert(b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal", event)}>Take the shot!</button>
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
