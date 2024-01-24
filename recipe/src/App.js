import logo from './logo.svg';
import { AiOutlineRest } from "react-icons/ai";
import './App.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <AiOutlineRest style={{ fontSize: '200%'}}/>
        <h1>Amazing Recipes</h1>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      {/* Your other components and content go here */}
    </div>
  );
};

export default App;
