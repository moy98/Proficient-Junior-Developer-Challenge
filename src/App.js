
import './assets/css/App.css';

import  ComponentHeader from "./components/ComponentHeader"
import ComponentFooter from './components/ComponentFooter';
import ComponentList from './components/ComponentList';
import { ComponentCost }  from './assets/context/Data';

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
