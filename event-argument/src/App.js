import './App.css';

function Footbal() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal")}>Take the shot!</button>
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
