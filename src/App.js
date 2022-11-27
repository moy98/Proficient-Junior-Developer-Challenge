
import './assets/css/App.css';
import  ComponentCost  from "./components/ComponentCost"
import  ComponentHeader from "./components/ComponentHeader"
import ComponentFooter from './components/ComponentFooter';
import ComponentList from './components/ComponentList';
function App() {
  return (
    <div className="App">
      <ComponentHeader/>
      <ComponentList/>
      <ComponentCost/>
      <ComponentFooter/>
    </div>

  );
}

export default App;
