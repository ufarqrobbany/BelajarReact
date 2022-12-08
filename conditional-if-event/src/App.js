import './App.css';

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />
  }
  return <MissedGoal />
}

function App() {
  return (
    <div className="App">
      <Goal isGoal={false} />
    </div>
  );
}

export default App;
