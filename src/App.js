const { default: Weather } = require('./components/Weather');

function App() {
  return (
    <div className="App">
      <h1>天気を出すぞ！</h1>
      <Weather />
    </div>
  );
}

export default App;
