import "./App.css";
import Header from "./components/header/Header";
import Heros from "./components/heros/Heros";
import Card from "./components/card/Card";
import data from '../src/data'
function App() {
  const cards = data.map((item,index) => {
    return (
        <Card key = {index}
            item = {item}
        />
    )
})        
  return ( 
    <div className="App">
      <div className="container">
      <Header></Header>
      <Heros></Heros>
      <section className="card-list">
      {cards}
      </section>
      </div>
      
      
    </div>
  );
}

export default App;
