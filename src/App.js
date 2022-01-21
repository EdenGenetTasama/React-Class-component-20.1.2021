
import "./App.css";
import Show from "../src/components/show.component";
import "../src/styles/showStyle.css";
import Season from "../src/components/season.component";
import AddSeason from "./components/addSeason";
import EditSeason from "./components/EditSeson";

function App() {
  return (
    <div className="App">
      <Show showName="IronMan" rating={9} yearOut={2020} />
      <Season seasonNum = {9} rating={10/10} view={30_0000}/>
      <AddSeason/>
      <EditSeason nameSeries= "How i meet you mother" seasonOfSeries={9} dateOut="1996-11-18" isOver={true}/>
    </div>
  );
}

export default App;
