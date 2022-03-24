import logo from './logo.svg';
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import PopoutMenu from './components-main/sub-components/pop-out-menu';

function App() {
  return (
      <div className='d-f-col'>
        
        <section className="main-section">
          <Header className="header"/>
          <PopoutMenu/>
        </section>
      </div>
  );
}

export default App;
