
import './assets/css/App.css';
import  ComponentCost  from "./components/ComponentCost"
import  ComponentHeader from "./components/ComponentHeader"
import ComponentFooter from './components/ComponentFooter';
import ComponentList from './components/ComponentList';
import Dataprovider from './assets/context/Dataprovider';
function App() {
  return (
    <div className="App">
      <ComponentHeader/>
      <ComponentList/>

      <ComponentCost/>
      <ComponentFooter/>
      <Dataprovider></Dataprovider>
    </div>

  );
}

export default App;
