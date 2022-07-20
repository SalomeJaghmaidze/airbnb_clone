
import './App.css';
import Header from './components/header/Header';
import Heros from './components/heros/Heros';
import Card from './components/card/Card';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Heros></Heros>
     <Card></Card>
    </div>
  );
}

export default App;
